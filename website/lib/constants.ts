import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import gamecontrollericon from "@/assets/icons/gamecontroller.png";
import gameBackground from "@/assets/pictures/sfcbanner.png";
import valorantIcon from "@/assets/icons/valoranticon.png";
import valorantBackground from "@/assets/pictures/valorantbackground.webp";
import valorantBanner from "@/assets/pictures/valorantbanner.webp";
import pubgmobileIcon from "@/assets/icons/pubgmobileicon.png";
import pubgmobileBackground from "@/assets/pictures/pubgmobilebackground.jpg";
import pubgmobileBanner from "@/assets/pictures/pubgmobilebanner.webp";
import mlbbIcon from "@/assets/icons/mlbbicon.png";
import mlbbBackground from "@/assets/pictures/mlbbbackground.webp";
import mlbbBanner from "@/assets/pictures/mlbbbanner.webp";
import { GameCategories, Team, VideoItem } from "@/lib/types";
import shibeIcon from "@/assets/icons/shibe-black.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import worldGunslingerThumbnail from "@/assets/pictures/worldgunslinger.jpg";
import atcs17Thumbnail from "@/assets/pictures/atcs17thumbnail.jpg";
import gamelingThumbnail from "@/assets/pictures/gamelingthumbnail.jpg";
import ultimateRoyaleThumbnail from "@/assets/pictures/ultimateroyalerank1thumbnail.jpg";
import Logo from "@/assets/icons/shibe-pinkbright.svg";
import royalEsportsLogo from "@/assets/logos/royalesports.png";
import kohaiCupLogo from "@/assets/logos/kohaicup.png";
import gamelingLogo from "@/assets/logos/gameling.png";
import kodLogo from "@/assets/logos/kod.png";
import nyzLogo from "@/assets/logos/nyz.png";
import thmLogo from "@/assets/logos/thm.png";
import dlyLogo from "@/assets/logos/dly.png";
import xbossLogo from "@/assets/logos/xboss.png";
import novaLogo from "@/assets/logos/nova.webp";

/* ---------------------------- Styling ---------------------------- */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  navbarsm: 1100,
  navbarlg: 1350,
  "2xl": 1536,
} as const;

/* ---------------------------- Home Page ---------------------------- */

export const videos: VideoItem[] = [
  {
    title: "How it sounds to win All Talent Championship S17 Finals",
    id: "1uxjAOrkPY8",
    thumbnail: atcs17Thumbnail,
    views: "",
  },
  {
    title: "I finally got World #1 Gunslinger Title",
    id: "ZBEqe8cXbPE",
    thumbnail: worldGunslingerThumbnail,
    views: "",
  },
  {
    title: "We won a regional Tier 1 Grand Final Tournament in PUBG Mobile",
    id: "dDMKyoMDb-s",
    thumbnail: gamelingThumbnail,
    views: "",
  },
  {
    title: "Reaching Rank 1 in Ultimate Royale PUBG Mobile",
    id: "wOp_EQdEpx4",
    thumbnail: ultimateRoyaleThumbnail,
    views: "",
  },
];

export const highlightsList = [
  { title: "Royal Esports Tournament", href: "#", logoSrc: royalEsportsLogo },
  { title: "NYZ Mini Tournament", href: "#", logoSrc: nyzLogo },
  { title: "DLY Mini Tournament", href: "#", logoSrc: dlyLogo },
  { title: "SFCxNova Community Tournament", href: "#", logoSrc: novaLogo },
  { title: "KOD Showdown 2024", href: "#", logoSrc: kodLogo },
  { title: "Kohai Cup 2024", href: "#", logoSrc: kohaiCupLogo },
  { title: "Gameling Gauntlet", href: "#", logoSrc: gamelingLogo },
  { title: "Shibe's Community Cup", href: "#", logoSrc: Logo },
  { title: "THM Challenge Cup 2023", href: "#", logoSrc: thmLogo },
  { title: "Xboss Tournament", href: "#", logoSrc: xbossLogo },
];
/* ---------------------------- Teams Page ---------------------------- */

export const gameCategories: GameCategories[] = [
  {
    label: "All Games",
    value: "all",
    iconSrc: gamecontrollericon,
    backgroundSrc: gameBackground,
  },
  {
    label: "PUBG Mobile",
    value: "pubg-mobile",
    iconSrc: pubgmobileIcon,
    backgroundSrc: pubgmobileBackground,
    bannerSrc: pubgmobileBanner,
  },
  {
    label: "Mobile Legends",
    value: "mobile-legends",
    iconSrc: mlbbIcon,
    backgroundSrc: mlbbBackground,
    bannerSrc: mlbbBanner,
  },
  {
    label: "Valorant Mobile",
    value: "valorant-mobile",
    iconSrc: valorantIcon,
    backgroundSrc: valorantBackground,
    bannerSrc: valorantBanner,
  },
];

