"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Security
      </h1>

      <div className="flex flex-col gap-6">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
          <h3 className="font-bold text-gray-900 mb-1">Password</h3>
          <p className="text-sm text-gray-500 mb-6">
            Ensure your account is using a long, random password to stay secure.
          </p>
          
          <div className="flex items-center gap-4">
             <Link href="/forgot-password">
                <Button variant="outline" className="bg-white border-gray-200">
                    Send Password Reset Email
                </Button>
             </Link>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
          <div className="flex items-center justify-between mb-4">
            <div>
                <h3 className="font-bold text-gray-900 mb-1">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account.
                </p>
            </div>
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                DISABLED
            </span>
          </div>
          <Button disabled className="w-full bg-gray-200 text-gray-400 cursor-not-allowed">
            Setup 2FA (Coming Soon)
          </Button>
        </div>
      </div>
    </section>
  );
}