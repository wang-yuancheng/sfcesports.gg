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
  const [avatarUrl, setAvatarUrl] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Sync state with profile whenever it changes
  useEffect(() => {
    if (profile) {
      setUsername(profile.username || "");
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
    <div className="bg-gray-50 rounded-2xl p-1 pb-8 w-full shadow-sm border border-gray-100/50">
      {/* Banner Area */}
      <div className="relative h-48 w-full bg-gray-200 rounded-t-xl overflow-hidden group" />

      {/* Header & Avatar */}
      <div className="px-8 relative mb-8">
        <div className="flex justify-between items-end -mt-12">
          {/* Avatar */}
          <div className="relative rounded-full border-4 border-white bg-white shadow-sm">
            <AvatarUpload
              uid={user?.id ?? null}
              url={avatarUrl}
              onUpload={(url) => setAvatarUrl(url)}
            />
          </div>

          {/* View Profile Button */}
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 rounded-lg mb-2"
          >
            View Profile
          </Button>
        </div>
      </div>

      {/* Form Fields */}
      <form
        onSubmit={updateProfile}
        className="px-8 flex flex-col gap-6 max-w-2xl"
      >
        {/* Username */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Username
          </label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border-gray-200 h-11"
            placeholder="Enter your username"
          />
          <p className="text-xs text-gray-400">
            This is how other members recognize you across the community.
          </p>
        </div>

        {/* Read-Only Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <Input
            value={user?.email || ""}
            disabled
            className="bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed h-11"
          />
        </div>

        {/* Message & Action */}
        <div className="flex items-center gap-4 pt-4">
          <Button type="submit" disabled={loading} className="px-8 h-11">
            {loading ? "Saving..." : "Save Changes"}
          </Button>

          {message && (
            <span
              className={`text-sm font-medium ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
