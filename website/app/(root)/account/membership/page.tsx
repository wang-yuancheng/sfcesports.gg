"use client";

import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Membership
      </h1>

      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold">Free Plan</h2>
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-gray-200 text-gray-700 uppercase">
                Current
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              You are currently on the standard community plan. Upgrade to
              unlock exclusive tournament slots and badges.
            </p>
          </div>
          <Button className="bg-pink-bright hover:bg-pink-bright/90 text-white rounded-lg px-6">
            Upgrade Plan
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-bold mb-4">Plan Benefits</h3>
          <ul className="space-y-3">
            {[
              "Access to public community tournaments",
              "Standard discord role",
              "Basic profile customization",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
