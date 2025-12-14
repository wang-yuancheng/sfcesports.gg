"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Controls the view
  const [resendCooldown, setResendCooldown] = useState(0); // Prevents spamming

  const supabase = createClient();

  // The Main Sign Up Logic
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
      // --- Check if email exists first ---
      const { data: emailExists, error: rpcError } = await supabase.rpc(
        "check_email_exists",
        { email_to_check: email }
      );

      if (rpcError) {
        // If the check fails (e.g. network error), we log it but usually
        // allow the process to continue or handle it as a generic error.
        console.error("RPC Error checking email:", rpcError);
      }

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

    setError(null);
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/onboarding`,
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
    } finally {
      setIsLoading(false);
    }
  };

  // --- VIEW 1: SUCCESS STATE (Check Email) ---
  if (success) {
    return (
      <div className="flex flex-col gap-6 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Check your inbox
          </h2>
          <p className="text-gray-500">
            We sent a confirmation link to:
            <br />
            <span className="font-bold text-black">{email}</span>
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-600">
          Click the link in the email to activate your account and set up your
          profile.
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleResend}
            disabled={isLoading || resendCooldown > 0}
            variant="outline"
            className="w-full"
          >
            {resendCooldown > 0
              ? `Resend available in ${resendCooldown}s`
              : "Resend Email"}
          </Button>

          <button
            onClick={() => setSuccess(false)}
            className="text-xs text-gray-400 hover:text-black transition-colors"
          >
            Typo? Use a different email
          </button>
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
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
