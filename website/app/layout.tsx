import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import { InitialFontWrapper } from "@/components/other/InitialFontWrapper";
import { createClient } from "@/lib/supabase/server";
import { UserProvider } from "@/hooks/useUser";

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

  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={user}>
          <InitialFontWrapper>{children}</InitialFontWrapper>
        </UserProvider>
      </body>
    </html>
  );
}
