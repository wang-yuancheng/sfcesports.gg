"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function SettingsPage() {
  const { user } = useUser();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+65");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
    // If you have phone stored in metadata, load it here
    // if (user?.phone) setMobile(user.phone);
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Placeholder for save logic
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: "success", text: "Settings saved successfully." });
      console.log("Saved:", { countryCode, mobile });
    }, 800);
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Settings
      </h1>

      <div className="flex flex-col gap-8">
        {/* --- Card 1: Contact Information --- */}
        <div className="bg-[#f5f6f7] rounded-xl p-8 md:p-10 border border-gray-100">
          <form onSubmit={handleSave} className="flex flex-col gap-6">
            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 ml-1">
                Email Address
              </label>
              <Input
                value={email}
                disabled
                className="bg-white border-gray-200 h-12 rounded-lg text-gray-600 cursor-not-allowed focus-visible:ring-0"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 ml-1">
                Mobile Number
              </label>
              <div className="relative flex">
                {/* Country Code Selector */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center z-10">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent text-sm font-medium text-gray-700 pr-2 py-1 focus:outline-none cursor-pointer"
                  >
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+60">+60 (MY)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+62">+62 (ID)</option>
                    <option value="+63">+63 (PH)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+66">+66 (TH)</option>
                    <option value="+81">+81 (JP)</option>
                    <option value="+82">+82 (KR)</option>
                    <option value="+84">+84 (VN)</option>
                    <option value="+86">+86 (CN)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+852">+852 (HK)</option>
                    <option value="+881">+881 (BD)</option>
                    <option value="+886">+886 (TW)</option>
                  </select>
                  {/* Custom Chevron for Select */}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 absolute right-0 pointer-events-none"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <Input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="bg-white border-gray-200 h-12 rounded-lg pl-[6.5rem] focus-visible:ring-1 focus-visible:ring-black"
                />
              </div>
            </div>

            {/* Message Display */}
            {message && (
              <div
                className={`text-sm font-medium text-center py-3 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Save Button */}
            <div className="mt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-black tracking-wider font-[400] text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </div>

        {/* --- Card 2: Deactivate Account --- */}
        <div className="bg-[#f5f6f7] rounded-lg p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-lg font-bold text-gray-900">
              Deactivate Account
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-[400]">
              Please contact our support team to assist in closing your account.
              Once completed, this action can not be reversed.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://discord.gg/2Sby35W"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-11 px-8 border-red-200 tracking-wider font-[400] bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
              >
                Request Deletion
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
