"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import greenCheckMark from "@/assets/icons/greencheckmark.webp";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!password) {
      setError("The password field is required.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    const supabase = createClient();

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      // 1. Sign out immediately to invalidate the old session
      await supabase.auth.signOut();

      setSuccess(true);

      // 2. Hard redirect to login page after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // SUCCESS STATE
  if (success) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-3 relative h-16 w-16">
          <Image
            src={greenCheckMark}
            alt="SFC"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-medium tracking-wide text-black">
            Password Updated
          </h1>
          <p className="text-gray-600 text-sm font-[400]">
            Your password has been successfully updated.
          </p>
          <p className="text-gray-600 text-sm font-[400]">
            Redirecting you to the login page...
          </p>
        </div>
      </div>
    );
  }

  // FORM STATE
  return (
    <div className="flex w-full flex-col items-center justify-start md:justify-center gap-4 md:gap-0 pt-10 md:pt-0 min-h-screen">
      <div className="flex flex-col items-center gap-5 mb-4 md:mb-0">
        <div className="relative h-12 w-12">
          <Image
            src={shibeLogo}
            alt="SFC"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="font-druk font-[500] text-xl md:text-2xl uppercase tracking-wide text-black leading-none">
            Set New Password
          </h1>
        </div>
      </div>

      <div className="w-full max-w-[450px] flex flex-col items-center px-6 mb-10 mt-4 md:mt-8">
        <form
          onSubmit={handleUpdatePassword}
          className="w-full space-y-6"
          noValidate
        >
          {/* General Error Alert */}
          {error && (
            <div className="flex w-full items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-600 -mt-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
              </svg>
              <p className="text-sm leading-6">{error}</p>
            </div>
          )}

          <div className="space-y-5">
            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-sm font-normal text-gray-600"
              >
                New Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-white px-4 text-base focus-visible:ring-0 placeholder:text-gray-300 border-gray-200"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-normal text-gray-600"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 bg-white px-4 text-base focus-visible:ring-0 placeholder:text-gray-300 border-gray-200"
                placeholder="Confirm new password"
              />
              <p className="text-xs text-gray-500 font-[500] ml-0.5 pt-1">
                Minimum length of 8 characters.
              </p>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full bg-black text-base font-[500] text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            {isLoading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
