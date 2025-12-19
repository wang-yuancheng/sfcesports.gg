import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/hooks/useCart";

export async function POST(req: Request) {
  try {
    const { localItems } = await req.json();
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 1. Fetch DB Cart
    const { data: dbRows } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id);

    // Map: price_id -> DB Row Data
    const dbItemsMap = new Map();
    if (dbRows) {
      dbRows.forEach((row) => dbItemsMap.set(row.price_id, row));
    }

    // 2. Process Local Items
    const localCounts = new Map<string, { count: number; item: CartItem }>();
    (localItems as CartItem[]).forEach((item) => {
      const current = localCounts.get(item.priceId);
      if (current) current.count += 1;
      else localCounts.set(item.priceId, { count: 1, item });
    });

    // 3. Merge Logic (Union + Sum)
    const upserts = [];

    for (const [priceId, data] of localCounts.entries()) {
      const dbItem = dbItemsMap.get(priceId);

      let newQuantity = data.count;
      if (dbItem) {
        newQuantity += dbItem.quantity;
      }

      // Enforce Membership Limit
      if (data.item.type === "membership") newQuantity = 1;

      upserts.push({
        user_id: user.id,
        price_id: priceId,
        name: data.item.name,
        price: data.item.price,
        type: data.item.type,
        quantity: newQuantity,
      });

      // Update the map for the response
      // If DB didn't have it, we add it to the map so the response includes it
      if (dbItem) {
        dbItem.quantity = newQuantity;
      } else {
        dbItemsMap.set(priceId, { ...data.item, quantity: newQuantity });
      }
    }

    // 4. Perform Upsert
    if (upserts.length > 0) {
      const { error } = await supabase
        .from("cart_items")
        .upsert(upserts, { onConflict: "user_id, price_id" });
      if (error) throw error;
    }

    // 5. Expand to Flat List
    const finalItems: CartItem[] = [];

    // Iterate over the MAP (which now contains DB items + Merged items)
    for (const [priceId, row] of dbItemsMap.entries()) {
      // Handle case where row might be from DB (snake_case) or local (camelCase)
      // Ideally, normalize this earlier.
      const currentPriceId = row.price_id || row.priceId || priceId;

      for (let i = 0; i < row.quantity; i++) {
        finalItems.push({
          id: crypto.randomUUID(),
          name: row.name,
          price: Number(row.price), // Ensure number
          priceId: currentPriceId,
          type: row.type as "membership" | "one-time",
        });
      }
    }

    return NextResponse.json({ items: finalItems });
  } catch (error: any) {
    console.error("Merge error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
