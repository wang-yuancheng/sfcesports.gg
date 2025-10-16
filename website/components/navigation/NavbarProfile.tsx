"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import profileIcon from "@/assets/icons/circle-user-round.svg";
import Link from "next/link";

export default function NavbarProfile() {
  const [open, setOpen] = useState(false);

  // Auto-close dropdown when resizing the window
  useEffect(() => {
    const handleResize = () => setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative items-center flex cursor-pointer rounded-md p-2 sm:hover:bg-gray-100">
          <Image src={profileIcon} alt="Profile" width={22} height={22} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <Link href="/login">
          <DropdownMenuItem>Sign In</DropdownMenuItem>
        </Link>
        <Link href="/sign-up">
          <DropdownMenuItem>Create an account</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
