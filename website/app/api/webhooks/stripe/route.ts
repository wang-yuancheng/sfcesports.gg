import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature" },
      { status: 400 }
    );
  }

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

  try {
    switch (event.type) {
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

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
        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

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

        // 3. Update Profile
        const { error: profileError } = await supabaseAdmin
          .from("profiles")
          .update({ membership_tier: tierName })
          .eq("stripe_customer_id", customerId);

        if (profileError) {
          console.error("Supabase profile update failed:", {
            customerId,
            tierName,
            profileError,
          });
          throw profileError;
        }

        const { data: profile, error: profileLookupError } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .maybeSingle();

        if (profileLookupError) {
          console.error("Profile lookup failed:", profileLookupError);
        }

        if (profile) {
          await supabaseAdmin
            .from("cart_items")
            .delete()
            .eq("user_id", profile.id)
            .eq("type", "membership");
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
