"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import searchIcon from "@/assets/icons/search.svg";


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
      title="Search Button"
    >
      <Image
        src={searchIcon}
        alt="Search"
        width={22}
        height={22}
        draggable={false}
        className="min-w-[22px]"
      />
    </button>
  );
}