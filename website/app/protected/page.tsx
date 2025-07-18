import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="max-w-xl mx-auto py-12 space-y-8">
      <div className="p-4 bg-blue-100 text-blue-800 rounded-md text-sm">
        This is a protected page that you can only see as an authenticated user.
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Your user details</h2>
        <pre className="text-xs font-mono p-3 border rounded bg-gray-50 overflow-auto max-h-64">
          {JSON.stringify(data.claims, null, 2)}
        </pre>
      </div>
    </div>
  );
}
