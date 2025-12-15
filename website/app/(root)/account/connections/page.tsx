"use client";

import { Button } from "@/components/ui/button";

export default function ConnectionsPage() {
  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Connections
      </h1>

      <div className="bg-gray-50 rounded-2xl border border-gray-100/50 overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center text-white"></div>
            <div>
              <h3 className="font-bold text-gray-900">Discord</h3>
              <p className="text-sm text-gray-500">
                Connect to sync roles and access private channels.
              </p>
            </div>
          </div>
          <Button variant="outline" className="bg-white border-gray-200">
            Connect
          </Button>
        </div>

        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">LinkedIn / Portfolio</h3>
              <p className="text-sm text-gray-500">
                Display your professional profile on your player card.
              </p>
            </div>
          </div>
          <Button variant="outline" className="bg-white border-gray-200">
            Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
