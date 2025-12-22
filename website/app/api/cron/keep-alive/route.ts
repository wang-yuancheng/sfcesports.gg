import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/client";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("count")
    .single();

  if (error) {
    console.error("Supabase Ping Failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "Supabase pinged successfully",
    timestamp: new Date().toISOString(),
  });
}