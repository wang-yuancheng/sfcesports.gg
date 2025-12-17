"use client";

import { useEffect } from "react";

export default function PopupClosePage() {
  useEffect(() => {
    // 1. Send the standard message (Backup)
    if (window.opener) {
      window.opener.postMessage("SFC_LOGIN_SUCCESS", window.location.origin);
    }

    // 2. Write to LocalStorage (Primary reliable signal)
    // We add a timestamp so the main window knows it's a new event
    localStorage.setItem("sfc-auth-signal", Date.now().toString());

    // 3. Close the popup
    setTimeout(() => {
      window.close();
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p className="text-sm text-gray-500 font-medium animate-pulse">
        Signing you in...
      </p>
    </div>
  );
}