"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Server/Auth level errors (e.g. wrong credentials)
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  // Field-level validation errors
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Verification Logic
  const [needsVerification, setNeedsVerification] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Reset all errors
    setAuthError(null);
    setAuthSuccess(null);
    setEmailError(null);
    setPasswordError(null);
    setNeedsVerification(false);

    let hasValidationError = false;

    // 1. Client-side Validation
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError("The email field is required.");
      hasValidationError = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(trimmedEmail)) {
        setEmailError("The email format is invalid.");
        hasValidationError = true;
      }
    }

    if (!password) {
      setPasswordError("The password field is required.");
      hasValidationError = true;
    }

    if (hasValidationError) {
      setIsLoading(false);
      return;
    }

    // 2. Server-side Authentication
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password,
      });

      if (error) {
        // --- LOGIN INTERCEPT LOGIC ---
        if (error.message.includes("Email not confirmed")) {
          setNeedsVerification(true);
          throw new Error("You have not verified your email address yet.");
        }

        // Specific message for credential failure
        if (error.message === "Invalid login credentials") {
          throw new Error(
            "Could not find a user with that email and password combination."
          );
        }
        throw error;
      }

      router.push("/");
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (resendCooldown > 0) return;
    setAuthError(null);
    setAuthSuccess(null);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/welcome`,
        },
      });

      if (error) throw error;

      setAuthSuccess(`Verification link sent to ${email}`);
      
      // Start Cooldown
      setResendCooldown(60);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (error: any) {
      setAuthError(error.message || "Failed to resend verification email.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-start md:justify-center gap-4 md:gap-0">
      <div className="mb-5 md:mb-0 md:w-full text-center md:text-right px-10 pt-10 md:pt-6 ">
        <span className="text-base text-gray-500 font-[400]">
          New to SFC ID?{" "}
        </span>
        <Link
          href="/sign-up"
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
        <div className="mb-8 grid w-full grid-cols-4 gap-7">
          <button
            type="button"
            className="flex h-12 md:h-14 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex h-12 md:h-14 items-center justify-center rounded-lg bg-[#5865F2] text-white hover:opacity-90"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.25-23.23-3.25-47.57-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
          </button>

          <button
            type="button"
            className="flex h-12 md:h-14 items-center justify-center rounded-lg bg-[#55ACEE] text-white hover:opacity-90 "
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>

          <button
            type="button"
            className="flex h-12 md:h-14 items-center justify-center rounded-lg bg-[#1877F2] text-white hover:opacity-90 "
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>

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
          {/* AUTH ERROR DISPLAY */}
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

              {/* RESEND VERIFICATION BUTTON */}
              {needsVerification && (
                 <div className="pl-8">
                   <button
                     type="button"
                     onClick={handleResendVerification}
                     disabled={resendCooldown > 0}
                     className="text-sm font-bold underline underline-offset-2 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {resendCooldown > 0 ? `Resend email in ${resendCooldown}s` : "Resend Verification Email"}
                   </button>
                 </div>
              )}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {authSuccess && (
             <div className="flex w-full items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-green-700">
               <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <p className="text-sm leading-6">{authSuccess}</p>
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
                onChange={(e) => setEmail(e.target.value)}
                className={[
                  "h-12 bg-white px-4 text-base focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300",
                  emailError
                    ? "border-red-500 focus-visible:border-red-500"
                    : "border-gray-200",
                ].join(" ")}
                placeholder="Your email address"
              />

              {/* FIELD ERROR */}
              {emailError && (
                <p className="text-sm text-red-600 pt-1">{emailError}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-sm font-normal text-gray-600"
              >
                Password
              </label>

              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={[
                  "h-12 bg-white px-4 text-base focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300",
                  passwordError
                    ? "border-red-500 focus-visible:border-red-500"
                    : "border-gray-200",
                ].join(" ")}
                placeholder="Your password"
              />

              {/* FIELD ERROR */}
              {passwordError && (
                <p className="text-sm text-red-600 pt-1">{passwordError}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full bg-black text-base font-bold text-white hover:bg-gray-800 rounded-md transition-colors"
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