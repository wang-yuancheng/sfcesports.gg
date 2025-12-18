import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Stripe from "stripe";

// Initialize Stripe with the correct API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover", 
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();
    const supabase = await createClient();

    // 1. Get User
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 2. Get Profile (to check for existing customer ID)
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
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
      // Save this ID to Supabase
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
        success_url: `${process.env.NEXT_PUBLIC_URL}/account/membership?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/shop?canceled=true`,
      });
      return NextResponse.json({ url: session.url });
    }

    // --- SCENARIO B: UPGRADE / DOWNGRADE ---
    const currentItem = currentSubscription.items.data[0];
    
    // Fetch prices to compare amounts
    const [newPrice, oldPrice] = await Promise.all([
      stripe.prices.retrieve(priceId),
      stripe.prices.retrieve(currentItem.price.id)
    ]);

    const newAmount = newPrice.unit_amount || 0;
    const oldAmount = oldPrice.unit_amount || 0;
    const isUpgrade = newAmount > oldAmount;

    if (isUpgrade) {
      // UPGRADE: Immediate change, charge the difference now
      await stripe.subscriptions.update(currentSubscription.id, {
        items: [{
          id: currentItem.id,
          price: priceId,
        }],
        proration_behavior: 'always_invoice', // Charges immediately
      });
      return NextResponse.json({ success: true, message: "Upgraded successfully" });
    } else {
      // DOWNGRADE: Schedule for end of period (Twitch Style)
      // This ensures they keep their current benefits until the month ends
      
      // 1. Initialize a schedule from the existing sub
      const schedule = await stripe.subscriptionSchedules.create({
        from_subscription: currentSubscription.id,
      });

      // 2. Update schedule to switch plans at the end of the current phase
      await stripe.subscriptionSchedules.update(schedule.id, {
        end_behavior: 'release',
        phases: [
          {
            start_date: 'now',
            // FIX: Cast to 'any' to bypass TS error on latest version
            end_date: (currentSubscription as any).current_period_end, 
            items: [{ price: currentItem.price.id, quantity: 1 }],
          },
          {
            // FIX: Cast here as well
            start_date: (currentSubscription as any).current_period_end, 
            items: [{ price: priceId, quantity: 1 }],
            // iterations: 1 removed so it runs indefinitely
          }
        ]
      });
      
      return NextResponse.json({ success: true, message: "Downgrade scheduled for end of billing cycle" });
    }

  } catch (error: any) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}