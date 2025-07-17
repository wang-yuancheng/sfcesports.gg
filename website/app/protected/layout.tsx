import { AuthButton } from "@/app/components/ui/auth/auth-button";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full border-b h-16 flex justify-center">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <AuthButton />
          </div>
        </nav>

        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>

        <footer className="w-full text-center text-xs py-6 border-t">
          <p className="text-gray-500">Protected Area</p>
        </footer>
      </div>
    </main>
  );
}
