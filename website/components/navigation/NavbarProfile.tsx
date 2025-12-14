"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdownMenu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@/hooks/useUser";

export default function NavbarProfile() {
  const { user, profile, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false); 
  
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (isLoading) return null; 

  // --- STATE 1: LOGGED OUT ---
  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm">Sign Up</Button>
        </Link>
      </div>
    );
  }

  // --- STATE 2: LOGGED IN ---
  const hasAvatar = profile?.avatar_url && !imageError;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border border-gray-200 relative overflow-hidden">
            {hasAvatar ? (
               <Image 
                 src={profile.avatar_url!} 
                 alt="Profile"
                 fill
                 priority
                 className="object-cover"
                 onError={() => setImageError(true)}
               />
            ) : (
               <AvatarFallback className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                  {user.email?.charAt(0).toUpperCase()}
               </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">My Account</p>
            <p className="text-xs leading-none text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer">
            Profile Settings
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}