import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
