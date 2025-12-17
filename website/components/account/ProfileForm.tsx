"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AvatarUpload from "@/components/auth/avatar-upload";

export default function ProfileForm() {
  const supabase = createClient();
  const { user, profile } = useUser();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Sync state with profile whenever it changes
  useEffect(() => {
    if (profile) {
      setUsername(profile.username || "");
      // If you have a display_name column, map it here. Otherwise leaving blank for now.
      // setDisplayName(profile.display_name || "");
      setAvatarUrl(profile.avatar_url || "");
    }
  }, [profile]);

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!user) throw new Error("No user logged in");

      const updates = {
        id: user.id,
        username,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) throw error;
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error: any) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] rounded-[20px] w-full flex flex-col overflow-hidden border border-gray-100">
      {/* 1. Banner Area */}
      <div className="relative h-44 w-full bg-[#E5E7EB] " />

      {/* 2. Avatar & Content */}
      <div className="px-8 pb-8 flex-1 flex flex-col">
        {/* Avatar overlapping banner */}
        <div className="relative -mt-12 mb-8 flex justify-between items-end">
          <div className="relative rounded-full border-[6px] border-[#FAFAFA] bg-white shadow-sm w-fit">
            <AvatarUpload
              uid={user?.id ?? null}
              url={avatarUrl}
              onUpload={(url) => setAvatarUrl(url)}
            />
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={updateProfile} className="flex flex-col gap-6 flex-1">
          {/* Display Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Display Name
            </label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
            />
            <p className="text-xs text-gray-500 ml-1">
              If you do not want to set a custom display name, we will display
              your username.
            </p>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Username
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              placeholder="Enter your username"
            />
            <p className="text-xs text-gray-500 ml-1 leading-relaxed">
              Your username will be how other members recognize you across the
              SFC Community and ecosystems.
            </p>
          </div>

          {/* Message Display */}
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

          {/* 3. Save Button */}
          <div className="mt-8">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-base font-bold bg-black text-white hover:bg-gray-800 rounded-lg transition-all"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
