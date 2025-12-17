"use client";

import ProfileForm from "@/components/account/ProfileForm";

export default function ProfilePage() {
  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Edit Profile
      </h1>
      <div className="flex flex-col xlg:flex-row gap-10">
        <div className="flex-1">
          <ProfileForm />
        </div>
      </div>
    </section>
  );
}