"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function PopupCallback() {
  const supabase = createClient();
  const router = useRouter();
  const processing = useRef(false);
  const [status, setStatus] = useState("Finalizing secure login...");

  useEffect(() => {
    if (processing.current) return;
    processing.current = true;

    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const errorParam = params.get("error");

      if (errorParam) {
        setStatus("Authentication failed. Please try again.");
        console.error("Auth Error:", params.get("error_description"));
        return;
      }

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          console.error("Auth Error:", error);
        }
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const channel = new BroadcastChannel("sfc_auth_channel");
        channel.postMessage("SFC_LOGIN_SUCCESS");
        channel.close();

        if (window.opener) {
          window.opener.postMessage(
            "SFC_LOGIN_SUCCESS",
            window.location.origin
          );
          window.close();
        } else {
          setStatus(
            "Success! You are logged in. You can close this window now."
          );

          setTimeout(() => window.close(), 2000);
        }
      } else {
        setStatus("Login failed. Please close this window and try again.");
      }
    };

    handleAuth();
  }, [supabase.auth, router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white p-4 text-center">
      <div className="flex flex-col items-center gap-4">
        {status.includes("Success") ? (
          <div className="h-8 w-8 text-green-500">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        ) : (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-black border-t-transparent" />
        )}
        <p className="text-sm text-gray-600 font-medium">{status}</p>
      </div>
    </div>
  );
}
