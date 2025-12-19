"use client";

import Image from "next/image";
import shibeLogo from "@/assets/icons/greencheckmark.png";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
      <div className="mb-3 relative h-16 w-16">
        <Image
          src={shibeLogo}
          alt="SFC"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-medium tracking-wide text-black">
          Email Verification
        </h1>
        <p className="text-gray-600 text-sm font-[400]">
          Your email address was successfully authenticated.
        </p>
        <p className="text-gray-600 text-sm font-[400]">
          You can now close this page.
        </p>
      </div>
    </div>
  );
}
