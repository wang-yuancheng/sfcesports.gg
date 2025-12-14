import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  const nextPath = searchParams.get("next") ?? "/";
  const nextUrl = new URL(nextPath, request.url);

  // If this is a password recovery flow, pass that flag to the next page
  if (type) {
    nextUrl.searchParams.set("type", type);
  }

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      redirect(nextUrl.toString());
    } else {
      redirect(`/error?error=${encodeURIComponent(error.message)}`);
    }
  }

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      redirect(nextUrl.toString());
    } else {
      redirect(`/error?error=${encodeURIComponent(error.message)}`);
    }
  }
  redirect("/error?error=Link is missing verification code");
}
