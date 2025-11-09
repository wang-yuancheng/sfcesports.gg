import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import { InitialFontWrapper } from "@/components/other/InitialFontWrapper";

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
      <body>
        <InitialFontWrapper>{children}</InitialFontWrapper>
      </body>
    </html>
  );
}
