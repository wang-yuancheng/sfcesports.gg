"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import ProfileForm from "@/components/account/ProfileForm";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    if (
      searchParams.get("success") === "true" ||
      searchParams.get("updated") === "true"
    ) {
      clearCart();

      router.replace("/account");
    }
  }, [searchParams, clearCart, router]);

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
