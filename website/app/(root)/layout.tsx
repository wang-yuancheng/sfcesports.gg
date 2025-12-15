import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { LongLiveDisplay } from "@/components/navigation/LiveDisplay";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .single();

    if (!profile?.username) {
      redirect("/welcome");
    }
  }

  return (
    <div>
      <Header />
      <div className="md:hidden">
        <LongLiveDisplay />
      </div>
      <main>{children}</main>
      <div className="mx-6 md:mx-0">
        <Footer />
      </div>
    </div>
  );
}
