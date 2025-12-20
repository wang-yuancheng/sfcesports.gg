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

    // 1. Get current subscription status
    const { data: profile } = await supabase
      .from("profiles")
      .select("membership_tier")
      .eq("id", user.id)
      .single();

    const currentTier = profile?.membership_tier || "free";

    // 2. Map Tiers to Price IDs
    const TIER_PRICE_MAP: Record<string, string | undefined> = {
      Starter: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER,
      Pro: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
      Elite: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ELITE,
    };

    const currentPriceId = TIER_PRICE_MAP[currentTier];
    let planRemoved = false; // TRACKER

    // 3. Filter Local Items: Remove if matches current plan
    const validLocalItems = (localItems as CartItem[]).filter((item) => {
      if (item.type === "membership" && item.priceId === currentPriceId) {
        planRemoved = true; // Mark as removed
        return false;
      }
      return true;
    });

    // 4. Fetch DB Items
    const { data: dbRows } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id);

    const dbItemsMap = new Map();
    const itemsToDelete: string[] = [];

    // 5. Filter DB Items
    if (dbRows) {
      dbRows.forEach((row) => {
        // If DB has the item user is currently subscribed to, mark for deletion
        if (row.type === "membership" && row.price_id === currentPriceId) {
          itemsToDelete.push(row.price_id);
          // We don't necessarily need to flag 'planRemoved' here if it was just sitting in the DB,
          // but if you want to notify them that their DB cart was cleaned, you could set it to true.
          // Usually we only notify if the USER's local action (the merge) caused a removal.
          return;
        }
        dbItemsMap.set(row.price_id, row);
      });
    }

    // 6. Logic to ensure only 1 membership exists in the final cart
    const localMembership = validLocalItems.find(
      (i) => i.type === "membership"
    );

    if (localMembership) {
      dbItemsMap.forEach((row) => {
        if (
          row.type === "membership" &&
          row.price_id !== localMembership.priceId
        ) {
          itemsToDelete.push(row.price_id);
          dbItemsMap.delete(row.price_id);
        }
      });
    }

    // 7. Calculate Counts & Upserts
    const localCounts = new Map<string, { count: number; item: CartItem }>();
    validLocalItems.forEach((item) => {
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

    // 8. Execute DB Operations
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

    // 9. Return Final List
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

    return NextResponse.json({ items: finalItems, planRemoved });
  } catch (error: any) {
    console.error("Merge error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}