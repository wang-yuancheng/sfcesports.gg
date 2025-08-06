"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";


export function LoginButton() {
  return (
    <Button variant="outline" size="default" asChild>
      <Link href="/login">Log In</Link>
    </Button>
  );
}
export function SignUpButton() {
  return (
    <Button variant="default" size="default" asChild>
      <Link href="/sign-up">Sign Up</Link>
    </Button>
  );
}

export function SearchButton() {
  return (
   <button
      className="relative rounded-md p-2 sm:hover:bg-gray-100"
      type="button"
      aria-label="Search"
      title="Search Button"
    >
      <Search className="w-[22px] h-[22px]" />
    </button>
  );
}