export const teams: Team[] = [
  {
    id: 1,
    name: "SFC 女队",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 22,
    first: 3,
    second: 4,
    third: 5,
  },
  {
    id: 2,
    name: "SFC 男队",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 18,
    first: 2,
    second: 3,
    third: 2,
  },
  {
    id: 3,
    name: "SFC Taiwan",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 15,
    first: 1,
    second: 2,
    third: 3,
  },
  {
    id: 4,
    name: "SFC India",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 20,
    first: 2,
    second: 2,
    third: 3,
  },
  {
    id: 5,
    name: "SFC Tron",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 14,
    first: 1,
    second: 1,
    third: 1,
  },
  {
    id: 6,
    name: "SFC Heirs",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 9,
    first: 0,
    second: 1,
    third: 1,
  },
  {
    id: 7,
    name: "SFC OCE",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 12,
    first: 1,
    second: 1,
    third: 1,
  },
  {
    id: 8,
    name: "SFC Maldives",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 8,
    first: 0,
    second: 1,
    third: 1,
  },
  {
    id: 9,
    name: "SFC Rex",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 10,
    first: 1,
    second: 0,
    third: 1,
  },
  {
    id: 10,
    name: "SFC V",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 7,
    first: 0,
    second: 1,
    third: 0,
  },
  {
    id: 11,
    name: "SFC Valence",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 11,
    first: 1,
    second: 1,
    third: 1,
  },
  {
    id: 12,
    name: "SFC Nemesis",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 10,
    first: 1,
    second: 2,
    third: 0,
  },
  {
    id: 13,
    name: "SFC Academy",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
    gamesPlayed: 6,
    first: 0,
    second: 1,
    third: 0,
  },
  {
    id: 14,
    name: "SFC PH",
    game: "mobile-legends",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 16,
    first: 3,
    second: 2,
    third: 1,
  },
  {
    id: 15,
    name: "SFC SG",
    game: "valorant-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 12,
    first: 2,
    second: 1,
    third: 1,
  },
  {
    id: 16,
    name: "SFC X",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
    gamesPlayed: 13,
    first: 2,
    second: 2,
    third: 1,
  },
];

/* ---------------------------- Navigation Menu ---------------------------- */

export const navItems = [
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
];

export const navTeams = [
  {
    imageSrc: shibeIcon,
    title: "SFC 女队",
    description: "Asia Regional Champion",
    href: "/teams/team1",
  },
  {
    imageSrc: shibeIcon,
    title: "SFC Taiwan",
    description: "Regional #7: Taiwan HK Macau",
    href: "/teams/team2",
  },
  {
    imageSrc: shibeIcon,
    title: "SFC India",
    description: "#2 Asia Regional, 5x Finalist",
    href: "/teams/team3",
  },
];

/* ---------------------------- Footer ---------------------------- */

export const footerSocialsList = [
  {
    src: youtubeIcon,
    alt: "YouTube Icon",
    href: "https://www.youtube.com/@shibepubg",
  },
  {
    src: tiktokIcon,
    alt: "TikTok Icon",
    href: "https://www.tiktok.com/@shibepubg",
  },
  {
    src: instagramIcon,
    alt: "Instagram Icon",
    href: "https://www.instagram.com/shibepubg/",
  },
  {
    src: githubIcon,
    alt: "Github Icon",
    href: "https://github.com/wang-yuancheng",
  },
  {
    src: discordIcon,
    alt: "Discord Icon",
    href: "https://discord.com/invite/2Sby35W",
  },
  {
    src: linkedinIcon,
    alt: "LinkedIn Icon",
    href: "https://www.linkedin.com/company/shibefanclub/",
  },
];

export const footerAbout = [
  { label: "Our Story", href: "/about" },
  { label: "Brand Kit", href: "/brand" },
  { label: "Contact Us", href: "/contact" },
];
export const footerActivity = [
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/Shop" },
];
export const termsAndPolicies = [
  { label: "All Terms and Policies", href: "/policies/all" },
];
export const currency = [
  { label: "$ SGD" },
  { label: "₹ INR" },
  { label: "RM MYR" },
];
export const copyright = `© 2021 - ${new Date().getFullYear()}, ShibeFanClub, All rights reserved`;
