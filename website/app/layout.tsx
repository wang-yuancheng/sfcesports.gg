import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css"

export const metadata: Metadata = {
  title: "My App",
  description: "Powered by Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
