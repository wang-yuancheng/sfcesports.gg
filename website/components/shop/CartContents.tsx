"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function CartContents() {
  const { items, removeItem, clearCart } = useCart();
  const { user, profile } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Helper: Map Price ID to a numeric rank for comparison
  const getTierRank = (priceId: string | undefined | null) => {
    if (!priceId) return 0;
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER) return 1;
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO) return 2;
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ELITE) return 3;
    return 0;
  };

  // Helper: Get the current user's rank based on their profile string
  const getCurrentUserRank = () => {
    if (!profile || profile.membership_tier === "free") return 0;
    const tierMap: Record<string, number> = {
      Starter: 1,
      Pro: 2,
      Elite: 3,
    };
    return tierMap[profile.membership_tier] || 0;
  };

  const handleCheckout = async () => {
    setLoading(true);

    const cartItem = items[0];
    if (!cartItem) {
      setLoading(false);
      return;
    }

    if (!user) {
      setLoading(false);
      router.push("/login?next=/shop");
      return;
    }

    const currentRank = getCurrentUserRank();
    const itemRank = getTierRank(cartItem.priceId);

    // Prevent checking out exact same plan
    if (cartItem.type === "membership" && currentRank === itemRank && currentRank > 0) {
      toast.error("You are already subscribed to this plan.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: cartItem.priceId }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Something went wrong during checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else if (data.success) {
        clearCart();
        router.push("/account?updated=true");
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Checkout failed", error);
      toast.error(error.message || "Checkout failed.");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <p>Your bag is empty.</p>
      </div>
    );
  }

  const cartItem = items[0];
  const currentRank = getCurrentUserRank();
  const itemRank = getTierRank(cartItem.priceId);

  // Status Flags
  const isMembership = cartItem?.type === "membership";
  const isDuplicatePlan = isMembership && currentRank === itemRank && currentRank > 0;
  const isUpgrade = isMembership && itemRank > currentRank && currentRank > 0;
  const isDowngrade = isMembership && itemRank < currentRank && currentRank > 0;

  return (
    <div className="flex flex-col h-full md:pb-6">
      <div className="flex-1 overflow-y-auto py-2">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0"
            >
              {/* Left: Info */}
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-sm text-gray-900">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                    {item.type === "membership" ? "Recurring" : "One-time"}
                  </p>
                  
                  {/* Badges - Kept as requested for UX */}
                  {isDuplicatePlan && (
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-semibold">
                      CURRENT PLAN
                    </span>
                  )}
                  {isUpgrade && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-semibold uppercase">
                      Upgrade
                    </span>
                  )}
                  {isDowngrade && (
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-semibold uppercase">
                      Downgrade
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Price & Action */}
              <div className="flex items-center gap-5">
                <span className="font-medium text-sm text-gray-900">
                  ${item.price}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-medium text-gray-400 transition-colors hover:text-red-500 hover:underline decoration-red-500/30 underline-offset-4"
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 mt-auto">
        <div className="flex justify-between mb-4 font-bold text-lg">
          <span>Total</span>
          <span>${items.reduce((acc, i) => acc + i.price, 0)}</span>
        </div>

        {user ? (
          isDuplicatePlan ? (
            <Button
              className="w-full bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
              disabled
            >
              Current Plan Active
            </Button>
          ) : (
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Processing..." : "Checkout"}
            </Button>
          )
        ) : (
          <Link href="/login?next=/shop">
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={() => router.push("/login")}
            >
              Log in to Checkout
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}