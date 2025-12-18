import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover", // Update this string to match the error
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();
    const supabase = await createClient();
    
    // 1. Get User
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 2. Get User Profile (to check for existing customer ID)
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id, membership_tier")
      .eq("id", user.id)
      .single();

    let customerId = profile?.stripe_customer_id;

    // 3. Create Stripe Customer if they don't exist
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_id: user.id },
      });
      customerId = customer.id;
      // Save this ID to Supabase (Crucial!)
      await supabase.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
    }

    // 4. Check for Active Subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });
    const currentSubscription = subscriptions.data[0];

    // --- SCENARIO A: NEW SUBSCRIPTION ---
    if (!currentSubscription) {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_URL}/account?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/shop?canceled=true`,
      });
      return NextResponse.json({ url: session.url });
    }

    // --- SCENARIO B: UPGRADE / DOWNGRADE ---
    // The user already has a subscription. We update it directly.
    
    // Logic: Proration happens automatically by default in Stripe.
    // This charges the difference immediately for upgrades.
    const subscriptionItem = currentSubscription.items.data[0];
    
    await stripe.subscriptions.update(currentSubscription.id, {
      items: [{
        id: subscriptionItem.id,
        price: priceId,
      }],
      proration_behavior: 'always_invoice', // Calculates cost difference and charges/credits immediately
    });

    // Since we updated directly, we don't go to checkout. We return a success flag.
    return NextResponse.json({ success: true, message: "Subscription updated" });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}