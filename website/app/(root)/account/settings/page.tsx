"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createClient } from "@/lib/supabase/client";
import { COUNTRY_CODES } from "@/lib/constants";
import { parsePhoneNumberWithError } from "libphonenumber-js";

export default function SettingsPage() {
  const { user, profile, refreshProfile } = useUser();
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
    if (user?.email) setEmail(user.email);

    if (profile) {
      if (profile.phone_number) setMobile(profile.phone_number);
      if (profile.phone_country_code)
        setCountryCode(profile.phone_country_code);
    }
  }, [user, profile]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow digits, spaces, and dashes for formatting
    if (/^[\d\s-]*$/.test(val)) {
      setMobile(val);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!user) throw new Error("No user found");

      const rawMobile = mobile.replace(/[^\d]/g, "");

      if (!rawMobile) {
        throw new Error("Phone number is required.");
      }

      const fullNumber = `${countryCode}${rawMobile}`;
      const phone = parsePhoneNumberWithError(fullNumber);

      if (!phone.isValid()) {
        throw new Error(`This number is not valid for ${countryCode}`);
      }

      const cleanNationalNumber = phone.nationalNumber;

      const { error } = await supabase
        .from("profiles")
        .update({
          phone_country_code: countryCode,
          phone_number: cleanNationalNumber,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) throw error;

      await refreshProfile();
      setMobile(cleanNationalNumber);
      setMessage({ type: "success", text: "Settings saved successfully." });
    } catch (error: any) {
      let errorMessage = error?.message || "Something went wrong.";

      switch (errorMessage) {
        case "TOO_SHORT":
          errorMessage = "Phone number is too short.";
          break;
        case "TOO_LONG":
          errorMessage = "Phone number is too long.";
          break;
        case "INVALID_COUNTRY":
          errorMessage = "Invalid country code.";
          break;
        case "NOT_A_NUMBER":
          errorMessage = "Input contains invalid characters.";
          break;
        default:
          break;
      }

      setMessage({ type: "error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Settings
      </h1>
      <div className="flex flex-col gap-8">
        <div className="bg-[#f5f6f7] rounded-xl p-5 md:p-8">
          <form onSubmit={handleSave} className="flex flex-col gap-6">
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 ml-1">
                Mobile Number
              </label>
              <div className="relative flex">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center z-10">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none text-sm font-medium text-gray-700 py-1 focus:outline-none cursor-pointer z-20"
                  >
                    {COUNTRY_CODES.map((country) => (
                      <option
                        key={`${country.code}-${country.dial_code}`}
                        value={country.dial_code}
                      >
                        {country.dial_code} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  type="tel"
                  value={mobile}
                  onChange={handleMobileChange}
                  placeholder=""
                  className="bg-white border-gray-200 h-12 rounded-lg pl-[5rem] focus-visible:ring-1 focus-visible:ring-black"
                />
              </div>
              <p className="text-xs text-gray-500 ml-1">
                Enter your number without the country code.
              </p>
            </div>

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

            <div className="mt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </div>

        {/* Deactivate Account Area */}
        <div className="bg-[#f5f6f7] rounded-lg p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-lg font-bold text-gray-900">
              Deactivate Account
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-[400]">
              Please contact our support team to assist in closing your account.
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
                className="h-11 px-8 border-red-200 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600"
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
