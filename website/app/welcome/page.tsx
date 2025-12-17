"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import AvatarUpload from "@/components/auth/avatar-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import editIcon from "@/assets/icons/square-pen.svg";

export default function WelcomePage() {
  const supabase = createClient();
  const { user, profile, isLoading } = useUser();
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!isLoading && profile?.username) {
      router.replace("/account");
    }
  }, [profile, isLoading, router]);

  useEffect(() => {
    if (profile) {
      if (profile.username) setUsername(profile.username);
      if (profile.avatar_url) setAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

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
        if (error.code === "23505")
          throw new Error("This username is already taken.");
        throw error;
      }

      router.refresh();
      router.push("/account");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading || !user || profile?.username) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="flex mt-5 xs:mt-7 sm:mt-10 md:mt-14 xmd:mt-20 lg:mt-24 xlg:mt-32 xxlg:mt-36 flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-5">
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
          Welcome to the Club
        </h1>
      </div>
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-lg font-[400] text-gray-500">
            Let's set up your profile to get started.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <div className="relative group">
              <AvatarUpload
                uid={user.id}
                url={avatarUrl}
                onUpload={(url) => setAvatarUrl(url)}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/40 rounded-full p-2.5 backdrop-blur-[2px] transition-opacity group-hover:bg-black/50">
                  <Image
                    src={editIcon}
                    alt="Edit"
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-normal text-gray-600"
              >
                Username
              </label>
              <Input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 bg-white px-4 text-base focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300 "
                placeholder="Pick a unique username"
              />
              <p className="text-xs text-gray-500 font-[500] ml-0.5">
                This is how you will appear on tournament brackets.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <label className="relative flex items-center p-0.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                />
                <div
                  className={`
                    w-5 h-5 rounded-[4px] border transition-all duration-200 ease-out
                    flex items-center justify-center
                    ${
                      marketingConsent
                        ? "bg-pink-bright border-pink"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  <svg
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      marketingConsent ? "scale-100" : "scale-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </label>

              <span
                className="text-sm leading-tight text-gray-500 font-normal cursor-pointer select-none"
                onClick={() => setMarketingConsent(!marketingConsent)}
              >
                Email me about the latest SFC products, offers and exclusive
                benefits.
              </span>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="h-12 w-full bg-black text-base font-bold text-white hover:bg-gray-800 rounded-md transition-all active:scale-[0.99]"
            >
              {submitting ? "Saving..." : "Finish"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
