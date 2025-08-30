import { useEffect, useState } from "react";

export function useYoutubeViews(ids: string[]) {
  const [views, setViews] = useState<Record<string, string>>({});

  useEffect(() => {
    if (ids.length === 0) return;

    const key = ids.join(",");
    const controller = new AbortController();

    fetch(`/api/youtube?ids=${encodeURIComponent(key)}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => setViews(data))
      .catch(() => {});
      
    return () => controller.abort();
  }, [ids]);

  return views;
}
