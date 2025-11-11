import sfcLogo from "@/assets/icons/shibe-pinkbright.svg";
import novaLogo from "@/assets/logos/nova.webp";
import undercoverBanner from "@/assets/pictures/undercover.jpg";
import sccs2Banner from "@/assets/pictures/sccs2poster.png";
import { ParticipatingTeamList, VideoItem } from "@/lib/types";
import { Leaderboard } from "@/lib/types";

import cosaPerakLogo from "@/assets/logos/pubgm.svg";
import c4TikusLogo from "@/assets/logos/pubgm.svg";
import GNAllstarLogo from "@/assets/logos/pubgm.svg";
import wbbMelxLogo from "@/assets/logos/pubgm.svg";
import wbbLogo from "@/assets/logos/pubgm.svg";
import manisXtremeLogo from "@/assets/logos/pubgm.svg";
import xmmJayzLogo from "@/assets/logos/pubgm.svg";
import PEAxSMEBaruzLogo from "@/assets/logos/pubgm.svg";
import shawnLogo from "@/assets/logos/pubgm.svg";
import vermillionesportsLogo from "@/assets/logos/pubgm.svg";
import FTWXtremeLogo from "@/assets/logos/pubgm.svg";
import wbbRebornLogo from "@/assets/logos/pubgm.svg";
import hastalavistaEsportLogo from "@/assets/logos/pubgm.svg";
import { StaticImageData } from "next/image";

export const sccs2GrandFinal: Leaderboard[] = [
  { place: 1,  name: "SFC",              logo: sfcLogo,              wwcd: 3, kp: 84, pp: 51, tp: 135, prize: "RM500" },
  { place: 2,  name: "PEA x SME Baruz",  logo: PEAxSMEBaruzLogo,     wwcd: 1, kp: 57, pp: 44, tp: 101, prize: "RM300" },
  { place: 3,  name: "GN ALLSTAR",       logo: GNAllstarLogo,        wwcd: 1, kp: 52, pp: 36, tp: 88,  prize: "RM200" },
  { place: 4,  name: "Hastalavista Esport", logo: hastalavistaEsportLogo, wwcd: 0, kp: 47, pp: 28, tp: 75, prize: "-" },
  { place: 5,  name: "Manis Xtreme",     logo: manisXtremeLogo,      wwcd: 2, kp: 37, pp: 26, tp: 63,  prize: "-" },
  { place: 6,  name: "C4 Tikus",         logo: c4TikusLogo,          wwcd: 1, kp: 45, pp: 15, tp: 60,  prize: "-" },
  { place: 7,  name: "Vermillion Esports", logo: vermillionesportsLogo, wwcd: 0, kp: 36, pp: 23, tp: 59, prize: "-" },
  { place: 8,  name: "FTW Xtreme",       logo: FTWXtremeLogo,        wwcd: 0, kp: 31, pp: 26, tp: 57,  prize: "-" },
  { place: 9,  name: "WBB MELX",         logo: wbbMelxLogo,          wwcd: 1, kp: 34, pp: 14, tp: 48,  prize: "-" },

  { place: 10, name: "VIP Squad Core",   logo: wbbLogo,              wwcd: 1, kp: 39, pp: 5,  tp: 44,  prize: "-" },
  { place: 11, name: "WBB Reborn",       logo: wbbRebornLogo,        wwcd: 0, kp: 28, pp: 13, tp: 41,  prize: "-" },
  { place: 12, name: "SFC 17K",          logo: sfcLogo,              wwcd: 0, kp: 26, pp: 11, tp: 37,  prize: "-" },
  { place: 13, name: "Cosa Perak C4",    logo: cosaPerakLogo,        wwcd: 0, kp: 27, pp: 10, tp: 37,  prize: "-" },
  { place: 14, name: "Shawn",            logo: shawnLogo,            wwcd: 0, kp: 26, pp: 4,  tp: 30,  prize: "-" },
  { place: 15, name: "SFC Rex",          logo: sfcLogo,              wwcd: 0, kp: 27, pp: 3,  tp: 30,  prize: "-" },
  { place: 16, name: "SFC V",            logo: sfcLogo,              wwcd: 0, kp: 15, pp: 5,  tp: 20,  prize: "-" },
  { place: 17, name: "WBB",              logo: wbbLogo,              wwcd: 0, kp: 14, pp: 5,  tp: 19,  prize: "-" },
  { place: 18, name: "XMM JAYZ",         logo: xmmJayzLogo,          wwcd: 0, kp: 12, pp: 1,  tp: 13,  prize: "-" },
];


export const videos: VideoItem[] = [
  {
    title: "Shibe's Community Cup S2 Grand Finals Day 1",
    id: "nlPx8n10nZ4",
    thumbnail: sccs2Banner,
    views: "",
  },
  {
    title: "Shibe's Community Cup S2 Grand Finals Day 2",
    id: "mgUS5U1_CVY",
    thumbnail: sccs2Banner,
    views: "",
  },
  {
    title: "I went UNDERCOVER in my own PUBG Mobile Tournament",
    id: "ymCGpJZaOxU",
    thumbnail: undercoverBanner,
    views: "",
  },
];
export const sccs2InvitedTeams: ParticipatingTeamList[] = [
  {
    name: "SFC",
    logo: sfcLogo,
    advanced: "Invited",
  },
  {
    name: "SFC 17K",
    logo: sfcLogo,
    advanced: "Invited",
  },
  {
    name: "SFC Rex",
    logo: sfcLogo,
    advanced: "Invited",
  },
  {
    name: "SFC V",
    logo: sfcLogo,
    advanced: "Invited",
  },
];
export const sccs2Teams: ParticipatingTeamList[] = [
  {
    name: "Cosa Perak C4",
    logo: cosaPerakLogo,
    advanced: "Semi-Finals Grp A #1",
  },
  {
    name: "C4 Tikus",
    logo: c4TikusLogo,
    advanced: "Semi-Finals Grp A #2",
  },
  {
    name: "GN Allstar",
    logo: GNAllstarLogo,
    advanced: "Semi-Final Grp B #1",
  },
  {
    name: "WBB Melx",
    logo: wbbMelxLogo,
    advanced: "Semi-Final Grp B #2",
  },
  {
    name: "WBB",
    logo: wbbLogo,
    advanced: "Semi-Final Grp C #1",
  },
  {
    name: "Manis Xtreme",
    logo: manisXtremeLogo,
    advanced: "Semi-Final Grp C #2",
  },
  {
    name: "XMM JayZ",
    logo: xmmJayzLogo,
    advanced: "Semi-Final Grp D #1",
  },
  {
    name: "PEA x SME Baruz",
    logo: PEAxSMEBaruzLogo,
    advanced: "Group Stage #1",
  },
  {
    name: "Shawn",
    logo: shawnLogo,
    advanced: "Group Stage #2",
  },
  {
    name: "Vermillion Esports",
    logo: vermillionesportsLogo,
    advanced: "Group Stage #3",
  },
  {
    name: "FTW Xtreme",
    logo: FTWXtremeLogo,
    advanced: "Group Stage #4",
  },
  {
    name: "WBB Reborn",
    logo: wbbRebornLogo,
    advanced: "Playoffs #1",
  },
  {
    name: "Hastalavista Esport",
    logo: hastalavistaEsportLogo,
    advanced: "Playoffs #2",
  },
];

export const sccs2Media: StaticImageData[] = [sccs2Banner];
