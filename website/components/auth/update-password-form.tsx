"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });
      if (error) throw error;
      setSuccess(true);
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push("/protected");
      }, 2000);
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
          <h2>Success!</h2>
          <p>Your password has been updated. Redirecting...</p>
        </>
      ) : (
        // Added noValidate here
        <form onSubmit={handleUpdatePassword} noValidate>
          <h2>Update Password</h2>
          <p>Enter your new password below.</p>

          <div>
            <label htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="repeat-password">Confirm New Password</label>
            <input
              id="repeat-password"
              type="password"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update password"}
          </button>
        </form>
      )}
    </>
  );
}