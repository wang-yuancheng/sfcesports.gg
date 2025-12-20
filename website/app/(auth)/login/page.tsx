"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import { SocialButtons } from "@/components/auth/social-buttons";
import { useUser } from "@/hooks/useUser";

export default function LoginPage() {
  const { user, isLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const next = searchParams.get("next");
  const redirectUrl = next && next.startsWith("/") ? next : "/";
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    if (!userLoading && user) {
      router.replace(redirectUrl);
    }
  }, [user, userLoading, router, redirectUrl]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCooldown > 0) {
      interval = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError(null);
    setAuthSuccess(null);
    setEmailError(null);
    setPasswordError(null);
    setNeedsVerification(false);

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
    }

    if (hasError) {
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        if (error.message.includes("Email not confirmed")) {
          setNeedsVerification(true);
          throw new Error("You have not verified your email address yet.");
        }
        if (error.message === "Invalid login credentials") {
          throw new Error(
            "Could not find a user with that email and password combination."
          );
        }
        throw error;
      }

      router.push(redirectUrl);
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (resendCooldown > 0 || isResending) return;
    setAuthError(null);
    setAuthSuccess(null);
    setIsResending(true);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=${
            redirectUrl === "/" ? "/welcome" : redirectUrl
          }`,
        },
      });
      if (error) throw error;
      setAuthSuccess(`Verification link sent to ${email}`);
      setResendCooldown(60);
    } catch (error: any) {
      setAuthError(error.message || "Failed to resend verification email.");
    } finally {
      setIsResending(false);
    }
  };

  if (!userLoading && user) return null;

  return (
    <div className="flex w-full flex-col items-center justify-start md:justify-center gap-4 md:gap-0">
      <div className="mb-5 md:mb-0 md:w-full text-center md:text-right px-10 pt-10 md:pt-6 ">
        <span className="text-base text-gray-500 font-[400]">
          New to SFC ID?{" "}
        </span>
        <Link
          href={`/sign-up?next=${redirectUrl}&email=${encodeURIComponent(email)}`}
          className="ml-1 text-base text-black underline underline-offset-3 hover:text-gray-700"
        >
          Sign up
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
          Log Into SFC ID
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

        <form onSubmit={handleLogin} className="w-full space-y-6" noValidate>
          {authError && (
            <div className="flex w-full flex-col gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
              <div className="flex items-start gap-3">
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
              {needsVerification && (
                <div className="pl-8">
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    disabled={resendCooldown > 0 || isResending}
                    className="text-sm font-[500] underline underline-offset-2 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isResending
                      ? "Sending..."
                      : resendCooldown > 0
                      ? `Resend email in ${resendCooldown}s`
                      : "Resend Verification Email"}
                  </button>
                </div>
              )}
            </div>
          )}

          {authSuccess && (
            <div className="flex w-full items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm leading-6">{authSuccess}</p>
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
              {passwordError && (
                <p className="text-sm text-red-600 pt-1">{passwordError}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full bg-black text-base font-[500] text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>

          <div className="text-center pt-2">
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-gray-700 text-sm font-[400] underline-offset-3 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}