"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState } from "react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {success ? (
        <>
          <h2>Check Your Email</h2>
          <p>
            If you registered using your email and password, you’ll receive a
            password reset email shortly.
          </p>
        </>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <h2>Reset Your Password</h2>
          <p>
            Enter your email and we'll send you a link to reset your password.
          </p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send reset email"}
          </button>

          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </form>
      )}
    </>
  );
}
