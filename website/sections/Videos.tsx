import React from "react";
import VideosHero from "@/components/ui/videosHero";
import atcs16Thumbnail from "@/assets/pictures/atcs16thumbnail.jpg";
import atcs17Thumbnail from "@/assets/pictures/atcs17thumbnail.jpg";
import gamelingThumbnail from "@/assets/pictures/gamelingthumbnail.jpg";
import ultimateRoyaleThumbnail from "@/assets/pictures/ultimateroyalerank1thumbnail.jpg";

const videos = [
  {
    title: "How it sounds to win All Talent Championship S17 Finals | PUBG Mobile",
    link: "https://www.youtube.com/watch?v=1uxjAOrkPY8&t=389s&pp=0gcJCa0JAYcqIYzv",
    thumbnail: atcs17Thumbnail,           // no braces
    timeAgo: "About 18 Hours Ago",
  },
  {
    title: "Champions of Asia | All Talent Championship Finals S16 | PUBG Mobile",
    link: "https://www.youtube.com/watch?v=YvjFRACNnrk&t=276s",
    thumbnail: atcs16Thumbnail,
    timeAgo: "2 Days Ago",
  },
  {
    title:
      "How it sounds to win a Tier 1 Tournament Grand Final in PUBG Mobile (PMCL Teams)",
    link: "https://www.youtube.com/watch?v=dDMKyoMDb-s&t=30s",
    thumbnail: gamelingThumbnail,
    timeAgo: "11 Days Ago",
  },
  {
    title: "Reaching Rank 1 in Ultimate Royale PUBG Mobile",
    link: "https://www.youtube.com/watch?v=wOp_EQdEpx4&t=3s",
    thumbnail: ultimateRoyaleThumbnail,
    timeAgo: "14 Days Ago",
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <VideosHero videos={videos} />
    </main>
  );
}
