import React from "react";
import ProfileSidebar from "@/components/account/ProfileSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1400px] section-container mb-16 navbarsm:mt-6">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Sidebar - Fixed width */}
        <div className="w-full lg:w-fit">
          <ProfileSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 w-full">{children}</div>
      </div>
    </div>
  );
}
