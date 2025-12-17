"use client";

import PlatformIcon from "@/components/ui/platformIcon";

export function SocialButtons() {
  return (
    <div className="mb-8 grid w-full grid-cols-4 gap-7">
      <SocialButton provider="google" />
      <SocialButton provider="discord" />
      <SocialButton provider="twitter" />
      <SocialButton provider="facebook" />
    </div>
  );
}

function SocialButton({ provider }: { provider: string }) {
  const styles: Record<string, string> = {
    google: "border border-gray-200 bg-white hover:bg-gray-50",
    discord: "bg-[#5865F2] text-white hover:opacity-90",
    twitter: "bg-[#55ACEE] text-white hover:opacity-90",
    facebook: "bg-[#1877F2] text-white hover:opacity-90",
  };

  return (
    <button
      type="button"
      className={`flex h-12 md:h-14 items-center justify-center rounded-lg transition-colors ${
        styles[provider]
      }`}
    >
      <div className="h-6 w-6 md:h-8 md:w-8">
        <PlatformIcon id={provider} />
      </div>
    </button>
  );
}