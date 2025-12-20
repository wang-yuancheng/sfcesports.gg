import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body safely to get the flow type
    // flowType can be 'subscription_update' or 'general'
    const body = await req.json().catch(() => ({}));
    const { flowType } = body;

    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (!profile?.stripe_customer_id) {
      return NextResponse.json(
        { error: "No customer ID found" },
        { status: 404 }
      );
    }

    // 1. Base Configuration (Points to Portal Home)
    let portalConfig: Stripe.BillingPortal.SessionCreateParams = {
      customer: profile.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_URL}/account/membership`,
    };

    // 2. Conditional Deep Link (Only if requested AND user has active sub)
    if (flowType === "subscription_update") {
      const subscriptions = await stripe.subscriptions.list({
        customer: profile.stripe_customer_id,
        status: "active",
        limit: 1,
      });

      const activeSubscription = subscriptions.data[0];

      if (activeSubscription) {
        portalConfig.flow_data = {
          type: "subscription_update",
          subscription_update: {
            subscription: activeSubscription.id,
          },
        };
      }
    }

    const session = await stripe.billingPortal.sessions.create(portalConfig);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Portal Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
