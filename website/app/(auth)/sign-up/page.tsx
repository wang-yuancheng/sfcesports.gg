"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import confirmationEmailPicture from "@/assets/pictures/confirmationemail.png";
import { SocialButtons } from "@/components/auth/social-buttons";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCooldown > 0) {
      interval = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailError(null);
    setPasswordError(null);
    setServerError(null);

    let hasError = false;
    if (!email.trim()) {
      setEmailError("The email field is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("The email format is invalid.");
      hasError = true;
    }

    if (!password) {
      setPasswordError("The password field is required.");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      hasError = true;
    }

    if (hasError) {
      setIsLoading(false);
      return;
    }

    try {
      const { data: emailExists } = await supabase.rpc("check_email_exists", {
        email_to_check: email,
      });
      if (emailExists) {
        setServerError("This email is already registered. Please log in.");
        setIsLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/welcome`,
        },
      });

      if (error) throw error;
      setSuccess(true);
    } catch (error: any) {
      setServerError(error.message || "An error occurred during sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0 || isResending) return;
    setServerError(null);
    setIsResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/welcome`,
        },
      });
      if (error) throw error;
      setResendCooldown(60);
    } catch (error: any) {
      setServerError(error.message || "Failed to resend email");
    } finally {
      setIsResending(false);
    }
  };

  if (success) {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white px-4">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
          <div className="w-full">
            <Image
              src={confirmationEmailPicture}
              alt="Check your email"
              className="mx-auto w-full max-w-xs object-contain"
              priority
            />
          </div>
          <div className="mt-6 space-y-2">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
              Check your email
            </h1>
            <p className="text-sm leading-6 text-gray-600 md:text-base">
              We sent a verification link to your inbox.
              <br className="hidden md:block" />
              Open it to finish setting up your account.
            </p>
          </div>
          <div className="mt-6 w-full rounded-xl border bg-gray-50 p-4">
            <p className="text-sm text-gray-700">Didn’t receive the email?</p>
            {serverError && (
              <p className="mt-2 text-xs text-red-500">{serverError}</p>
            )}
            <button
              onClick={handleResend}
              disabled={resendCooldown > 0 || isResending}
              className="mt-1 inline-flex items-center justify-center text-sm font-medium text-gray-900 underline underline-offset-3 transition-opacity disabled:opacity-50"
            >
              {isResending
                ? "Sending..."
                : resendCooldown > 0
                ? `Resend in ${resendCooldown}s`
                : "Resend email"}
            </button>
            <p className="mt-2 text-xs text-gray-500">
              Tip: check spam, promotions, or junk folders.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-start md:justify-center gap-4 md:gap-0">
      <div className="mb-5 md:mb-0 md:w-full text-center md:text-right px-10 pt-10 md:pt-6">
        <span className="text-base text-gray-500 font-[400]">
          Already have an account?{" "}
        </span>
        <Link
          href="/login"
          className="ml-1 text-base text-black underline underline-offset-3 hover:text-gray-700"
        >
          Log in
        </Link>
      </div>

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
        <h1 className="font-druk font-[500] text-xl md:text-2xl uppercase tracking-wide text-black text-center leading-none">
          Join The Community
        </h1>
      </div>

      <div className="w-full max-w-[450px] flex flex-col items-center px-6 mb-10 mt-4 md:mt-8">
        <SocialButtons />

        <div className="relative mb-8 w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs text-gray-400 font-medium">
              OR
            </span>
          </div>
        </div>

        <form onSubmit={handleSignUp} className="w-full space-y-6" noValidate>
          {serverError && (
            <div className="flex w-full items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
              </svg>
              <p className="text-sm leading-6">{serverError}</p>
            </div>
          )}

          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-normal text-gray-600">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-12 bg-white px-4 text-base focus-visible:ring-0 placeholder:text-gray-300 ${
                  emailError ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Your email address"
              />
              {emailError && (
                <p className="text-sm text-red-600 pt-1">{emailError}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-normal text-gray-600">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`h-12 bg-white px-4 text-base focus-visible:ring-0 placeholder:text-gray-300 ${
                  passwordError ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Your password"
              />
              {passwordError ? (
                <p className="text-sm text-red-600 pt-1">{passwordError}</p>
              ) : (
                <p className="text-xs text-gray-500 font-[500] ml-0.5">
                  Minimum length of 8 characters.
                </p>
              )}
            </div>
          </div>

          <div className="text-xs text-gray-500 font-[500] leading-relaxed text-center px-2">
            By signing up you agree to our{" "}
            <Link
              href="/policies/website-terms"
              className="underline hover:text-black"
            >
              Terms
            </Link>{" "}
            &{" "}
            <Link
              href="/policies/privacy"
              className="underline hover:text-black"
            >
              Privacy Policy
            </Link>
            .
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full bg-black text-base font-bold text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
