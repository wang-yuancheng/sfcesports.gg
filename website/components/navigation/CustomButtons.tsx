"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DollarSign from "@/assets/icons/dollar-sign.svg";
import Image from "next/image";

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
