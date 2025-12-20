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

    // Map Tiers to Price IDs
    const TIER_PRICE_MAP: Record<string, string | undefined> = {
      Starter: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER,
      Pro: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
      Elite: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ELITE,
    };

    const currentPriceId = TIER_PRICE_MAP[currentTier];
    let planRemoved = false;

    // 2. Filter Local Items: Remove if matches current plan (Scenario C)
    const validLocalItems = (localItems as CartItem[]).filter((item) => {
      if (item.type === "membership" && item.priceId === currentPriceId) {
        planRemoved = true;
        return false;
      }
      return true;
    });

    // 3. Fetch DB Items
    const { data: dbRows } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id);

    const dbItems = dbRows || [];
    const dbWasEmpty = dbItems.length === 0;

    // 4. SCENARIO B: Account Cart ALREADY Has Items
    // Action: The Account Cart takes priority. Ignore guest items.
    if (!dbWasEmpty) {
      // Map DB rows back to CartItem shape
      const existingItems: CartItem[] = [];
      for (const row of dbItems) {
        // Handle quantity (expand to individual items for frontend)
        for (let i = 0; i < (row.quantity || 1); i++) {
          existingItems.push({
            id: crypto.randomUUID(),
            name: row.name,
            price: Number(row.price),
            priceId: row.price_id || row.priceId,
            type: row.type as "membership" | "one-time",
          });
        }
      }

      return NextResponse.json({
        items: existingItems,
        planRemoved, // Pass flag so frontend can warn user if they tried to add a duplicate plan
        addedToEmpty: false,
      });
    }

    // 5. SCENARIO A: Account Cart is Empty
    // Action: Add Guest/Pending items to database.
    if (validLocalItems.length > 0) {
      const inserts = validLocalItems.map((item) => ({
        user_id: user.id,
        price_id: item.priceId,
        name: item.name,
        price: item.price,
        type: item.type,
        quantity: 1, // Start with 1
      }));

      // Note: In a real app you might want to aggregate quantities here if duplicates exist in guest cart
      // For now, we insert them as is.
      const { error } = await supabase.from("cart_items").insert(inserts);

      if (error) throw error;

      // Return the items we just inserted (assigning new IDs for frontend state)
      const newItems = validLocalItems.map((item) => ({
        ...item,
        id: crypto.randomUUID(),
      }));

      return NextResponse.json({
        items: newItems,
        planRemoved,
        addedToEmpty: true,
      });
    }

    // Fallback: DB empty and no valid local items
    return NextResponse.json({
      items: [],
      planRemoved,
      addedToEmpty: false,
    });
  } catch (error: any) {
    console.error("Merge error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
