import { StaticImageData } from "next/image";
import tempimage from "@/assets/pictures/ar15skins1.jpg";
import tdms1 from "@/assets/pictures/media/1v1s1.jpeg";
import tdms2 from "@/assets/pictures/media/1v1s2.jpeg";
import tdms2m4 from "@/assets/pictures/media/1v1s2m4.jpeg";
import tdms3semi from "@/assets/pictures/media/1v1s3semi.jpeg";
import tdms4champion from "@/assets/pictures/media/1v1s4champion.jpeg";
import tdms4semi from "@/assets/pictures/media/1v1s4semi.jpg";
import tdms5bracket from "@/assets/pictures/media/1v1s5bracket.jpeg";
import tdms5final from "@/assets/pictures/media/1v1s5final.jpeg";
import atcqualifier from "@/assets/pictures/media/atcqualifier.png";
import atcs1 from "@/assets/pictures/media/atcs1.png";
import atcs16_1 from "@/assets/pictures/media/atcs16-1.png";
import atcs16_2 from "@/assets/pictures/media/atcs16-2.png";
import atcs16_3 from "@/assets/pictures/media/atcs16-3.png";
import atcs16_4 from "@/assets/pictures/media/atcs16-4.png";
import events from "@/assets/pictures/media/events.png";
import gameling from "@/assets/pictures/media/gameling.png";
import matchresult from "@/assets/pictures/media/matchresult.png";
import ourcompetitivehighlights from "@/assets/pictures/media/ourcompetitivehighlights.png";
import rank1 from "@/assets/pictures/media/rank1.png";
import scc1finalposter from "@/assets/pictures/media/scc1finalposter.jpg";
import scc1poster from "@/assets/pictures/media/scc1poster.jpg";
import scc2final_1 from "@/assets/pictures/media/scc2final-1.jpeg";
import scc2final_2 from "@/assets/pictures/media/scc2final-2.jpg";
import sfcxnova from "@/assets/pictures/media/sfcxnova.jpeg";
import thm from "@/assets/pictures/media/thm.png";
import worldseason1 from "@/assets/pictures/media/worldseason1.png";
import worldtitle1 from "@/assets/pictures/media/worldtitle1.png";
import wowfinal from "@/assets/pictures/media/wowfinal.jpeg";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: StaticImageData; alt: string; caption?: string };

export interface MediaItem {
  id: number;
  slug: string;
  date: string;
  title: string;
  image: StaticImageData;
  content?: ContentBlock[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    slug: "our-most-successful-events",
    date: "19 Sep 2025",
    title: "Our Most Successful Events",
    image: tempimage,
    content: [],
  },
  {
    id: 2,
    slug: "our-competitive-highlights",
    date: "19 Sep 2025",
    title: "Our Competitive Highlights",
    image: tempimage,
    content: [],
  },
  {
    id: 3,
    slug: "shibe-breaks-game-record",
    date: "18 May 2024",
    title: "Shibe Breaks Game Record with 3x Rank 1 in a Season",
    image: tempimage,
    content: [],
  },
  {
    id: 4,
    slug: "sfc-secures-2-spot",
    date: "1 Apr 2024",
    title: "SFC Secures #2 Spot in SEA Tier-1 Tournament",
    image: tempimage,
  },
  {
    id: 5,
    slug: "sfc-wins-asia-championship",
    date: "30 Jan 2024",
    title: "SFC wins Asia All talent championship",
    image: atcs16_1,
    content: [
      {
        type: "paragraph",
        text: "The PUBG Mobile All Talent Championship is a large-scale in-game tournament where tens of thousands of players form teams each season to compete. To reach the finals, teams must outscore thousands of others in the qualifying rounds and secure a spot among the top 160. From there, they need to place in the top 2 out of 20 others in the same lobby to advance. Teams that fail to do so will be offered a last chance in the playoffs which also requires a top 2 finish. The final round consists of 20 of the best teams in their region and winners would earn the opportunity to compete for a place in the official PUBG Mobile league.",
      },
      {
        type: "heading",
        text: "Season 1-10 (2021 - 2022)",
      },
      {
        type: "image",
        src: atcs1,
        alt: "Shibe's winning setup",
        caption: "First SFC Lineup for All Talent Championship",
      },
      {
        type: "paragraph",
        text: "The qualifiers consisted of 4 weeks, with each week, 40 teams can qualify. We formed a brand-new team consisting of strong leaderboard players to play scrims and tournaments. Our performance was not ideal as we lacked experience, failing to qualify on the first 3 weeks, and just barely passing the 4th qualifying week. We barely pulled through and ended the journey on the semifinals of Season 1. Following that, we practiced with more scrims where we managed to achieve #8 in the final round of Season 2. Things kind of slowed down after that, and we did not participate most of the other seasons, with unimpressive results and lack of motivation to continue going for #1.",
      },
      {
        type: "heading",
        text: "Season 11-15 (2023)",
      },
      {
        type: "image",
        src: atcqualifier,
        alt: "Shibe's winning setup",
        caption: "#1 Qualifiers in All Talent Championship Season 12",
      },
      {
        type: "paragraph",
        text: "After a long break, a new team was formed consisting of players that knew each other well. It was clear that a team of very strong players is not as good as a team of good players with a concise plan, familiarity of each other, and just a general good vibe. The SFC teams were able to easily pass qualifiers every single season, where we usually made it to the final round. We averaged a top 6 position, but it wasn't enough for us.",
      },
      {
        type: "quote",
        text: "It's not about getting the most kills every game, it's about making the right decisions when the pressure is on.",
        author: "Shibe",
      },
      {
        type: "heading",
        text: "Season 16 (2024)",
      },
      {
        type: "image",
        src: atcs16_3,
        alt: "Shibe's winning setup",
        caption: "#1 Final Round of All Talent Championship",
      },
      {
        type: "paragraph",
        text: "2024 was the best year for our team. We managed to recruit the strongest players and had the best synergy we could hope for. We were winning small daily tournaments left and right like they were nothing. With the strongest team we had since the start of this organization, we really had to win it this time. We achieved #2 for week 1 qualifiers, right behind NGX, which is a team that has achieved top 3 in the PUBG Mobile Global Championship Finals. Under SFC, we had 1 team that placed #5 for semifinals, and #2 for playoffs and another team that entered the final round directly through semifinals.",
      },
      {
        type: "image",
        src: atcs16_2,
        alt: "Shibe's winning setup",
        caption: "Final standings for All Talent Championship",
      },
      {
        type: "paragraph",
        text: "After 4 intense games, we are proud to say that the first and second positions of the grand final are both taken by SFC! It was the perfect ending to our journey, showing that with persistence, adaptation, and the right people by your side, even the toughest goals can become possible.",
      },
    ],
  },
  {
    id: 6,
    slug: "10-years-of-shibe",
    date: "5 Oct 2023",
    title: "10 Years of Shibe: Looking Back at 2013–2023",
    image: tempimage,
    content: [
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
    ],
  },
];
