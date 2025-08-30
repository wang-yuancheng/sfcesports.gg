import { NextResponse } from "next/server";

const YT_ENDPOINT = "https://www.googleapis.com/youtube/v3/videos";
const ID_RE = /^[A-Za-z0-9_-]{11}$/;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idsParam = searchParams.get("ids");
    if (!idsParam) {
      return NextResponse.json({ error: "Missing ids" }, { status: 400 });
    }

    const key = process.env.YOUTUBE_API_KEY;
    if (!key) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Normalize ids, validate, dedupe, and cap to 50 (no sorting)
    const rawIds = idsParam
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const validIds = Array.from(
      new Set(rawIds.filter((id) => ID_RE.test(id)))
    ).slice(0, 50);

    if (!validIds.length) {
      return NextResponse.json({ error: "No valid ids" }, { status: 400 });
    }

    const url = new URL(YT_ENDPOINT);
    url.searchParams.set("part", "statistics");
    url.searchParams.set("id", validIds.join(","));
    url.searchParams.set("key", key);
    url.searchParams.set("fields", "items(id,statistics(viewCount))");
    url.searchParams.set("prettyPrint", "false");

    // Cache upstream response for 10 minutes on the Next.js fetch cache
    const res = await fetch(url.toString(), { next: { revalidate: 600 } });
    const data = await res.json();

    if (!res.ok) {
      const message = data?.error?.message || "YouTube API request failed";
      return NextResponse.json({ error: message }, { status: 502 });
    }

    // Build complete map, include zeros for any ids not returned
    const out: Record<string, string> = Object.fromEntries(
      validIds.map((id) => [id, "0"])
    );
    for (const item of data.items ?? []) {
      if (item?.id && item?.statistics?.viewCount != null) {
        out[item.id] = String(item.statistics.viewCount);
      }
    }

    // Cache at the edge for 10 minutes, allow short stale period
    return NextResponse.json(out, {
      headers: {
        "Cache-Control": "s-maxage=600, stale-while-revalidate=60",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
