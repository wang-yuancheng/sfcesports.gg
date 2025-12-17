import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 1. Get User
  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;

  // 2. Define Protected Routes
  const protectedPaths = ["/protected", "/account", "/update-password", "/welcome"];
  const isProtected = protectedPaths.some((p) => path.startsWith(p));

  // 3. Define Auth Routes (Pages logged-in users should NOT see)
  const authPaths = ["/login", "/sign-up", "/forgot-password"];
  const isAuthPage = authPaths.some((p) => path.startsWith(p));

  // 4. Handle Unauthorized Access (Protect private pages)
  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("error", "Please log in to view this page");
    return NextResponse.redirect(url);
  }

  // 5. Handle Already Authorized Access (Redirect from login if already logged in)
  if (isAuthPage && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}