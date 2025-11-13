import sfcLogo from "@/assets/icons/shibe-pinkbright.svg";
import sccs1Banner from "@/assets/pictures/sccs1thumbnail.png";
import { ParticipatingTeamList, VideoItem } from "@/lib/types";
import { Leaderboard } from "@/lib/types";
import { StaticImageData } from "next/image";

import cosaPerakLogo from "@/assets/logos/pubgm.svg";
import dazzyLogo from "@/assets/logos/pubgm.svg";
import mpxNemesisLogo from "@/assets/logos/pubgm.svg";
import xanaxRushLogo from "@/assets/logos/pubgm.svg";
import slatanEsportLogo from "@/assets/logos/pubgm.svg";
import unravelGamingLogo from "@/assets/logos/pubgm.svg";
import forceGamingLogo from "@/assets/logos/pubgm.svg";
import topgunzGaiaLogo from "@/assets/logos/pubgm.svg";
import bootcampFunhouseLogo from "@/assets/logos/pubgm.svg";
import yeensLegionLogo from "@/assets/logos/pubgm.svg";
import rusOfficialsLogo from "@/assets/logos/pubgm.svg";
import xqgEsportsLogo from "@/assets/logos/pubgm.svg";
import pieceOfCakeLogo from "@/assets/logos/pubgm.svg";
import mpxLetterLogo from "@/assets/logos/pubgm.svg";
import commandanEspLogo from "@/assets/logos/pubgm.svg";
import i4uAresLogo from "@/assets/logos/pubgm.svg";

import groupAQualifier from "@/assets/pictures/sccs1/GROUP_A_QUALIFIER.jpg";
import groupBQualifier from "@/assets/pictures/sccs1/GROUP_B_QUALIFIER.png";
import groupCQualifier from "@/assets/pictures/sccs1/GROUP_C_QUALIFIER.jpg";
import groupDQualifier from "@/assets/pictures/sccs1/GROUP_D_QUALIFIER.png";
import groupEQualifier from "@/assets/pictures/sccs1/GROUP_E_QUALIFIER.png";
import groupFQualifier from "@/assets/pictures/sccs1/GROUP_F_QUALIFIER.jpg";
import groupASemiFinals from "@/assets/pictures/sccs1/GROUP_A_SEMI_FINALS.jpg";
import groupBSemiFinals from "@/assets/pictures/sccs1/GROUP_B_SEMI_FINALS.png";
import groupCSemiFinals from "@/assets/pictures/sccs1/GROUP_C_SEMI_FINALS.jpg";
import groupDSemiFinals from "@/assets/pictures/sccs1/GROUP_D_SEMI_FINALS.png";
import grandFinals from "@/assets/pictures/sccs1/GRAND_FINALS.png";
import finalsTop3 from "@/assets/pictures/sccs1/FINALS_TOP_3.png";

export const sccs1GrandFinal: Leaderboard[] = [
  {
    place: 1,
    name: "DAZZY",
    logo: dazzyLogo,
    wwcd: 4,
    kp: 78,
    pp: 109,
    tp: 187,
    prize: "S$100",
  },
  {
    place: 2,
    name: "COSA PERAK",
    logo: cosaPerakLogo,
    wwcd: 2,
    kp: 65,
    pp: 62,
    tp: 127,
    prize: "-",
  },
  {
    place: 3,
    name: "SFC HEIRS",
    logo: sfcLogo,
    wwcd: 0,
    kp: 73,
    pp: 51,
    tp: 124,
    prize: "-",
  },
  {
    place: 4,
    name: "MPX NEMESIS",
    logo: mpxNemesisLogo,
    wwcd: 2,
    kp: 55,
    pp: 54,
    tp: 109,
    prize: "-",
  },
  {
    place: 5,
    name: "SFC VALENCE",
    logo: sfcLogo,
    wwcd: 0,
    kp: 44,
    pp: 37,
    tp: 81,
    prize: "-",
  },
  {
    place: 6,
    name: "XANAX RUSH",
    logo: xanaxRushLogo,
    wwcd: 0,
    kp: 30,
    pp: 38,
    tp: 68,
    prize: "-",
  },
  {
    place: 7,
    name: "SLATAN ESPORT",
    logo: slatanEsportLogo,
    wwcd: 0,
    kp: 26,
    pp: 39,
    tp: 65,
    prize: "-",
  },
  {
    place: 8,
    name: "SFC NEMESIS",
    logo: sfcLogo,
    wwcd: 0,
    kp: 39,
    pp: 24,
    tp: 63,
    prize: "-",
  },
  {
    place: 9,
    name: "UNRAVEL GAMING",
    logo: unravelGamingLogo,
    wwcd: 0,
    kp: 35,
    pp: 28,
    tp: 63,
    prize: "-",
  },
  {
    place: 10,
    name: "FORCE GAMING",
    logo: forceGamingLogo,
    wwcd: 0,
    kp: 36,
    pp: 20,
    tp: 56,
    prize: "-",
  },
  {
    place: 11,
    name: "TOPGUNZ GAIA",
    logo: topgunzGaiaLogo,
    wwcd: 1,
    kp: 37,
    pp: 17,
    tp: 54,
    prize: "-",
  },
  {
    place: 12,
    name: "BOOTCAMP FUNHOUSE",
    logo: bootcampFunhouseLogo,
    wwcd: 0,
    kp: 31,
    pp: 23,
    tp: 54,
    prize: "-",
  },
  {
    place: 13,
    name: "YEENS LEGION",
    logo: yeensLegionLogo,
    wwcd: 0,
    kp: 30,
    pp: 17,
    tp: 47,
    prize: "-",
  },
  {
    place: 14,
    name: "MPX LETTER",
    logo: mpxLetterLogo,
    wwcd: 0,
    kp: 28,
    pp: 15,
    tp: 43,
    prize: "-",
  },
  {
    place: 15,
    name: "I4U ARES",
    logo: i4uAresLogo,
    wwcd: 0,
    kp: 19,
    pp: 23,
    tp: 42,
    prize: "-",
  },
  {
    place: 16,
    name: "COMMANDAN ESP",
    logo: commandanEspLogo,
    wwcd: 1,
    kp: 16,
    pp: 19,
    tp: 35,
    prize: "-",
  },
  {
    place: 17,
    name: "SFC ACADEMY",
    logo: sfcLogo,
    wwcd: 0,
    kp: 15,
    pp: 19,
    tp: 34,
    prize: "-",
  },
  {
    place: 18,
    name: "RUS OFFICIALS",
    logo: rusOfficialsLogo,
    wwcd: 0,
    kp: 14,
    pp: 19,
    tp: 33,
    prize: "-",
  },
  {
    place: 19,
    name: "XQG ESPORTS",
    logo: xqgEsportsLogo,
    wwcd: 0,
    kp: 25,
    pp: 5,
    tp: 30,
    prize: "-",
  },
  {
    place: 20,
    name: "PIECE OF CAKE",
    logo: pieceOfCakeLogo,
    wwcd: 0,
    kp: 8,
    pp: 1,
    tp: 9,
    prize: "-",
  },
];


