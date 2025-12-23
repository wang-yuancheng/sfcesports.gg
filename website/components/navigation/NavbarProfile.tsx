"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu";
import { useUser } from "@/hooks/useUser";
import { useCart } from "@/hooks/useCart";
import profileIcon from "@/assets/icons/circle-user-round.svg";

export default function NavbarProfile() {
  const { user, profile, isLoading } = useUser();
  const { setOpen: setCartOpen } = useCart();
  const [open, setOpen] = useState(false);
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    const handleResize = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  if (isLoading) return null;

  const avatarUrl =
    profile?.avatar_url ||
    user?.user_metadata?.picture ||
    user?.user_metadata?.avatar_url;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          className="relative items-center flex cursor-pointer rounded-md p-2 sm:hover:bg-gray-100 transition-colors"
          suppressHydrationWarning={true}
        >
          {user && avatarUrl ? (
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={avatarUrl}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
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
            <Link href="/account/membership">
              <DropdownMenuItem className="cursor-pointer">
                Membership
              </DropdownMenuItem>
            </Link>

            {/* Mobile Only Cart Trigger */}
            <DropdownMenuItem
              className="cursor-pointer md:hidden"
              onClick={() => {
                setCartOpen(true);
                setOpen(false);
              }}
            >
              Cart
            </DropdownMenuItem>
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
            <DropdownMenuSeparator className="md:hidden" />
            {/* Mobile Only Cart Trigger */}
            <DropdownMenuItem
              className="cursor-pointer md:hidden"
              onClick={() => {
                setCartOpen(true);
                setOpen(false);
              }}
            >
              Cart
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
