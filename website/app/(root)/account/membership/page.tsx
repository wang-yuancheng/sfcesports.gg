"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function MembershipPage() {
  const { profile } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isSubscribed = profile?.membership_tier !== "free";

  const handleManageSubscription = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        // CRITICAL: We tell the API we want the "General" flow (Home page)
        body: JSON.stringify({ flowType: "general" }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to create portal session");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-druk text-2xl md:text-3xl uppercase">Membership</h1>
      </div>

      {isSubscribed ? (
        <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-900">
                SFC+ Membership
              </h2>
              <span className="bg-pink-bright text-white text-xs px-2 py-0.5 rounded uppercase">
                Tier {profile?.membership_tier}
              </span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed font-[400] max-w-lg">
              You are currently subscribed to SFC+. Manage your plan, payment
              method, or billing history here.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              variant="outline"
              onClick={handleManageSubscription}
              disabled={loading}
              className="h-11 px-6 border-gray-300 bg-white text-gray-900 font-bold hover:bg-gray-200 transition-colors tracking-wide"
            >
              {loading ? "Loading..." : "Manage Subscription"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-[#f5f6f7] rounded-lg p-8 md:p-8 border border-gray-100">
          <div className="space-y-2 mb-4">
            <h2 className="text-lg font-bold text-gray-900">SFC+ Membership</h2>
            <p className="text-gray-700 text-base leading-relaxed font-[400]">
              Enjoy premium benefits including priority access.
            </p>
          </div>
          <Link href="/shop#membership">
            <Button className="h-11 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors ">
              Subscribe To SFC+
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
