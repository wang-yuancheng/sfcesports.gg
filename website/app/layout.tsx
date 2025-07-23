import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import { InitialFontWrapper } from "@/components/other/initialFontWrapper";

export const metadata: Metadata = {
  title: "ShibeFanClub - SFC Esports",
  description: "4 Years of Esports Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <InitialFontWrapper>
        <body>{children}</body>
      </InitialFontWrapper>
    </html>
  );
}
