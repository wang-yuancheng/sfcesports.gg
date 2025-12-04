import { StaticImageData } from "next/image";
import tenyear0 from "@/assets/pictures/media/10year-0.png";
import tenyear1 from "@/assets/pictures/media/10year-1.png";
import tenyear2 from "@/assets/pictures/media/10year-2.png";
import tenyear3 from "@/assets/pictures/media/10year-3.png";
import tenyear4 from "@/assets/pictures/media/10year-4.png";
import tenyear5 from "@/assets/pictures/media/10year-5.png";
import tenyear6 from "@/assets/pictures/media/10year-6.png";
import tenyear7 from "@/assets/pictures/media/10year-7.png";
import tenyear8 from "@/assets/pictures/media/10year-8.png";
import tenyear9 from "@/assets/pictures/media/10year-9.jpg";
import tenyear10 from "@/assets/pictures/media/10year-10.jpg";
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
import gamelingPoster from "@/assets/pictures/media/gamelingPoster.jpg";
import gamelingFinal from "@/assets/pictures/media/gamelingFinal.jpg";
import gamelingSemi from "@/assets/pictures/media/gamelingSemi.jpg";
import gamelingRevival from "@/assets/pictures/media/gamelingRevival.png";
import gamelingR2 from "@/assets/pictures/media/gamelingR2.jpg";
import gamelingR1 from "@/assets/pictures/media/gamelingR1.jpg";
import matchresult from "@/assets/pictures/media/matchresult.png";
import ourcompetitivehighlights from "@/assets/pictures/media/ourcompetitivehighlights.png";
import rank1 from "@/assets/pictures/media/rank1.png";
import sccs2finalposter from "@/assets/pictures/media/sccs2finalposter.jpg";
import sccs1poster from "@/assets/pictures/media/sccs1poster.jpg";
import sccs1final from "@/assets/pictures/media/sccs1final.jpg";
import sccs2final from "@/assets/pictures/media/sccs2final.jpeg";
import sfcxnova from "@/assets/pictures/media/sfcxnova.jpeg";
import thm from "@/assets/pictures/media/thm.png";
import ultimateRoyaleRank1 from "@/assets/pictures/media/ultimateroyalerank1.jpg";
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
        text: "Reflecting on these milestones, it is evident that what began as modest community gatherings has evolved into a recognized platform for aspiring talent across the region. As we continue to scale our operations, ShibeFanClub remains dedicated to professionalizing grassroots esports, providing a stage where players can compete with integrity and showcase their potential to the world.",
      },
    ],
  },
  {
    id: 2,
    slug: "our-competitive-highlights",
    date: "19 Sep 2025",
    title: "Our Competitive Highlights",
    image: ourcompetitivehighlights,
    content: [
      {
        type: "paragraph",
        text: "Since the founding of ShibeFanClub, we’ve brought teams to countless tournaments across different levels of competition. Along the way, we’ve learned, grown, and pushed ourselves against some of the toughest opponents out there. In this article, we’ll look back at three of our biggest regional tournaments we’ve played in.",
      },
      {
        type: "subheading",
        text: "THM Challenge Cup (2023)",
      },
      {
        type: "paragraph",
        text: "PUBG Mobile THM Challenge Cup 2023 is an official tournament organized by KRAFTON and Level Infinite for esport teams in Taiwan, Hongkong and Macau. It features a prize pool of NT$136,500 TWD (≃ $4,227 USD).",
      },
      {
        type: "image",
        src: thm,
        alt: "",
        caption: "#7 in THM Challenge Cup Finals",
      },
      {
        type: "paragraph",
        text: "Our roster for this event was made up of 4 players from Taiwan, marking one of our first times stepping into an official regional stage. The competition was intense, with some of the strongest teams in the region fighting for the top spots. Finishing 7th in the finals gave us valuable experience and confidence, showing that we could hold our own in high-stakes tournaments. ",
      },
      {
        type: "linkSubheading",
        text: "All Talent Championship S16 (2024)",
        url: "/atc",
      },
      {
        type: "image",
        src: atcs16_2,
        alt: "",
        caption: "SFC Teams holding both #1 and #2 in Asia Finals",
      },
      {
        type: "paragraph",
        text: "This was the biggest achievement in our competitive journey. With our strongest roster yet, we managed to push through qualifiers, semifinals, and playoffs against some of the toughest teams in the Asia. In the grand finals, SFC secured both 1st and 2nd place.",
      },
      {
        type: "subheading",
        text: "GamelinG Gauntlet (2024)",
      },
      {
        type: "paragraph",
        text: "This is a regional tournament taking place in Asia featuring $1000 USD prize pool. Unlike most of our previous events, this was a real test of endurance. The lobby was stacked with official PMCL Southeast Asia teams, some of which had already proven themselves on the global stage. As the only team representing Singapore in the tournament, we had to show that SFC could compete side by side with established organizations.",
      },
      {
        type: "image",
        src: gameling,
        alt: "",
        caption: "#2 in Grand Final",
      },
      {
        type: "paragraph",
        text: "We ended the tournament in 2nd place overall. While it wasn’t the trophy, it was one of the clearest signs yet that our team can compete against the top teams in the region.",
      },
    ],
  },
  {
    id: 3,
    slug: "shibe-breaks-game-record",
    date: "18 May 2024",
    title: "Shibe Breaks PUBG Mobile Game Record with 3x Rank 1 in a Season",
    image: ultimateRoyaleRank1,
    content: [
      {
        type: "paragraph",
        text: "Rank pushing is the first thing one would do when they become devoted to a game. It is the most direct way to measure skill and prove one’s dedication. This goal of reaching the top first came as an idea for a video. Reaching a good rank would bring in many views and boost our YouTube channel. As such, we treated it like a content challenge at the start, to just achieve a simple rank 10 in Asia.",
      },
      {
        type: "subheading",
        text: "Our First Rank #1 (2022)",
      },
      {
        type: "image",
        src: worldseason1,
        alt: "",
        caption:
          "Former world record for most points gained in a season: 12000",
      },
      {
        type: "paragraph",
        text: "It was a simple plan at first. We just focused and played the game. Within two weeks, we reached the goal. It felt almost too easy, and that’s when the motivation changed. It stopped being about making a video, but to proof to others that we are the most dedicated in the world. After 1 month of SFC players averaging 12 hours a day, we finally achieved #1 globally. ",
      },
      {
        type: "subheading",
        text: "Our Second Rank #1 (2024)",
      },
      {
        type: "paragraph",
        text: 'It was very draining to be playing the game for such a long time over a long period. Moreover, we started expanding the competitive side of PUBG Mobile, which lead to the pause in rank pushing. After 2 years, our previous record for most points gained was broken, and with players constantly improving, the "World Rank #1" in 2022 did not seem impressive anymore in the current year. ',
      },
      {
        type: "paragraph",
        text: "This led us to set out to retake our record, but this time, we plan to achieve more, doing something that has never been done before in the history of the game: achieving rank 1 in all game modes PUBG Mobile has to offer (Solo, Duos and Squads). Achieving this would automatically imply world rank #1 as with that many points, we would 100% be far ahead of others.",
      },
      {
        type: "image",
        src: rank1,
        alt: "",
        caption:
          "Current world record for most points gained in a season: 17124",
      },
      {
        type: "paragraph",
        text: "With experience from past rank pushing sessions, and collaboration with over 20+ players in the organization we managed to pull it off! 8 weeks of 16 hour a day games helped us beat the intense competition from players all over the world.",
      },
      {
        type: "image",
        src: worldtitle1,
        alt: "",
        caption: "4x World #1 Titles",
      },
      {
        type: "paragraph",
        text: "In the process, we also claimed 10 world titles, 4 of which were #1 finishes, proving what’s possible when a group of dedicated and skilled players come together with one shared goal. It is an achievement that reflects not just our dedication, but the strength of the entire SFC community behind it.",
      },
    ],
  },
  {
    id: 4,
    slug: "sfc-secures-2-spot",
    date: "1 Apr 2024",
    title: "SFC Secures #2 Spot in SEA Tier-1 Tournament",
    image: gamelingPoster,
    content: [
      {
        type: "paragraph",
        text: "GamelinG Gauntlet Season 3 was a regional online PUBG Mobile tournament held in February 2024, mainly targetting teams in Southeast Asia and pro teams that plan to participate in the PUBG Mobile Challengers League SEA Spring Split. The event featured a modest $1,000 USD prize pool, and attracted a competitive lobby of semi-pro teams from across the region.",
      },
      {
        type: "image",
        src: gamelingR1,
        alt: "",
        caption: "Round 1 Standings",
      },
      {
        type: "paragraph",
        text: "The first round was like a warm up for SFC, where we claimed the #7 spot and proceeded to the next round.",
      },
      {
        type: "image",
        src: gamelingR2,
        alt: "",
        caption: "Round 2 Standings",
      },
      {
        type: "paragraph",
        text: 'In round 2, we got destroyed. Literally. But thanks for the tournament having a "Revival Round", we had a final chance to prove ourselves that we can compete with the best.',
      },
      {
        type: "image",
        src: gamelingRevival,
        alt: "",
        caption: "Revival Round Standings",
      },
      {
        type: "paragraph",
        text: "With our backs against the wall, we finally clicked. We managed to clinch a top 3 spot—just enough to make the cutoff for the Top 32. Being the only Singaporean team left in the mix, the pressure was on. We couldn't fail now.",
      },
      {
        type: "image",
        src: gamelingSemi,
        alt: "",
        caption: "Semi Finals Standings",
      },
      {
        type: "paragraph",
        text: "To our utmost surprise, we actually made it to the grand finals with a respectable result. We put up a fight against some of the offical league teams in the region. Finishing with a top 6 position secured our ticket to the Grand Finals which is a massive result considering we almost went out two rounds ago.",
      },
      {
        type: "image",
        src: gamelingFinal,
        alt: "",
        caption: "Grand Finals Standings",
      },
      {
        type: "paragraph",
        text: "We did our best and clinched #2 in the Grand Finals, securing a $250 prize. It is rare for a Singapore team to have made it so far in a regional tournament, and we are proud to have represented the scene and proved we belong at this level. ",
      },
    ],
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
    image: tenyear0,
    content: [
      {
        type: "paragraph",
        text: "October 2023 marked a full decade of content creation and community building for our YouTube channel. It hasn't always been a smooth ride, but this is the story of how we went from 2013 to where we are today.",
      },
      {
        type: "subheading",
        text: "The Origins (2013–2015)",
      },
      {
        type: "image",
        src: tenyear7,
        alt: "",
        caption: "Oldest standing video on our first channel",
      },
      {
        type: "paragraph",
        text: "The journey began in March 2013 with the launch of two channels, 'Tankifighter' and 'Shibecaisu'. By late 2013, we consolidated the brand identity under the name 'Shibe123'. The early years were tough where we gained only 33 subscribers in the 1st year and few hundred subscribers per year subsequently. While much of the initial content from this era was eventually archived to uphold video quality standards, it laid the necessary technical groundwork for what was to come.",
      },
      {
        type: "subheading",
        text: "Growth and Community Engagement (2015–2016)",
      },
      {
        type: "image",
        src: tenyear5,
        alt: "",
        caption: "Flowchart Solution for Day 4 of 'The Game' Scavenger Hunt",
      },
      {
        type: "paragraph",
        text: "Between 2015 and 2016, the channel found its first major stride by capitalizing on niche community events. We focused on covering 'The Game' a biannual scavenger hunt event within Tanki Online. By being fast and publishing solutions within 1-2 hours of the release of the first clue, players in the community started relying on us. That consistency is what finally pushed the channel to our first 1,000 subscribers.",
      },
      {
        type: "subheading",
        text: "Recognized in Tanki Online (2017–2018)",
      },
      {
        type: "image",
        src: tenyear8,
        alt: "",
        caption: "Popular Road To Legend Series",
      },
      {
        type: "paragraph",
        text: "Variations and creativity in our videos led to a major increase in subscribers. We were even nominated for the best Tanki Online creator in 2017. This period was defined by a strategic elevation in production value. By introducing structured series such as 'Road to Legend' and refining our editing standards, we transitioned from casual uploads to compelling storytelling that resonated with a wider audience.",
      },
      {
        type: "image",
        src: tenyear4,
        alt: "",
        caption: "Opening of Discord Server in 2017",
      },
      {
        type: "paragraph",
        text: "As we improved our editing and started series like 'Road to Legend', the views followed. We were even nominated for the best Tanki Online creator in 2017. It was during this time that we launched our Discord server. It wasn't huge back then, but it was the start of the community that supports SFC today.",
      },
      {
        type: "subheading",
        text: "The Pivot to PUBG Mobile (2019–2020)",
      },
      {
        type: "image",
        src: tenyear9,
        alt: "",
        caption: "Reaching 10,000 Subscribers",
      },
      {
        type: "paragraph",
        text: "By early 2019, we hit a big milestone: 10,000 subscribers. It was a huge achievement for us in the Tanki community, but we knew we couldn't stay there forever.",
      },
      {
        type: "image",
        src: tenyear2,
        alt: "",
        caption: "22 Kills in Hypixel UHC",
      },
      {
        type: "paragraph",
        text: "2019 represented the most critical strategic pivot in our history. We recognized that even though we were the top 5% of creators in the game, with over 20k subscribers, growth was slow. With Tanki Online players dropping year over year, we knew we needed to pivot fast.",
      },
      {
        type: "paragraph",
        text: "We even tried Minecraft, but nothing really stuck until we tested a video on PUBG Mobile's 'Infection Mode'.",
      },
        {
        type: "image",
        src: tenyear6,
        alt: "",
        caption: "Viral PUBG Mobile video on Tanki Online YouTube channel",
      },
      {
        type: "paragraph",
        text: "A specific video outperformed all previous metrics, signaling a clear market demand for content even though many have already created channels. As a result, we decided to create a dedicated channel in November 2019. With deep analysis on current video trends and market gaps, we targeted the huge influx of new players joining the game with educational 'Tips and Tricks / Analysis' videos. This approach, bolstered by recognition from other established creators, fueled a period of rapid exponential growth.",
      },
      {
        type: "subheading",
        text: "The Competitive Era (2021–2023)",
      },
      {
        type: "image",
        src: tenyear3,
        alt: "",
        caption: "Reaching the highest rank in PUBG Mobile",
      },
      {
        type: "paragraph",
        text: "As the channel matured, the focus shifted from educational content to high-level competitive performance. 2021 marked the beginning of serious rank pushing and tournament organization. However, this intensity came with challenges. Following a gruelling rank push in early 2021 and subsequent enlistment in National Service for Singapore, operations faced a temporary slowdown due to burnout.",
      },
      {
        type: "image",
        src: atcs1,
        alt: "",
        caption: "Our first esports team participating in All Talent Championship",
      },
      {
        type: "paragraph",
        text: "We returned to the scene with a renewed focus on competitive play, joining organized teams and participating in events like the All Talent Championship. Today, the 10-year legacy serves not just as a history of a YouTube channel, but as the foundation upon which the ShibeFanClub esports organization was built.",
      },
      {
        type: "image",
        src: tenyear1,
        alt: "",
        caption: "Clip from Old Tanki Online Gold Box Montage",
      },
      {
        type: "paragraph",
        text: "From playing browser games in a bedroom to competing in the PUBG Mobile scene, the last decade has been a test of persistence. We started this just for fun, and today it’s become a recognized organization. We learned that if you keep evolving and treating the community right, the results will follow.",
      },
    ],
  },
];
