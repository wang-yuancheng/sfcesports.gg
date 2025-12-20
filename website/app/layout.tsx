import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import { InitialFontWrapper } from "@/components/other/InitialFontWrapper";
import { createClient } from "@/lib/supabase/server";
import { UserProvider } from "@/hooks/useUser";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ShibeFanClub - SFC Esports",
  description: "4 Years of Esports Excellence",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userProfile = null;
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      userProfile = data;
    }
  }

  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={user} initialProfile={userProfile}>
          <InitialFontWrapper>{children}</InitialFontWrapper>
          <Toaster position="top-left" />
        </UserProvider>
      </body>
    </html>
  );
}