"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdownMenu";
import { useUser } from "@/hooks/useUser";
import profileIcon from "@/assets/icons/circle-user-round.svg";

export default function NavbarProfile() {
  const { user, profile, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // While loading, we render nothing to prevent jumps, or you could render the guest icon
  if (isLoading) return null;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative items-center flex cursor-pointer rounded-md p-2 sm:hover:bg-gray-100 transition-colors">
          {user && profile?.avatar_url ? (
            <div
              className="rounded-full bg-cover bg-center bg-no-repeat bg-gray-200 border border-gray-200"
              style={{
                width: "24px",
                height: "24px",
                minWidth: "24px",
                minHeight: "24px",
                backgroundImage: `url('${profile.avatar_url}')`,
              }}
            />
          ) : (
            <Image src={profileIcon} alt="Profile" width={22} height={22} />
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {user ? (
          // --- LOGGED IN VIEW ---
          <>
            <div className="py-1.5">
              <div className="px-2 text-sm font-[500] text-gray-600 truncate">
                Signed in as
              </div>
              <div className="px-2 text-sm font-semibold truncate">
                {user.email}
              </div>
            </div>
            <DropdownMenuSeparator />
            <Link href="/account">
              <DropdownMenuItem className="cursor-pointer">
                Edit Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/shop">
              <DropdownMenuItem className="cursor-pointer">
                Membership
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer focus:text-red-500"
            >
              Sign out
            </DropdownMenuItem>
          </>
        ) : (
          // --- GUEST VIEW ---
          <>
            <Link href="/login">
              <DropdownMenuItem className="cursor-pointer">
                Log In
              </DropdownMenuItem>
            </Link>
            <Link href="/sign-up">
              <DropdownMenuItem className="cursor-pointer">
                Create an account
              </DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
