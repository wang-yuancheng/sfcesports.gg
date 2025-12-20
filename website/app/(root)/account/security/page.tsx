"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createClient } from "@/lib/supabase/client";

export default function SecurityPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const supabase = createClient();

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (newPassword.length < 8) {
      setMessage({
        type: "error",
        text: "Password must be at least 8 characters long.",
      });
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match." });
      setLoading(false);
      return;
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: currentPassword,
        });

        if (signInError) {
          throw new Error("Incorrect current password.");
        }
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) throw updateError;

      setMessage({
        type: "success",
        text: "Password updated successfully.",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Security
      </h1>

      <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900">Change Password</h2>
            <p className="text-gray-700 text-base mt-1 font-[400]">
              Please enter your current password and then confirm a new
              password.
            </p>
          </div>

          <form onSubmit={handlePasswordUpdate} className="flex flex-col gap-6">
            {/* Current Password */}
            <div className="space-y-2">
              <label
                htmlFor="current"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                Current Password
              </label>
              <Input
                id="current"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              />
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label
                htmlFor="new"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                New Password
              </label>
              <Input
                id="new"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              />
              <p className="text-xs text-gray-500 ml-1">
                Minimum length of 8 characters.
              </p>
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <label
                htmlFor="confirm"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                Confirm New Password
              </label>
              <Input
                id="confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white border-gray-200 h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-black"
              />
            </div>

            {/* Message Display */}
            {message && (
              <>
                {message.type === "success" ? (
                  <div className="flex w-full items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-green-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-6">{message.text}</p>
                  </div>
                ) : (
                  <div className="flex w-full flex-col gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
                      </svg>
                      <p className="text-sm leading-6">{message.text}</p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Action Button */}
            <div className="mt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {loading ? "Updating..." : "Change Password"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
