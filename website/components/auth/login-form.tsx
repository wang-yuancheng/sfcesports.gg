"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("The email format is invalid.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} noValidate>
      <h2>Login</h2>
      <p>Enter your email below to log in to your account</p>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <Link href="/forgot-password">Forgot your password?</Link>
      </div>

      {error && <p>{error}</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <p>
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </form>
  );
}