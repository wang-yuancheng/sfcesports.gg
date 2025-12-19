"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError(null);
    setEmailError(null);

    // 1. Validation Logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError("Email address is required.");
      setIsLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("The email format is invalid.");
      setIsLoading(false);
      return;
    }

    const supabase = createClient();

    try {
      // 2. Supabase Logic
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/confirm?next=/update-password`,
      });

      if (error) throw error;

      setSuccess(true);
    } catch (error: unknown) {
      setAuthError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-start pt-6 md:justify-center md:pt-10 gap-4 md:gap-8 mb-10">
      {/* Top Right Navigation */}
      {!success && (
        <div className="mb-5 md:mb-0 md:w-full text-center md:text-right px-10">
          <span className="text-base text-gray-500 font-[400]">
            Already have an account?{" "}
          </span>
          <Link
            href="/login"
            className="ml-1 text-base text-black underline underline-offset-3 hover:text-gray-700"
          >
            Log In
          </Link>
        </div>
      )}

      {/* Header Section (Logo + Titles) */}
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

        <h1 className="font-druk w-[400] font-[500] text-xl md:text-2xl uppercase tracking-wide text-black text-center leading-none">
          {success ? "Check Your Email" : "Forgotten Your Password?"}
        </h1>

        <h3 className="font-[400] text-base tracking-wider text-gray-500 text-center px-6 max-w-[500px]">
          {success ? (
            <>
              We have sent a password reset link to {email}.<br />
              Please click the link to reset your password.
            </>
          ) : (
            "Enter your email address below and we will send you a link to set a new password for your account."
          )}
        </h3>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[450px] flex flex-col items-center px-6 mb-10">
        {success ? (
          // SUCCESS STATE UI
          <div className="w-full space-y-6">
            <Link href="/login">
              <Button className="h-12 w-full bg-black text-base font-bold text-white hover:bg-gray-800 rounded-md transition-colors">
                Return to Login
              </Button>
            </Link>
            <div className="text-center">
              <button
                onClick={() => setSuccess(false)}
                className="text-gray-500 hover:text-gray-700 text-sm font-[400] underline-offset-3 hover:underline"
              >
                Try a different email
              </button>
            </div>
          </div>
        ) : (
          // FORM STATE UI
          <form
            onSubmit={handleForgotPassword}
            className="w-full space-y-6"
            noValidate
          >
            {/* General Auth Error Alert */}
            {authError && (
              <div className="flex w-full items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
                </svg>
                <p className="text-sm leading-6">{authError}</p>
              </div>
            )}

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-normal text-gray-600"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  className={[
                    "h-12 bg-white px-4 text-base focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300",
                    emailError
                      ? "border-red-500 focus-visible:border-red-500"
                      : "border-gray-200",
                  ].join(" ")}
                  placeholder="Your email address"
                />

                {/* Specific Field Error */}
                {emailError && (
                  <p className="text-sm text-red-600 pt-1">{emailError}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full bg-black text-base font-bold text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              {isLoading ? "Sending..." : "Send Reset Email"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
