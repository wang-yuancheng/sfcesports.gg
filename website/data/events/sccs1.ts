import sccs1Banner from "@/assets/pictures/thumbnails/sccs1thumbnail.webp";
import { ParticipatingTeamList, VideoItem } from "@/lib/types";
import { Leaderboard } from "@/lib/types";
import { StaticImageData } from "next/image";

import cosaPerakLogo from "@/assets/logos/sccs1/COSA_PERAK.webp";
import dazzyLogo from "@/assets/logos/sccs1/DAZZY.webp";
import mpxNemesisLogo from "@/assets/logos/sccs1/MPX_NEMESIS.webp";
import xanaxRushLogo from "@/assets/logos/sccs1/XANAX_RUSH.webp";
import slatanEsportLogo from "@/assets/logos/sccs1/SLATAN_ESPORTS.webp";
import unravelGamingLogo from "@/assets/logos/sccs1/UNRAVEL_GAMING.webp";
import forceGamingLogo from "@/assets/logos/sccs1/FORCE_GAMING.webp";
import topgunzGaiaLogo from "@/assets/logos/sccs1/TOPGUNZ_GAIA.webp";
import bootcampFunhouseLogo from "@/assets/logos/sccs1/BOOTCAMP_FUNHOUSE.webp";
import yeensLegionLogo from "@/assets/logos/sccs1/YEENS_LEGION.webp";
import rusOfficialsLogo from "@/assets/logos/sccs1/RUS_OFFICIALS.webp";
import xqgEsportsLogo from "@/assets/logos/sccs1/XQG_ESPORTS.webp";
import pieceOfCakeLogo from "@/assets/logos/sccs1/PIECE_OF_CAKE.webp";
import mpxLetterLogo from "@/assets/logos/sccs1/MPX_LETTER.webp";
import commandanEspLogo from "@/assets/logos/sccs1/COMMANDAN_ESP.webp";
import i4uAresLogo from "@/assets/logos/sccs1/I4U_ARES.webp";
import sfcHeirsLogo from "@/assets/logos/sccs1/SFC_HEIRS.webp";
import sfcNemesisLogo from "@/assets/logos/sccs1/SFC_NEMESIS.webp";
import sfcAcademyLogo from "@/assets/logos/sccs1/SFC_ACADEMY.webp";
import sfcValenceLogo from "@/assets/logos/sccs1/SFC_VALENCE.webp";

import groupAQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_A_QUALIFIER.webp";
import groupBQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_B_QUALIFIER.webp";
import groupCQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_C_QUALIFIER.webp";
import groupDQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_D_QUALIFIER.webp";
import groupEQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_E_QUALIFIER.webp";
import groupFQualifier from "@/assets/pictures/tourmedia/sccs1/GROUP_F_QUALIFIER.webp";
import groupASemiFinals from "@/assets/pictures/tourmedia/sccs1/GROUP_A_SEMI_FINALS.webp";
import groupBSemiFinals from "@/assets/pictures/tourmedia/sccs1/GROUP_B_SEMI_FINALS.webp";
import groupCSemiFinals from "@/assets/pictures/tourmedia/sccs1/GROUP_C_SEMI_FINALS.webp";
import groupDSemiFinals from "@/assets/pictures/tourmedia/sccs1/GROUP_D_SEMI_FINALS.webp";
import grandFinals from "@/assets/pictures/tourmedia/sccs1/GRAND_FINALS.webp";
import finalsTop3 from "@/assets/pictures/tourmedia/sccs1/FINALS_TOP_3.webp";

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
    logo: sfcHeirsLogo,
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
    logo: sfcValenceLogo,
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
    logo: sfcNemesisLogo,
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
    logo: sfcAcademyLogo,
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
  },
  {
    title: "Shibe's Community Cup S1 Grand Finals Day 2",
    id: "nwumYiFQv4k",
    thumbnail: sccs1Banner,
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
    logo: sfcValenceLogo,
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
    logo: sfcHeirsLogo,
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
    logo: sfcNemesisLogo,
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
    logo: sfcAcademyLogo,
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
