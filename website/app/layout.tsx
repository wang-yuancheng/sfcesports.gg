import type { Metadata } from "next";
import "./globals.css";
import { createClient } from "@/lib/supabase/server";
import { UserProvider } from "@/hooks/useUser";
import { Toaster } from "@/components/ui/Sonner";
import { helvetica, druk } from "@/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sfcesports.gg"),
  title: {
    default: "ShibeFanClub - SFC Esports",
    template: "%s | SFC Esports",
  },
  description:
    "Esports excellence since 2021. The premier esports organization for PUBG Mobile and competitive gaming based in Singapore.",
  keywords: [
    "Esports",
    "SFC",
    "ShibeFanClub",
    "PUBG Mobile",
    "Gaming",
    "Shibe",
    "Competitive Gaming",
    "SFC Esports",
    "ShibePUBG",
    "SFCEsports",
    "Shibe Fan Club",
    "Shibe FanClub",
    "Singapore Esports",
    "Singapore",
  ],
  openGraph: {
    title: "ShibeFanClub - SFC Esports",
    description: "Esports excellence since 2021.",
    url: "https://www.sfcesports.gg",
    siteName: "SFC Esports",
    locale: "en_US",
    type: "website",
  },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SFC Esports",
    alternateName: "ShibeFanClub",
    url: "https://www.sfcesports.gg",
    logo: "https://www.sfcesports.gg/icon.png",
    sameAs: [
      "https://www.youtube.com/@shibepubg",
      "https://www.instagram.com/shibepubg",
      "https://www.tiktok.com/@shibepubg",
      "https://discord.gg/2Sby35W",
      "https://www.linkedin.com/company/shibefanclub",
    ],
  };

  return (
    <html lang="en">
      <body className={`${helvetica.variable} ${druk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <UserProvider initialUser={user} initialProfile={userProfile}>
          {children}
          <Toaster position="top-left" />
        </UserProvider>

        <Analytics />
      </body>
    </html>
  );
}
