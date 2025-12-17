"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PlatformIcon from "@/components/ui/platformIcon";
import { createClient } from "@/lib/supabase/client";
import { type Provider, type UserIdentity } from "@supabase/supabase-js";

type ConnectionItem = {
  id: string; // matches supabase provider name
  name: string;
  connected: boolean;
  identity?: UserIdentity;
};

const INITIAL_CONNECTIONS: ConnectionItem[] = [
  { id: "google", name: "Google", connected: false },
  { id: "discord", name: "Discord", connected: false },
  { id: "twitter", name: "Twitter", connected: false },
  { id: "facebook", name: "Facebook", connected: false },
];

export default function ConnectionsPage() {
  const [connections, setConnections] = useState<ConnectionItem[]>(INITIAL_CONNECTIONS);
  const [loading, setLoading] = useState<string | null>(null);
  const supabase = createClient();

  const fetchUserIdentities = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user && user.identities) {
      setConnections((prev) =>
        prev.map((item) => {
          const identity = user.identities?.find((id) => id.provider === item.id);
          return identity
            ? { ...item, connected: true, identity: identity }
            : { ...item, connected: false, identity: undefined };
        })
      );
    }
  };

  useEffect(() => {
    fetchUserIdentities();

    // 1. Setup BroadcastChannel (Reliable for blocked popups/new tabs)
    const channel = new BroadcastChannel("sfc_auth_channel");
    channel.onmessage = (event) => {
      if (event.data === "SFC_LOGIN_SUCCESS") {
        fetchUserIdentities();
      }
    };

    // 2. Setup standard Message listener (Backup)
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data === "SFC_LOGIN_SUCCESS") {
        fetchUserIdentities();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      channel.close();
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleToggle = async (item: ConnectionItem) => {
    setLoading(item.id);

    // --- DISCONNECT ---
    if (item.connected && item.identity) {
      const { error } = await supabase.auth.unlinkIdentity(item.identity);
      if (error) {
        console.error("Failed to unlink:", error.message);
      } else {
        await fetchUserIdentities();
      }
      setLoading(null);
      return;
    }

    // --- CONNECT ---
    try {
      const { data, error } = await supabase.auth.linkIdentity({
        provider: item.id as Provider,
        options: {
          redirectTo: `${window.location.origin}/popup-callback`,
          skipBrowserRedirect: true, // <--- CRITICAL FIX: Prevents main window redirect
        },
      });

      if (error) throw error;

      if (data.url) {
        const width = 500;
        const height = 600;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;

        const popup = window.open(
          data.url,
          "SFC_Connect_Popup",
          `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status=1`
        );

        if (popup) {
          const timer = setInterval(() => {
            if (popup.closed) {
              clearInterval(timer);
              setLoading((prev) => (prev === item.id ? null : prev));
            }
          }, 1000);
        } else {
            // If popup is blocked immediately
            setLoading(null);
            alert("Please allow popups for this site to connect your account.");
        }
      }
    } catch (err) {
      console.error("Link Error:", err);
      setLoading(null);
    }
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Connections
      </h1>

      <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8 flex flex-col gap-4">
        {connections.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-5 flex items-center justify-between border border-gray-100/50"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-gray-200 bg-white shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8">
                  <PlatformIcon id={item.id} colored />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-[500] text-gray-900 text-lg leading-none">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center ${
                      item.connected ? "border-green-500" : "border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.connected ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-[400] ${
                      item.connected ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {item.connected ? "Connected" : "Not Connected"}
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => handleToggle(item)}
              disabled={loading === item.id}
              className={`h-10 px-6 rounded-lg font-bold text-sm transition-all ${
                item.connected
                  ? "bg-white text-gray-500 tracking-wider font-[400] hover:bg-gray-100 border border-gray-200"
                  : "bg-black tracking-wider font-[400] text-white hover:bg-gray-800"
              }`}
            >
              {loading === item.id
                ? "Processing..."
                : item.connected
                ? "Disconnect"
                : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}