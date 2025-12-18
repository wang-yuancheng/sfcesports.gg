import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// 1. Init Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover" as any, // Use your specific version
});

// 2. Init Supabase Admin (Bypass RLS)
// Note: You must add SUPABASE_SERVICE_ROLE_KEY to your .env
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 3. Secret for verifying the event comes from Stripe
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Signature Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    // Handle the event
    switch (event.type) {
      // A. SUBSCRIPTION DELETED (User cancelled and term ended)
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        console.log(`[Webhook] Subscription deleted for customer: ${customerId}`);

        // Remove membership tier in Supabase
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({ membership_tier: null }) // or 'free'
          .eq("stripe_customer_id", customerId);

        if (error) throw error;
        break;
      }

      // B. SUBSCRIPTION UPDATED (Upgrade/Downgrade/Renewal)
      // or CREATED (Initial checkout if handled here)
      case "customer.subscription.updated":
      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        // 1. Check if subscription is active
        if (subscription.status !== 'active' && subscription.status !== 'trialing') {
           // If it's past_due or unpaid, you might want to downgrade them or do nothing
           console.log(`[Webhook] Subscription status is ${subscription.status}, ignoring.`);
           break;
        }

        // 2. Determine the Tier from the Price ID
        const priceId = subscription.items.data[0].price.id;
        let tierName = "Pro"; // Default fallback

        // Map your Price IDs to Tier Names
        if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER) {
          tierName = "Starter";
        } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO) {
          tierName = "Pro";
        } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ELITE) {
          tierName = "Elite";
        }

        console.log(`[Webhook] Updating customer ${customerId} to tier: ${tierName}`);

        // 3. Update Supabase
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({ membership_tier: tierName })
          .eq("stripe_customer_id", customerId);

        if (error) throw error;
        break;
      }
      
      default:
        // Unhandled event type
        // console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error: any) {
    console.error("Webhook Handler Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}