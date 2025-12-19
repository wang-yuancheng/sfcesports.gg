import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/hooks/useCart";

export async function POST(req: Request) {
  try {
    const { items } = await req.json();
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    // Debugging: Log if user is missing (helps identify cookie/auth issues)
    if (!user) {
        console.log("Sync skipped: No user found");
        return NextResponse.json({ success: true });
    }

    // 2. Calculate Quantities
    const counts = new Map<string, { count: number; item: CartItem }>();
    
    (items as CartItem[]).forEach((item) => {
        // Validation: Skip items with missing priceIds to prevent DB errors
        if (!item.priceId) return;

        const current = counts.get(item.priceId);
        if (current) {
            current.count += 1;
        } else {
            counts.set(item.priceId, { count: 1, item });
        }
    });

    const activePriceIds = Array.from(counts.keys());

    // 3. Prepare Upserts
    const upserts = Array.from(counts.values()).map(({ count, item }) => ({
        user_id: user.id,
        price_id: item.priceId,
        name: item.name,
        price: item.price,
        type: item.type,
        quantity: count
    }));

    // 4. Sync Strategy

    // A. Delete items NOT in the current list
    if (activePriceIds.length > 0) {
        // ⚡ FIX: Use proper formatting for "not.in" filter
        // The .not() modifier with 'in' expects a formatted string list: '("id1","id2")'
        const formattedList = `(${activePriceIds.map(id => `"${id}"`).join(',')})`;
        
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
        // If list is empty, clear the user's cart
        await supabase.from("cart_items").delete().eq("user_id", user.id);
    }

    // B. Upsert new items
    if (upserts.length > 0) {
        const { error: upsertError } = await supabase
            .from("cart_items")
            .upsert(upserts, { onConflict: 'user_id, price_id' });

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