import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Signature Error: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  console.log(`[Webhook] Processing event type: ${event.type}`);

  try {
    switch (event.type) {
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        console.log(
          `[Webhook] Subscription deleted for customer: ${customerId}`
        );

        const { error } = await supabaseAdmin
          .from("profiles")
          .update({ membership_tier: "free" })
          .eq("stripe_customer_id", customerId);

        if (error) throw error;
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        console.log(`[Webhook] Looking for customer: ${customerId}`);
        // 1. Handle Past Due / Unpaid
        if (
          subscription.status === "past_due" ||
          subscription.status === "unpaid" ||
          subscription.status === "canceled"
        ) {
          await supabaseAdmin
            .from("profiles")
            .update({ membership_tier: "free" })
            .eq("stripe_customer_id", customerId);
          break;
        }

        // 2. Determine Tier
        const priceId = subscription.items.data[0].price.id;
        let tierName = "Pro";

        if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER) {
          tierName = "Starter";
        } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO) {
          tierName = "Pro";
        } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ELITE) {
          tierName = "Elite";
        }

        console.log(
          `[Webhook] Updating customer ${customerId} to tier: ${tierName}`
        );

        // 3. Update Profile
        const { error: profileError } = await supabaseAdmin
          .from("profiles")
          .update({ membership_tier: tierName })
          .eq("stripe_customer_id", customerId);

        if (profileError) throw profileError;

        const { data: profile } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .single();

        if (profile) {
          await supabaseAdmin
            .from("cart_items")
            .delete()
            .eq("user_id", profile.id)
            .eq("type", "membership");

          console.log(
            `[Webhook] Cleared membership cart items for user ${profile.id}`
          );
        }

        break;
      }

      default:
    }
  } catch (error: any) {
    console.error("Webhook Handler Error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
