"use client";

import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Settings
      </h1>

      <div className="bg-gray-50 rounded-2xl border border-gray-100/50 divide-y divide-gray-100">
        <div className="p-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900">Profile Visibility</h3>
            <p className="text-sm text-gray-500 mt-1">
              Allow others to see your tournament history.
            </p>
          </div>
          <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
          </div>
        </div>

        <div className="p-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900">Language</h3>
            <p className="text-sm text-gray-500 mt-1">
              Select your preferred language for the interface.
            </p>
          </div>
          <select className="bg-white border border-gray-200 rounded-md text-sm py-1.5 px-3">
            <option>English</option>
            <option>Chinese (Simplified)</option>
            <option>Malay</option>
          </select>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Delete Account</h3>
          <p className="text-sm text-gray-500 mb-4">
            Permanently remove your account and all associated data. This action
            cannot be undone.
          </p>
          <Button
            variant="destructive"
            className="bg-red-50 text-red-600 hover:bg-red-100 border border-red-100"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </section>
  );
}
