"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  // --- STATE TOGGLE FOR DEVELOPMENT ---
  // Toggle this boolean to preview the "Subscribed" vs "Not Subscribed" views
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-druk text-2xl md:text-3xl uppercase">Membership</h1>

        {/* --- DEV ONLY: REMOVE THIS BUTTON LATER --- */}
        <button
          onClick={() => setIsSubscribed(!isSubscribed)}
          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded border border-yellow-200 hover:bg-yellow-200 transition-colors"
        >
          Dev: Toggle State ({isSubscribed ? "Active" : "Inactive"})
        </button>
      </div>

      {isSubscribed ? (
        // --- VIEW 1: ALREADY SUBSCRIBED ---
        <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-900">
                SFC+ Membership
              </h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed font-[400] max-w-lg">
              You are currently subscribed to SFC.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="outline"
              className="h-11 px-6 border-gray-300 bg-white text-gray-900 font-bold hover:bg-gray-200 transition-colors tracking-wide"
            >
              Manage Subscription
            </Button>
          </div>
        </div>
      ) : (
        // --- VIEW 2: NOT SUBSCRIBED ---
        <div className="bg-[#f5f6f7] rounded-lg p-8 md:p-8 border border-gray-100">
          <div className="space-y-2 mb-4">
            <h2 className="text-lg font-bold text-gray-900">SFC+ Membership</h2>
            <p className="text-gray-700 text-base leading-relaxed font-[400]">
              Enjoy premium benefits including priority access to events,
              exclusive rewards, and opportunities to be featured in our
              content.
            </p>
          </div>

          <Link href="/shop">
            <Button className="h-11 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors tracking-wider font-[400]">
              Subscribe To SFC+
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
