"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const INITIAL_CONNECTIONS = [
  {
    id: "google",
    name: "Google",
    connected: true,
  },
  {
    id: "discord",
    name: "Discord",
    connected: false,
  },
  {
    id: "twitter",
    name: "Twitter",
    connected: false,
  },
  {
    id: "facebook",
    name: "Facebook",
    connected: false,
  },
];

export default function ConnectionsPage() {
  const [connections, setConnections] = useState(INITIAL_CONNECTIONS);
  const [loading, setLoading] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setLoading(id);
    // Simulate API request
    setTimeout(() => {
      setConnections((prev) =>
        prev.map((c) => (c.id === id ? { ...c, connected: !c.connected } : c))
      );
      setLoading(null);
    }, 800);
  };

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Connections
      </h1>

      <div className="bg-[#f5f6f7] rounded-xl p-8 md:p-8 border border-gray-100 flex flex-col gap-4">
        {connections.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-5 flex items-center justify-between border border-gray-100/50"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-gray-200 bg-white shrink-0">
                <PlatformIcon id={item.id} />
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-[500] text-gray-900 text-lg leading-none">
                  {item.name}
                </h3>

                {/* --- Status Indicator (Ring + Dot) --- */}
                <div className="flex items-center gap-2">
                  <div
                    className={`
                    w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center
                    ${item.connected ? "border-green-500" : "border-gray-400"}
                  `}
                  >
                    <div
                      className={`
                      w-2 h-2 rounded-full
                      ${item.connected ? "bg-green-500" : "bg-gray-400"}
                    `}
                    />
                  </div>

                  <span
                    className={`text-sm font-[400] ${
                      item.connected ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {item.connected ? "Connected" : "Not Connected"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => handleToggle(item.id)}
              disabled={loading === item.id}
              className={`
                h-10 px-6 rounded-lg font-bold text-sm transition-all
                ${
                  item.connected
                    ? "bg-white text-gray-500 tracking-wider font-[400] hover:bg-gray-100 border border-gray-200"
                    : "bg-black tracking-wider font-[400] text-white hover:bg-gray-800"
                }
              `}
            >
              {loading === item.id
                ? "Processing..."
                : item.connected
                ? "Disconnect"
                : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Icons (Exact copies from your Login Page) ---
function PlatformIcon({ id }: { id: string }) {
  switch (id) {
    case "google":
      return (
        <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      );
    case "discord":
      return (
        <svg
          className="w-7 h-7 md:w-8 md:h-8 fill-[#5865F2]"
          viewBox="0 0 127.14 96.36"
        >
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.25-23.23-3.25-47.57-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          className="w-7 h-7 md:w-8 md:h-8 fill-[#55ACEE]"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className="w-7 h-7 md:w-8 md:h-8 fill-[#1877F2]"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
}
