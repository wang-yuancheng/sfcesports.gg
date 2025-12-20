"use client";

import { useEffect } from "react";

export default function PopupClosePage() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage("SFC_LOGIN_SUCCESS", window.location.origin);
    }

    localStorage.setItem("sfc-auth-signal", Date.now().toString());

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