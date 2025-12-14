"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function UpdatePasswordContent() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRecovery = searchParams.get("type") === "recovery";

  useEffect(() => {
    if (!isRecovery) {
      router.replace("/profile"); 
    }
  }, [isRecovery, router]);

  if (!isRecovery) return null;

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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      {success ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Success!</h2>
          <p className="text-gray-600">Your password has been updated. Redirecting...</p>
        </>
      ) : (
        <form onSubmit={handleUpdatePassword} noValidate className="space-y-4">
          <h2 className="text-2xl font-bold">Update Password</h2>
          <p className="text-gray-600 mb-4">Enter your new password below.</p>

          <div className="space-y-2">
            <label htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="repeat-password">Confirm New Password</label>
            <input
              id="repeat-password"
              type="password"
              required
              className="w-full border p-2 rounded"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update password"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function UpdatePasswordPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <UpdatePasswordContent />
      </Suspense>
    </div>
  );
}