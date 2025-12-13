"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/hooks/useUser"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdownMenu";
import profileIcon from "@/assets/icons/circle-user-round.svg";

export default function NavbarProfile() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const { user } = useUser();
  
  useEffect(() => {
    const handleResize = () => setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh(); 
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative items-center flex cursor-pointer rounded-md p-2 sm:hover:bg-gray-100">
          {/* Show Avatar if user has one, otherwise default icon */}
          {user?.user_metadata?.avatar_url ? (
            <Image
              src={user.user_metadata.avatar_url}
              alt="Profile"
              width={22}
              height={22}
              className="rounded-full"
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
            <div className="px-2 py-1.5 text-sm font-semibold text-gray-900 truncate">
              {user.email}
            </div>
            <DropdownMenuSeparator />
            <Link href="/protected">
              <DropdownMenuItem className="cursor-pointer">
                Dashboard
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600 cursor-pointer focus:text-red-600"
            >
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          // --- LOGGED OUT VIEW ---
          <>
            <Link href="/login">
              <DropdownMenuItem className="cursor-pointer">
                Sign In
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