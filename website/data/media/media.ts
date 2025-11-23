import { StaticImageData } from "next/image";
import tempimage from "@/assets/pictures/ar15skins1.jpg";

export interface MediaItem {
  id: number;
  slug: string;
  date: string;
  title: string;
  image: StaticImageData;
  content?: string; 
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    slug: "shibe-reaches-rank-1-ultimate-royale",
    date: "1 Apr 2025",
    title: "Shibe reaches Rank 1 in Ultimate Royale",
    image: tempimage,
    content: "Full article content goes here..."
  },
  {
    id: 2,
    slug: "shibe-breaks-game-record",
    date: "18 May 2024",
    title: "Shibe Breaks Game Record with 3x Rank 1 in a Season",
    image: tempimage,
  },
  {
    id: 3,
    slug: "sfc-secures-2-spot",
    date: "1 Apr 2024",
    title: "SFC Secures #2 Spot in SEA Tier-1 Tournament",
    image: tempimage,
  },
  {
    id: 4,
    slug: "sfc-wins-asia-championship",
    date: "30 Jan 2024",
    title: "SFC wins Asia All talent championship",
    image: tempimage,
  },
  {
    id: 5,
    slug: "10-years-of-shibe",
    date: "5 Oct 2023",
    title: "10 Years of Shibe: Looking Back at 2013–2023",
    image: tempimage,
  },
  {
    id: 6,
    slug: "shibe-global-rank-1-pubg",
    date: "22 Jan 2022",
    title: "Shibe Reaches Global Rank 1 in PUBG Mobile",
    image: tempimage,
  },
];