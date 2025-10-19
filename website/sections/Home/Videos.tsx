"use client";

import React, { useMemo, useState } from "react";
import VideoCard from "@/components/home/VideoCard";
import { VideoItem } from "@/lib/types";
import VideoModal from "@/components/home/VideoModal";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { videos } from "@/data/home/videos";


export default function MediaPage() {
  const [active, setActive] = useState<VideoItem | null>(null);

  // Memoize ids so it’s not a new array each render
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <section className="section-container py-14 navbarsm:pt-5 select-none mb-5">
      <div className="mb-8 mt-4 w-full sm:mt-0 select-none">
        <p className="font-druk text-center text-4xl font-medium uppercase">
          Featured Videos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {videos.map((v) => (
          <div key={v.id} className="md:col-span-3">
            <VideoCard item={v} onOpen={setActive} viewCount={viewsMap[v.id]} />
          </div>
        ))}
      </div>

      <VideoModal
        open={Boolean(active)}
        title={active?.title ?? ""}
        videoId={active?.id ?? ""}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
