"use client";

import React, { useMemo, useState } from "react";
import worldGunslingerThumbnail from "@/assets/pictures/worldgunslinger.jpg";
import atcs17Thumbnail from "@/assets/pictures/atcs17thumbnail.jpg";
import gamelingThumbnail from "@/assets/pictures/gamelingthumbnail.jpg";
import ultimateRoyaleThumbnail from "@/assets/pictures/ultimateroyalerank1thumbnail.jpg";
import VideoCard, { VideoItem } from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";

const videos: VideoItem[] = [
  {
    title: "How it sounds to win All Talent Championship S17 Finals",
    id: "1uxjAOrkPY8",
    thumbnail: atcs17Thumbnail,
    views: "",
  },
  {
    title: "I finally got World #1 Gunslinger Title",
    id: "ZBEqe8cXbPE",
    thumbnail: worldGunslingerThumbnail,
    views: "",
  },
  {
    title: "We won a regional Tier 1 Grand Final Tournament in PUBG Mobile",
    id: "dDMKyoMDb-s",
    thumbnail: gamelingThumbnail,
    views: "",
  },
  {
    title: "Reaching Rank 1 in Ultimate Royale PUBG Mobile",
    id: "wOp_EQdEpx4",
    thumbnail: ultimateRoyaleThumbnail,
    views: "",
  },
];

export default function MediaPage() {
  const [active, setActive] = useState<VideoItem | null>(null);

  // Memoize ids so it’s not a new array each render
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <section className="section-container py-14 navbarsm:pt-5">
      <div className="mb-8 mt-4 w-full sm:mt-0">
        <p className="font-druk text-center text-4xl font-medium uppercase">
          Featured Videos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-0">
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
