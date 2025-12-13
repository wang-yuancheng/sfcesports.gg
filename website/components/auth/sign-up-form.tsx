"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError("The email format is invalid.");
      setIsLoading(false);
      return;
    }

    try {
      const { data: emailExists, error: rpcError } = await supabase.rpc(
        "check_email_exists",
        {
          email_to_check: email,
        }
      );

      if (rpcError) throw rpcError;

      if (emailExists) {
        throw new Error("The email has already been taken.");
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/confirm?next=/protected`,
        },
      });

      if (error) throw error;

      router.push("/sign-up-success");
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} noValidate>
      <h2>Sign up</h2>
      <p>Create a new account</p>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="repeat-password">Repeat Password</label>
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
        {isLoading ? "Creating an account..." : "Sign up"}
      </button>

      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </form>
  );
}
