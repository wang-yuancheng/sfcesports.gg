"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import AvatarUpload from "@/components/auth/AvatarUpload";
import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { User } from "@supabase/supabase-js";

type ProfileData = {
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
};

export default function ProfileForm({
  initialProfile,
  user,
}: {
  initialProfile: ProfileData | null;
  user: User;
}) {
  const supabase = createClient();
  const { refreshProfile } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    if (
      searchParams.get("success") === "true" ||
      searchParams.get("updated") === "true"
    ) {
      clearCart();
      router.replace("/account");
    }
  }, [searchParams, clearCart, router]);

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(initialProfile?.username || "");
  const [displayName, setDisplayName] = useState(
    initialProfile?.display_name || ""
  );
  const [avatarUrl, setAvatarUrl] = useState(initialProfile?.avatar_url || "");

  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (username.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
      }

      const updates = {
        id: user.id,
        username,
        display_name: displayName,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) throw error;

      await refreshProfile();
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error: any) {
      if (error.message?.includes("username_length")) {
        setMessage({
          type: "error",
          text: "Username must be at least 3 characters long.",
        });
      } else if (error.code === "23505") {
        setMessage({
          type: "error",
          text: "This username is already taken.",
        });
      } else {
        setMessage({ type: "error", text: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] rounded-lg w-full flex flex-col overflow-hidden border border-gray-100">
      <div className="relative h-44 w-full bg-[#E5E7EB]" />
      <div className="px-8 pb-8 flex-1 flex flex-col">
        <div className="relative -mt-12 mb-8 flex justify-between items-end">
          <div className="relative rounded-full border-[6px] border-[#FAFAFA] bg-white shadow-sm w-fit">
            <AvatarUpload
              uid={user.id}
              url={avatarUrl}
              onUpload={(url) => setAvatarUrl(url)}
            />
          </div>
        </div>

        <form onSubmit={updateProfile} className="flex flex-col gap-6 flex-1">
          <div className="space-y-2">
            <label className="text-sm font-normal text-gray-600">
              Display Name
            </label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              placeholder="Your Name"
            />
            <p className="text-xs text-gray-500 font-[500] ml-0.5">
              If you do not want to set a custom display name, we will display
              your username.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-normal text-gray-600">
              Username
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              placeholder="Enter your username"
            />
          </div>

          {message && (
            <div
              className={`p-3 rounded-md text-sm font-medium text-center -mb-8 ${
                message.type === "success"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="mt-8">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-base bg-black text-white hover:bg-gray-800 rounded-lg transition-all"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
