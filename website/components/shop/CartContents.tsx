"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function CartContents() {
  const { items, removeItem, clearCart } = useCart();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      } else {
        clearCart();
        router.push("/account?success=true");
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

  return (
    <div className="flex flex-col h-full md:pb-6">
      <div className="flex-1 overflow-y-auto py-2">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-sm text-gray-900">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                    {item.type === "membership" ? "Recurring" : "One-time"}
                  </span>
                </div>
              </div>

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
          <Button
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              "Checkout"
            )}
          </Button>
        ) : (
          <Link href="/login?next=/shop" className="w-full">
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Log in to Checkout
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
