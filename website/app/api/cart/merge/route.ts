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

    const { data: dbRows } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id);

    const dbItemsMap = new Map();
    if (dbRows) {
      dbRows.forEach((row) => dbItemsMap.set(row.price_id, row));
    }

    const localMembership = (localItems as CartItem[]).find(
      (i) => i.type === "membership"
    );
    const itemsToDelete: string[] = [];

    if (localMembership) {
      dbRows?.forEach((row) => {
        if (
          row.type === "membership" &&
          row.price_id !== localMembership.priceId
        ) {
          itemsToDelete.push(row.price_id);
          dbItemsMap.delete(row.price_id);
        }
      });
    }

    const localCounts = new Map<string, { count: number; item: CartItem }>();
    (localItems as CartItem[]).forEach((item) => {
      const current = localCounts.get(item.priceId);
      if (current) current.count += 1;
      else localCounts.set(item.priceId, { count: 1, item });
    });

    const upserts = [];

    for (const [priceId, data] of localCounts.entries()) {
      const dbItem = dbItemsMap.get(priceId);

      let newQuantity = data.count;
      if (dbItem) {
        newQuantity += dbItem.quantity;
      }

      if (data.item.type === "membership") newQuantity = 1;

      upserts.push({
        user_id: user.id,
        price_id: priceId,
        name: data.item.name,
        price: data.item.price,
        type: data.item.type,
        quantity: newQuantity,
      });

      if (dbItem) {
        dbItem.quantity = newQuantity;
      } else {
        dbItemsMap.set(priceId, { ...data.item, quantity: newQuantity });
      }
    }

    if (itemsToDelete.length > 0) {
      await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", user.id)
        .in("price_id", itemsToDelete);
    }

    if (upserts.length > 0) {
      const { error } = await supabase
        .from("cart_items")
        .upsert(upserts, { onConflict: "user_id, price_id" });
      if (error) throw error;
    }

    const finalItems: CartItem[] = [];

    for (const [priceId, row] of dbItemsMap.entries()) {
      const currentPriceId = row.price_id || row.priceId || priceId;

      for (let i = 0; i < row.quantity; i++) {
        finalItems.push({
          id: crypto.randomUUID(),
          name: row.name,
          price: Number(row.price),
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
