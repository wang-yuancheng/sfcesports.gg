import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

// 1. CRITICAL: Force this route to always run dynamically. 
// If you don't add this, Vercel might cache the response and never actually hit Supabase.
export const dynamic = 'force-dynamic';

export async function GET() {
  const supabase = createClient();

  // 2. Perform a simple query.
  // We use 'count' on a table that definitely exists (like 'users' or 'boosters').
  // It doesn't need to return data, just needs to touch the DB.
  const { data, error } = await supabase
    .from('boosters') // or 'users', or any table you have
    .select('count')
    .limit(1)
    .single();

  if (error) {
    console.error('Supabase Ping Failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 3. Return success
  return NextResponse.json({ 
    message: 'Supabase pinged successfully', 
    timestamp: new Date().toISOString() 
  });
}