"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { createClient } from "@/lib/supabase/client";

export default function NotificationsPage() {
  const { user, profile, refreshProfile } = useUser();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Default state matches in DB
  const [preferences, setPreferences] = useState({
    tournaments: true,
    contents: true,
    mentions: true,
    marketing: false,
  });

  useEffect(() => {
    if (profile?.notifications) {
      setPreferences(profile.notifications as typeof preferences);
    }
  }, [profile]);

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    try {
      if (!user) throw new Error("No user found.");

      const { error } = await supabase
        .from("profiles")
        .update({
          notifications: preferences,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) throw error;

      await refreshProfile();

      setMessage({ type: "success", text: "Preferences saved successfully." });
    } catch (error: any) {
      console.error(error);
      setMessage({ type: "error", text: error.message || "Failed to save." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Notifications
      </h1>

      <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8">
        <div className="flex flex-col gap-8 md:gap-6">
          <CheckboxRow
            label="Email me when a new tournament is available to be registered"
            checked={preferences.tournaments}
            onChange={() => handleToggle("tournaments")}
          />
          <CheckboxRow
            label="Email me when a new post or video is published."
            checked={preferences.contents}
            onChange={() => handleToggle("contents")}
          />
          <CheckboxRow
            label="Email me when somebody mentions me in a post."
            checked={preferences.mentions}
            onChange={() => handleToggle("mentions")}
          />
          <CheckboxRow
            label="Email me on new products, exclusive offers, drops and more."
            checked={preferences.marketing}
            onChange={() => handleToggle("marketing")}
          />

          {/* Message Display */}
          {message && (
            <div
              className={`text-sm font-medium text-center py-3 -mb-4 ${
                message.type === "success"
                  ? "bg-green-50 text-green-600"
                  : "text-red-600"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Save Button */}
          <div className="mt-4">
            <Button
              onClick={handleSave}
              disabled={loading}
              className="w-full h-12 bg-black text-white tracking-wider font-[400] rounded-lg hover:bg-gray-800 transition-colors"
            >
              {loading ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Checkbox Component
function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div
      onClick={onChange}
      className="flex items-center gap-4 cursor-pointer group"
    >
      {/* Custom Checkbox Visual */}
      <div className="relative flex items-center justify-center shrink-0">
        <div
          className={`
            w-6 h-6 rounded-[6px] border transition-all duration-200 ease-out flex items-center justify-center
            ${
              checked
                ? "bg-pink-bright border-pink-bright"
                : "bg-white border-gray-300 group-hover:border-gray-400"
            }
          `}
        >
          {/* Checkmark Icon */}
          <svg
            className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
              checked ? "scale-100" : "scale-0"
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
      </div>

      {/* Label Text */}
      <span className="text-gray-700 text-base font-[400] leading-tight select-none">
        {label}
      </span>
    </div>
  );
}
