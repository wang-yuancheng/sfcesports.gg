"use client";

import React, { useState } from "react";
import atcs16Thumbnail from "@/assets/pictures/atcs16thumbnail.jpg";
import atcs17Thumbnail from "@/assets/pictures/atcs17thumbnail.jpg";
import gamelingThumbnail from "@/assets/pictures/gamelingthumbnail.jpg";
import ultimateRoyaleThumbnail from "@/assets/pictures/ultimateroyalerank1thumbnail.jpg";
import VideoCard, { VideoItem } from "@/components/Home/VideoCard";
import VideoModal from "@/components/Home/VideoModal";

const videos: VideoItem[] = [
  {
    title: "How it sounds to win All Talent Championship S17 Finals",
    id: "1uxjAOrkPY8",
    thumbnail: atcs17Thumbnail,
    timeAgo: "About 18 Hours Ago",
  },
  {
    title: "We are Champions of All Talent Championship S16",
    id: "YvjFRACNnrk",
    thumbnail: atcs16Thumbnail,
    timeAgo: "2 Days Ago",
  },
  {
    title: "How it sounds to win a Tier 1 Tournament Grand Final",
    id: "dDMKyoMDb-s",
    thumbnail: gamelingThumbnail,
    timeAgo: "11 Days Ago",
  },
  {
    title: "Reaching Rank 1 in Ultimate Royale",
    id: "wOp_EQdEpx4",
    thumbnail: ultimateRoyaleThumbnail,
    timeAgo: "14 Days Ago",
  },
];

export default function MediaPage() {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] py-6">
      <div className="mb-8 mt-4 w-full sm:mt-0">
        <p className="font-druk text-center text-4xl font-medium uppercase">
          Featured Videos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-0 md:grid-cols-12">
        {videos.map((v, i) => (
          <div key={i} className="md:col-span-3">
            <VideoCard item={v} onOpen={setActive} />
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
