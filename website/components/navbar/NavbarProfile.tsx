"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

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
        <div className="relative rounded-md p-2 hover:bg-gray-100">
          <Image
            src="/profile.svg"
            alt="Profile"
            width={22}
            height={22}
            className="min-w-[22px]"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <a href="/login">
          <DropdownMenuItem>Sign In</DropdownMenuItem>
        </a>
        <a href="/sign-up">
          <DropdownMenuItem>Create an account</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
