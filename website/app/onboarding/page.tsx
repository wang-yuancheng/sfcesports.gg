"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import AvatarUpload from "@/components/auth/avatar-upload"; 
import LogoFade from "@/components/ui/logofade";

export default function Onboarding() {
  const supabase = createClient();
  const { user, profile, isLoading } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  // 1. Redirect if already onboarded (has a username)
  useEffect(() => {
    // Wait for main loading to finish before deciding
    if (!isLoading) {
      if (profile?.username) {
        router.replace("/profile");
      }
    }
  }, [profile, isLoading, router]);

  // 2. Pre-fill form if data exists (e.g. they uploaded avatar but didn't finish)
  useEffect(() => {
    if (profile) {
      if (profile.username) setUsername(profile.username);
      if (profile.avatar_url) setAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (!user) throw new Error("No user found");

      if (username.trim().length < 3) {
        throw new Error("Username must be at least 3 characters long.");
      }

      const updates = {
        id: user.id,
        username: username.trim(),
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        if (error.code === "23505") throw new Error("This username is already taken.");
        throw error;
      }

      // Success
      router.refresh(); 
      router.push("/profile");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Show a blank loading state while we check the profile to prevent flashing
  if (isLoading || profile?.username) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 px-4">
      <div className="mb-10 flex flex-col items-center gap-4">
        <LogoFade />
        <div className="text-center space-y-2">
          <h1 className="font-druk text-3xl md:text-4xl uppercase tracking-wide">
            Create Your Profile
          </h1>
          <p className="text-gray-500">Choose your identity.</p>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <AvatarUpload
            uid={user?.id ?? null}
            url={avatarUrl}
            onUpload={(url) => setAvatarUrl(url)}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-bold uppercase tracking-wider text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-300"
              placeholder="shibefan123"
            />
            <p className="text-xs text-gray-400">
              This is how you will appear on tournament brackets and leaderboards.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 rounded-md hover:bg-gray-800 transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading ? "Saving..." : "Finish"}
          </button>
        </form>
      </div>
    </div>
  );
}