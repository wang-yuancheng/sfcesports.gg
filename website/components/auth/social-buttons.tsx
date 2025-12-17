"use client";

import { createClient } from "@/lib/supabase/client";
import PlatformIcon from "@/components/ui/platformIcon";
import { useState, useEffect } from "react";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export function SocialButtons() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    const handleLoginSuccess = () => {
      setLoading(null);
      window.location.href = "/";
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "sfc-auth-signal" && event.newValue) {
        handleLoginSuccess();
        localStorage.removeItem("sfc-auth-signal");
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data === "SFC_LOGIN_SUCCESS") {
        handleLoginSuccess();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  const handleSocialLogin = async (provider: string) => {
    setLoading(provider);

    // 1. OPEN POPUP IMMEDIATELY (Fixes Popup Blocker)
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    // Open a blank window first
    const popup = window.open(
      "about:blank",
      "SFC_OAuth_Popup",
      `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status=1`
    );

    try {
      // 2. GET URL FROM SUPABASE
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo: `${window.location.origin}/popup-callback`,
          skipBrowserRedirect: true,
        },
      });

      if (error) throw error;
      if (!data.url) throw new Error("No URL returned");

      // 3. UPDATE POPUP URL (Navigate the blank window)
      if (popup) {
        popup.location.href = data.url;

        const timer = setInterval(() => {
          if (popup.closed) {
            clearInterval(timer);
            setLoading((prev) => (prev === provider ? null : prev));
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Close the blank popup if we failed
      popup?.close();
      setLoading(null);
    }
  };

  return (
    <div className="mb-8 grid w-full grid-cols-4 gap-7">
      <SocialButton
        provider="google"
        onClick={() => handleSocialLogin("google")}
        isLoading={loading === "google"}
      />
      <SocialButton
        provider="discord"
        onClick={() => handleSocialLogin("discord")}
        isLoading={loading === "discord"}
      />
      <SocialButton
        provider="twitter"
        onClick={() => handleSocialLogin("twitter")}
        isLoading={loading === "twitter"}
      />
      <SocialButton
        provider="facebook"
        onClick={() => handleSocialLogin("facebook")}
        isLoading={loading === "facebook"}
      />
    </div>
  );
}

function SocialButton({
  provider,
  onClick,
  isLoading,
}: {
  provider: string;
  onClick: () => void;
  isLoading: boolean;
}) {
  const styles: Record<string, string> = {
    google: "border border-gray-200 bg-white hover:bg-gray-50",
    discord: "bg-[#5865F2] text-white hover:opacity-90",
    twitter: "bg-[#1DA1F2] text-white hover:opacity-90",
    facebook: "bg-[#1877F2] text-white hover:opacity-90",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={`flex h-12 md:h-14 items-center justify-center rounded-lg transition-all disabled:opacity-50 disabled:cursor-wait ${styles[provider]}`}
    >
      <div className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
        {isLoading ? (
          <div
            className={`h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${
              provider === "google" ? "text-gray-600" : "text-white"
            }`}
          />
        ) : (
          <PlatformIcon id={provider} />
        )}
      </div>
    </button>
  );
}