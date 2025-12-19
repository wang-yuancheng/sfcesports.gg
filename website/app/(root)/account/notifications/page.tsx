import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import NotificationsForm from "@/components/account/NotificationsForm";

export default async function NotificationsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("notifications")
    .eq("id", user.id)
    .single();

  const defaultPreferences = {
    tournaments: true,
    contents: true,
    mentions: true,
    marketing: false,
  };

  const initialPreferences = profile?.notifications
    ? (profile.notifications as typeof defaultPreferences)
    : defaultPreferences;

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Notifications
      </h1>

      <NotificationsForm
        initialPreferences={initialPreferences}
        userId={user.id}
      />
    </section>
  );
}
