import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data, error } = await supabase
    .from("_keep_alive")
    .upsert({ id: 1, last_ping: new Date().toISOString() })
    .select();

  if (error) {
    console.error("Ping Failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "Ping successful (Write operation)",
    timestamp: new Date().toISOString(),
  });
}