export const videos: VideoItem[] = [
  {
    title: "Shibe's Community Cup S1 Grand Finals Day 1",
    id: "mSrpgWz7KgQ",
    thumbnail: sccs1Banner,
    views: "",
  },
  {
    title: "Shibe's Community Cup S1 Grand Finals Day 2",
    id: "nwumYiFQv4k",
    thumbnail: sccs1Banner,
    views: "",
  },
];

export const sccs1Teams: ParticipatingTeamList[] = [
  // GROUP A -----------------------------
  {
    name: "TOPGUNZ GAIA",
    logo: topgunzGaiaLogo,
    advanced: "Semi-Finals Grp A #1",
  },
  {
    name: "XQG ESPORTS",
    logo: xqgEsportsLogo,
    advanced: "Semi-Finals Grp A #2",
  },
  {
    name: "COMMANDAN ESP",
    logo: commandanEspLogo,
    advanced: "Semi-Finals Grp A #3",
  },
  {
    name: "SLATAN ESPORT",
    logo: slatanEsportLogo,
    advanced: "Semi-Finals Grp A #4",
  },
  {
    name: "MPX LETTER",
    logo: mpxLetterLogo,
    advanced: "Semi-Finals Grp A #5",
  },

  // GROUP B -----------------------------
  {
    name: "SFC VALENCE",
    logo: sfcLogo,
    advanced: "Semi-Finals Grp B #1",
  },
  {
    name: "UNRAVEL GAMING",
    logo: unravelGamingLogo,
    advanced: "Semi-Finals Grp B #2",
  },
  {
    name: "BOOTCAMP FUNHOUSE",
    logo: bootcampFunhouseLogo,
    advanced: "Semi-Finals Grp B #3",
  },
  {
    name: "RUS OFFICIALS",
    logo: rusOfficialsLogo,
    advanced: "Semi-Finals Grp B #4",
  },
  {
    name: "I4U ARES",
    logo: i4uAresLogo,
    advanced: "Semi-Finals Grp B #5",
  },
   {
    name: "SFC HEIRS",
    logo: sfcLogo,
    advanced: "Semi-Finals Grp B #6",
  },

  // GROUP C -----------------------------
  {
    name: "DAZZY",
    logo: dazzyLogo,
    advanced: "Semi-Finals Grp C #1",
  },
  {
    name: "XANAX RUSH",
    logo: xanaxRushLogo,
    advanced: "Semi-Finals Grp C #2",
  },
  {
    name: "MPX NEMESIS",
    logo: mpxNemesisLogo,
    advanced: "Semi-Finals Grp C #3",
  },
  {
    name: "SFC NEMESIS",
    logo: sfcLogo,
    advanced: "Semi-Finals Grp C #4",
  },


  // GROUP D -----------------------------
  {
    name: "COSA PERAK",
    logo: cosaPerakLogo,
    advanced: "Semi-Finals Grp D #1",
  },
  {
    name: "FORCE GAMING",
    logo: forceGamingLogo,
    advanced: "Semi-Finals Grp D #2",
  },
  {
    name: "YEENS LEGION",
    logo: yeensLegionLogo,
    advanced: "Semi-Finals Grp D #3",
  },
  {
    name: "SFC ACADEMY",
    logo: sfcLogo,
    advanced: "Semi-Finals Grp D #4",
  },
  {
    name: "PIECE OF CAKE",
    logo: pieceOfCakeLogo,
    advanced: "Semi-Finals Grp D #5",
  },
];


export const sccs1Media: StaticImageData[] = [
  finalsTop3,
  grandFinals,
  groupASemiFinals,
  groupBSemiFinals,
  groupCSemiFinals,
  groupDSemiFinals,
  groupAQualifier,
  groupBQualifier,
  groupCQualifier,
  groupDQualifier,
  groupEQualifier,
  groupFQualifier,
];
