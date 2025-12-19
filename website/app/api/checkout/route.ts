import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    let customerId = profile?.stripe_customer_id;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_id: user.id },
      });
      customerId = customer.id;
      await supabase
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", user.id);
    }

    // Check for Active Subscriptions
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
        payment_method_types: ["card"],
      });
      return NextResponse.json({ url: session.url });
    }

    // --- SCENARIO B: UPGRADE / DOWNGRADE ---
    const currentItem = currentSubscription.items.data[0];

    const [newPrice, oldPrice] = await Promise.all([
      stripe.prices.retrieve(priceId),
      stripe.prices.retrieve(currentItem.price.id),
    ]);

    const newAmount = newPrice.unit_amount || 0;
    const oldAmount = oldPrice.unit_amount || 0;
    const isUpgrade = newAmount > oldAmount;

    if (isUpgrade) {
      try {
        await stripe.subscriptions.update(currentSubscription.id, {
          items: [{ id: currentItem.id, price: priceId }],
          proration_behavior: "always_invoice",
        });

        return NextResponse.json({
          success: true,
          message: "Upgraded successfully",
        });
      } catch (error: any) {
        if (
          error.type === "StripeCardError" ||
          error.code === "card_declined" ||
          error.code === "insufficient_funds"
        ) {
          return NextResponse.json(
            {
              error: "Payment declined. Please check your card.",
              code: error.code,
            },
            { status: 402 }
          );
        }
        throw error;
      }
    } else {
      const safeSubscription = currentSubscription as Stripe.Subscription & {
        current_period_end: number;
      };

      const schedule = await stripe.subscriptionSchedules.create({
        from_subscription: safeSubscription.id,
      });

      await stripe.subscriptionSchedules.update(schedule.id, {
        end_behavior: "release",
        phases: [
          {
            start_date: "now",
            end_date: safeSubscription.current_period_end,
            items: [{ price: currentItem.price.id, quantity: 1 }],
          },
          {
            start_date: safeSubscription.current_period_end,
            items: [{ price: priceId, quantity: 1 }],
          },
        ],
      });

      return NextResponse.json({
        success: true,
        message: "Downgrade scheduled for end of billing cycle",
      });
    }
  } catch (error: any) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
