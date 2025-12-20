import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./LogoutButton";

export async function AuthButton() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return user ? (
    <>
      <span>Hey, {user.email}!</span>
      <LogoutButton />
    </>
  ) : (
    <>
      <Link href="/login">Log in</Link>
      <Link href="/sign-up">Sign up</Link>
    </>
  );
}
