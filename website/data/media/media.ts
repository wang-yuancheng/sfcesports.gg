import { StaticImageData } from "next/image";
import tempimage from "@/assets/pictures/ar15skins1.jpg";

// 1. Define the types of blocks we can use in our articles
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: StaticImageData; alt: string; caption?: string }; // Added image block

export interface MediaItem {
  id: number;
  slug: string;
  date: string;
  title: string;
  image: StaticImageData;
  imageCaption?: string; // Added caption for the main image
  content?: ContentBlock[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    slug: "shibe-reaches-rank-1-ultimate-royale",
    date: "1 Apr 2025",
    title: "Shibe reaches Rank 1 in Ultimate Royale",
    image: tempimage,
    imageCaption: "Shibe celebrating the victory at the regional qualifiers — Source: Official Broadcast",
    content: [
      {
        type: "paragraph",
        text: "In a stunning display of skill and determination, Shibe has officially reached Rank 1 in Ultimate Royale, cementing their legacy as one of the top players in the region. The journey wasn't easy, but consistent performance over the last three months propelled them to the top of the leaderboard.",
      },
      {
        type: "image",
        src: tempimage, // Reusing tempimage for demo, you can import others
        alt: "Shibe's winning setup",
        caption: "The setup Shibe used during the final match — Source: Author"
      },
      {
        type: "heading",
        text: "The Winning Strategy",
      },
      {
        type: "paragraph",
        text: "Unlike previous seasons where aggressive playstyles dominated, Shibe adopted a more tactical approach this time around. By focusing on positioning and late-game resource management, they were able to secure consistently high placements.",
      },
      {
        type: "quote",
        text: "It's not about getting the most kills every game, it's about making the right decisions when the pressure is on.",
        author: "Shibe",
      },
      {
        type: "subheading",
        text: "Key Statistics",
      },
      {
        type: "list",
        items: [
          "Win Rate: 32%",
          "Average Damage: 1,450 per game",
          "Top 10 Finishes: 85%",
          "Most Used Weapon: AR-15 Custom",
        ],
      },
      {
        type: "paragraph",
        text: "Fans are now eagerly awaiting the upcoming international tournament to see if Shibe can translate this ladder success into a trophy finish.",
      },
    ],
  },
  {
    id: 2,
    slug: "shibe-breaks-game-record",
    date: "18 May 2024",
    title: "Shibe Breaks Game Record with 3x Rank 1 in a Season",
    image: tempimage,
    imageCaption: "Archival footage from the record-breaking stream",
    content: [
      {
        type: "paragraph",
        text: "Breaking records is nothing new for Shibe, but this latest achievement is truly unprecedented. Securing the Rank 1 spot three separate times in a single competitive season has never been done before.",
      },
      {
        type: "heading",
        text: "A Historic Season",
      },
      {
        type: "paragraph",
        text: "The community is calling this the 'Golden Run'. Analysts suggest that the meta shift heavily favored Shibe's adaptable playstyle.",
      },
    ],
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