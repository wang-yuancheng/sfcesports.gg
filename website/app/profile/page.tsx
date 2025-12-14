import React from "react";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileForm from "@/components/profile/ProfileForm";
import Header from "@/sections/Header";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Sidebar - Fixed width */}
            <aside>
              <ProfileSidebar />
            </aside>

            {/* Main Content */}
            <section className="flex-1 min-w-0">
              {/* Header is now here to align with content */}
              <h1 className="font-druk text-3xl md:text-4xl uppercase mb-8">
                Edit Profile
              </h1>
              <ProfileForm />
            </section>

            {/* Right Sidebar (Feature Request) */}
            <aside className="hidden xl:block w-80 flex-shrink-0 mt-16">
              <div className="bg-gray-50 p-6 rounded-2xl sticky top-24 border border-gray-100">
                <h3 className="font-bold text-lg mb-2">Request a Feature</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  We&apos;re working behind the scenes for you to enjoy the
                  Community. If you have a great idea, feel free to drop it in.
                </p>
                <button className="w-full bg-black text-white font-bold text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                  Submit An Idea
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
