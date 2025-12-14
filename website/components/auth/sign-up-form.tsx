"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import confirmationEmailPicture from "@/assets/pictures/confirmationemail.png";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const { data: emailExists, error: rpcError } = await supabase.rpc(
        "check_email_exists",
        { email_to_check: email }
      );

      if (rpcError) console.error("RPC Error checking email:", rpcError);

      if (emailExists) {
        setError("This email is already registered. Please sign in instead.");
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
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    // Reset errors but keep loading UI minimal or handled
    setError(null);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/welcome`,
        },
      });

      if (error) throw error;

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
      setError(error.message || "Failed to resend email");
    }
  };

  // --- VIEW 1: CLEAN SUCCESS STATE ---
  if (success) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
        {/* Illustration */}
        <div className="w-full">
          <Image
            src={confirmationEmailPicture}
            alt="Check your email"
            className="mx-auto w-full max-w-sm object-contain"
            priority
          />
        </div>

        {/* Main message */}
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

        {/* Resend */}
        <div className="mt-6 w-full rounded-xl border bg-gray-50 p-4">
          <p className="text-sm text-gray-700">Didn’t receive the email?</p>

          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

          <button
            onClick={handleResend}
            disabled={resendCooldown > 0}
            className="mt-1 inline-flex items-center justify-center text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            {resendCooldown > 0
              ? `Resend in ${resendCooldown}s`
              : "Resend email"}
          </button>

          <p className="mt-2 text-xs text-gray-500">
            Tip: check spam, promotions, or junk folders.
          </p>
        </div>
      </div>
    );
  }

  // --- VIEW 2: SIGN UP FORM ---
  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
      noValidate
    >
      <div className="space-y-1 text-center mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Create an account</h2>
        <p className="text-gray-500 text-sm">
          Enter your email below to create your account
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="repeat-password"
            className="text-sm font-medium leading-none"
          >
            Confirm Password
          </label>
          <Input
            id="repeat-password"
            type="password"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full mt-2">
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>

      <div className="text-center text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-black font-semibold"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
