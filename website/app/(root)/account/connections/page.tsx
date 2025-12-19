import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ConnectionsForm from "@/components/account/ConnectionsForm";

export default async function ConnectionsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const identities = user.identities || [];

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Connections
      </h1>

      <ConnectionsForm initialIdentities={identities} />
    </section>
  );
}
