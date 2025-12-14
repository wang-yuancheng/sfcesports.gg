import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function WelcomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-druk text-4xl uppercase tracking-wide">
            Welcome to the Club
          </h1>
          <p className="text-lg text-gray-500">Your email has been verified.</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button asChild size="lg" className="w-full h-11 text-base">
            <Link href="/onboarding">Complete your profile</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full h-11 text-base text-gray-500 hover:text-gray-900"
          >
            <Link href="/">Go to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
