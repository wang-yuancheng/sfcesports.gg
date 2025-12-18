"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser"; // <--- 1. Import User Hook
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Optional: Use alert() if you don't have sonner

export default function CartContents() {
  const { items, removeItem, clearCart } = useCart();
  const { user } = useUser(); // <--- 2. Get current user
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    
    // Check 1: Is cart empty?
    const cartItem = items[0];
    if (!cartItem) {
        setLoading(false);
        return;
    }

    // Check 2: Is user logged in? (CRITICAL FIX)
    if (!user) {
        setLoading(false);
        // Save where they were so we can redirect back later (optional)
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

      // Handle API Errors (e.g., Unauthorized)
      if (!res.ok || data.error) {
        throw new Error(data.error || "Something went wrong during checkout.");
      }

      if (data.url) {
        // Redirecting to Stripe
        window.location.href = data.url;
      } else if (data.success) {
        // Immediate Upgrade Success
        clearCart();
        router.push("/account?updated=true");
        setLoading(false);
      }

    } catch (error: any) {
      console.error("Checkout failed", error);
      // Show error to user
      toast(error.message || "Checkout failed."); 
      setLoading(false); // <--- Stops the "Processing..." spinner
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
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-4 border-b">
            <div>
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-sm text-gray-500">
                 {item.type === 'membership' ? 'Recurring' : 'One-time'}
              </p>
            </div>
            <div className="flex items-center gap-4">
               <span className="font-medium">${item.price}</span>
               <button 
                 onClick={() => removeItem(item.id)}
                 className="text-red-500 text-xs hover:underline"
               >
                 Remove
               </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 mt-auto">
        <div className="flex justify-between mb-4 font-bold text-lg">
          <span>Total</span>
          <span>${items.reduce((acc, i) => acc + i.price, 0)}</span>
        </div>
        
        {/* Button Logic: Show "Login" if guest, "Checkout" if user */}
        {user ? (
          <Button 
            className="w-full bg-black text-white hover:bg-gray-800" 
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Checkout"}
          </Button>
        ) : (
          <Button 
            className="w-full bg-pink-bright text-white hover:bg-pink-600" 
            onClick={() => router.push("/login")}
          >
            Log in to Checkout
          </Button>
        )}
      </div>
    </div>
  );
}