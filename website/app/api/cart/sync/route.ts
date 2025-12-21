import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/hooks/useCart";

export async function POST(req: Request) {
  try {
    const { items } = await req.json();
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: true });
    }

    const counts = new Map<string, { count: number; item: CartItem }>();

    (items as CartItem[]).forEach((item) => {
      if (!item.priceId) return;

      const current = counts.get(item.priceId);
      if (current) {
        current.count += 1;
      } else {
        counts.set(item.priceId, { count: 1, item });
      }
    });

    const activePriceIds = Array.from(counts.keys());

    const upserts = Array.from(counts.values()).map(({ count, item }) => ({
      user_id: user.id,
      price_id: item.priceId,
      name: item.name,
      price: item.price,
      type: item.type,
      quantity: count,
    }));

    if (activePriceIds.length > 0) {
      const formattedList = `(${activePriceIds
        .map((id) => `"${id}"`)
        .join(",")})`;

      const { error: deleteError } = await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", user.id)
        .filter("price_id", "not.in", formattedList); // Safer syntax

      if (deleteError) {
        console.error("Delete error:", deleteError);
        throw deleteError;
      }
    } else {
      await supabase.from("cart_items").delete().eq("user_id", user.id);
    }

    if (upserts.length > 0) {
      const { error: upsertError } = await supabase
        .from("cart_items")
        .upsert(upserts, { onConflict: "user_id, price_id" });

      if (upsertError) {
        console.error("Upsert error:", upsertError);
        throw upsertError;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Sync error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
