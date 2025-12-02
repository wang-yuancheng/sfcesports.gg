import { StaticImageData } from "next/image";
import tempimage from "@/assets/pictures/ar15skins1.jpg";
import tdms1 from "@/assets/pictures/media/1v1s1.jpeg";
import tdms2m24 from "@/assets/pictures/media/1v1s2m24.jpeg";
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
import sccs2finalposter from "@/assets/pictures/media/sccs2finalposter.jpg";
import sccs1poster from "@/assets/pictures/media/sccs1poster.jpg";
import sccs1final from "@/assets/pictures/media/sccs1final.jpg";
import sccs2final from "@/assets/pictures/media/sccs2final.jpeg";
import sfcxnova from "@/assets/pictures/media/sfcxnova.jpeg";
import thm from "@/assets/pictures/media/thm.png";
import worldseason1 from "@/assets/pictures/media/worldseason1.png";
import worldtitle1 from "@/assets/pictures/media/worldtitle1.png";
import wowfinal from "@/assets/pictures/media/wowfinal.jpeg";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "linkSubheading"; text: string; url: string }
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
    slug: "our-best-events",
    date: "10 Oct 2025",
    title: "Our Best Events",
    image: events,
    content: [
      {
        type: "paragraph",
        text: "ShibeFanClub consistently host events for community members and fans all across Asia. We do this to encourage participation, create opportunities for players to showcase their skills, and build a stronger sense of community around the game we love. From the wide range of events we have organized, including community activities such as scavenger hunts and competitive esports tournaments, these are among the most memorable.",
      },
      {
        type: "heading",
        text: "Shibe's Community Cup",
      },
      {
        type: "paragraph",
        text: "Shibe’s Community Cup is a tournament that brings together competitive teams from across Asia. Each season features numerous tier 2 teams competing over the course of three weeks in multiple stages. The competition culminates in a live streamed grand final, with official casters and broadcasted on Shibe’s YouTube channel.",
      },
      {
        type: "linkSubheading",
        text: "Season 1 (2021)",
        url: "/events/sccs1",
      },
      {
        type: "image",
        src: sccs1poster,
        alt: "",
        caption: "Finalists of SCC S1",
      },
      {
        type: "paragraph",
        text: "This was the first big event hosted by SFC with over 80 teams mainly consisting of players from Malaysia. Matches lasted from 23rd August to 12 September, with the Champion receiving 100USD. ",
      },
      {
        type: "image",
        src: sccs1final,
        alt: "",
        caption: "Final standings of SCC S1",
      },
      {
        type: "paragraph",
        text: "This was the first big event hosted by SFC with over 80 teams mainly consisting of players from Malaysia. Matches lasted from 23rd August to 12 September, with the Champion receiving 100USD.",
      },
      {
        type: "linkSubheading",
        text: "Season 2 (2023)",
        url: "/events/sccs2",
      },
      {
        type: "image",
        src: sccs2finalposter,
        alt: "",
        caption: "Finalists of SCC S2",
      },
      {
        type: "paragraph",
        text: "With the growth and reach of the organization, we decided to host the biggest tournament we have ever done, with over 144 teams and over 600 players. We brought in professional PUBG Mobile casters and improved the viewer experience of the live streams. This time round, we opened the tournament for every country. Teams from Europe, Middle East and Asia joined and competed for a total prize of 500USD. The tournament lasted from 17 November to 3 December.",
      },
      {
        type: "image",
        src: sccs2final,
        alt: "",
        caption: "Final Standings of SCC S2",
      },
      {
        type: "heading",
        text: "Shibe's 1v1 Tournament",
      },
      {
        type: "paragraph",
        text: "Shibe’s 1v1 Tournament is designed to test individual players’ skills in 1 versus 1 TDM matches. With each season, the number of participants grew rapidly, starting with 70 players in the first season and reaching more than 400 by Season 5. Typically, players would go through single elimination and the top 10-15 players, depending on the season, would go through a Swiss system of 7 rounds. Finally, the top 2 players of the semi finals would fight in a best of 3 to win the tournament.",
      },
      {
        type: "subheading",
        text: "Season 1 (2020)",
      },
      {
        type: "paragraph",
        text: "This is one of the very first events we held, for players in our ShibeFanClub Discord server. 115 players participated and the Winner was rewarded a permanent Discord role which gives 10x giveaway odds when one is hosted in the server.",
      },
      {
        type: "image",
        src: tdms1,
        alt: "",
        caption: "Top 5 players of Season 1",
      },
      {
        type: "subheading",
        text: "Season 2 (2021)",
      },
      {
        type: "paragraph",
        text: "In PUBG Mobile, players often use the gun M416 for 1v1 matches. There is a less popular version where players use the M24 sniper instead. This season, we created two categories. Players competed for a new exclusive discord role that also gives 10x giveaway chances. About 128 players participated in this event as we still only limited registration for players in the Discord server.",
      },
      {
        type: "image",
        src: tdms2m24,
        alt: "",
        caption: "Top 10 players for M24 Category",
      },
      {
        type: "image",
        src: tdms2m4,
        alt: "",
        caption: "Top 10 players for M4 Category",
      },

      {
        type: "subheading",
        text: "Season 3 (2021)",
      },
      {
        type: "paragraph",
        text: "In season 3, we finally decided to allow more players to participate. 120 players competed for a new Discord role with 30x giveaway odds. On top of that, the champion and 1st runner up would receive in game rewards worth 15USD and 5USD respectively. Games lasted from 24th November to 1st December.",
      },
      {
        type: "image",
        src: tdms3semi,
        alt: "",
        caption: "Top 10 players of Season 3",
      },
      {
        type: "linkSubheading",
        text: "Season 4 (2022)",
        url: "/events/1v1s4",
      },
      {
        type: "paragraph",
        text: "Finally, we decided to open the tournament to the public, with players all over Asia participating. 400 players fought for the top 10 in the semifinals lasting about 2 weeks. Due to the increase in scale of the tournament, we distributed 100USD in prizes for the top 5 players. It was actually quite messy, as the 400 players are individuals, which meant we had to deal with many people compared to team tournaments where we only talked to their game leaders. ",
      },
      {
        type: "image",
        src: tdms4semi,
        alt: "",
        caption: "Top 10 players of Season 4",
      },
      {
        type: "linkSubheading",
        text: "Season 5 (2023)",
        url: "/events/1v1s5",
      },
      {
        type: "paragraph",
        text: "With experience from Season 4, we knew that many things can go wrong, so this time, we the organising team was prepared. We created a strict rulebook and distributed them to each player. We created FAQs so we can guide them easily. We hired chat moderators that can answer player queries swiftly. Due to a change in match formats, we only accepted 300+ players. We collaborated with 独尊, which is another organization with many high ranked players on the PUBG Mobile leaderboards. The prize pool for this tournament reached 500USD and is distributed to the top 15 players. This means that everyone who makes it to the semifinals are guaranteed a reward.",
      },
      {
        type: "image",
        src: tdms5final,
        alt: "",
        caption: "Top 15 players of Season 5",
      },
      {
        type: "paragraph",
        text: "This time, instead of the top 2 players fighting out for the 1st place, we had a double elimination bracket for the top 6 players. This encouraged players who were not ranked at the top of the semi finals to continue trying their best for a better prize and another chance to reach the top.",
      },
      {
        type: "image",
        src: tdms5bracket,
        alt: "",
        caption: "Final double elimination bracket for Season 5",
      },
      {
        type: "paragraph",
        text: "Reflecting on these milestones, it is evident that what began as modest community gatherings has evolved into a recognized platform for aspiring talent across the region. As we continue to scale our operations, ShibeFanClub remains dedicated to professionalizing grassroots esports, providing a stage where players can compete with integrity and showcase their potential to the world."
      },
    ],
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
    title: "Shibe Breaks PUBG Mobile Game Record with 3x Rank 1 in a Season",
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
        type: "subheading",
        text: "Season 1-10 (2021 - 2022)",
      },
      {
        type: "image",
        src: atcs1,
        alt: "",
        caption: "First SFC Lineup for All Talent Championship",
      },
      {
        type: "paragraph",
        text: "The qualifiers consisted of 4 weeks, with each week, 40 teams can qualify. We formed a brand-new team consisting of strong leaderboard players to play scrims and tournaments. Our performance was not ideal as we lacked experience, failing to qualify on the first 3 weeks, and just barely passing the 4th qualifying week. We barely pulled through and ended the journey on the semifinals of Season 1. Following that, we practiced with more scrims where we managed to achieve #8 in the final round of Season 2. Things kind of slowed down after that, and we did not participate most of the other seasons, with unimpressive results and lack of motivation to continue going for #1.",
      },
      {
        type: "subheading",
        text: "Season 11-15 (2023)",
      },
      {
        type: "image",
        src: atcqualifier,
        alt: "",
        caption: "#1 Qualifiers in All Talent Championship Season 12",
      },
      {
        type: "paragraph",
        text: "After a long break, a new team was formed consisting of players that knew each other well. It was clear that a team of very strong players is not as good as a team of good players with a concise plan, familiarity of each other, and just a general good vibe. The SFC teams were able to easily pass qualifiers every single season, where we usually made it to the final round. We averaged a top 6 position, but it wasn't enough for us.",
      },
      {
        type: "linkSubheading",
        text: "Season 16 (2024)",
        url: "/atc",
      },
      {
        type: "image",
        src: atcs16_3,
        alt: "",
        caption: "#1 Final Round of All Talent Championship",
      },
      {
        type: "quote",
        text: "You need to believe you are the best to become the best.",
        author: "Shibe",
      },
      {
        type: "paragraph",
        text: "2024 was the best year for our team. We managed to recruit the strongest players and had the best synergy we could hope for. We were winning small daily tournaments left and right like they were nothing. With the strongest team we had since the start of this organization, we really had to win it this time. We achieved #2 for week 1 qualifiers, right behind NGX, which is a team that has achieved top 3 in the PUBG Mobile Global Championship Finals. Under SFC, we had 1 team that placed #5 for semifinals, and #2 for playoffs and another team that entered the final round directly through semifinals.",
      },
      {
        type: "image",
        src: atcs16_2,
        alt: "",
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
