// Shibe Logos
import shibeLogoColor from "@/assets/icons/shibe-color.webp";
import shibeLogoPink from "@/assets/icons/shibe-pinkbright.svg";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";

// Footer
import youtubeIcon from "@/assets/icons/youtube.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";

// Videos
import worldgunslingerThumbnail from "@/assets/pictures/worldgunslinger.jpg";
import atcs17Thumbnail from "@/assets/pictures/atcs17thumbnail.jpg";
import gamelingThumbnail from "@/assets/pictures/gamelingthumbnail.jpg";
import ultimateRoyaleThumbnail from "@/assets/pictures/ultimateroyalerank1thumbnail.jpg";

// Highlights
import royalEsportsLogo from "@/assets/logos/royalesports.png";
import kohaiCupLogo from "@/assets/logos/kohaicup.png";
import gamelingLogo from "@/assets/logos/gameling.png";
import kodLogo from "@/assets/logos/kod.png";
import nyzLogo from "@/assets/logos/nyz.png";
import thmLogo from "@/assets/logos/thm.png";
import dlyLogo from "@/assets/logos/dly.png";
import xbossLogo from "@/assets/logos/xboss.png";
import novaLogo from "@/assets/logos/nova.webp";

// Team Logos
import shibeBoysTeamLogo from "@/assets/logos/shibe-boys.png";
import shibeGirlsTeamLogo from "@/assets/logos/shibe-girls.png";
import shibeHKTeamLogo from "@/assets/logos/shibe-hk.png";
import shibeINTeamLogo from "@/assets/logos/shibe-in.png";
import shibeTronfireTeamLogo from "@/assets/logos/shibe-tronfire.png";
import shibeTWTeamLogo from "@/assets/logos/shibe-tw.png";
import shibeFallenAngelsTeamLogo from "@/assets/logos/shibe-fa.png";
import shibeMLTeamLogo from "@/assets/logos/shibe-ml.png";
import shibeVMTeamLogo from "@/assets/logos/shibe-vm.png";

// Others
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

// Types
import { GameCategories, Team, VideoItem } from "@/lib/types";

// Test
import test from "@/assets/pictures/abstract.jpg";
import testprofile from "@/assets/profiles/testprofile.jpg";

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
    thumbnail: worldgunslingerThumbnail,
    views: "",
  },
  {
    title: "Reaching Rank 1 in Ultimate Royale PUBG Mobile",
    id: "wOp_EQdEpx4",
    thumbnail: ultimateRoyaleThumbnail,
    views: "",
  },
  {
    title: "We won a regional Tier 1 Grand Final Tournament in PUBG Mobile",
    id: "dDMKyoMDb-s",
    thumbnail: gamelingThumbnail,
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
  { title: "Shibe's Community Cup", href: "#", logoSrc: shibeLogoPink },
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
    slug: "sfc",
    name: "SFC",
    game: "pubg-mobile",
    logo: shibeLogoColor,
    banner: test,
    legacy: false,
    gamesPlayed: 214,
    first: 14,
    second: 20,
    third: 21,
    earnings: 180,
    players: [
      { name: "Shibe", country: "SG", profile: testprofile, role: "IGL / Scout", active:"2022 - Present", earnings: 800, device:"iPad Pro 11\" M2" },
      { name: "Sai", country: "CN", profile: testprofile, role: "Entry", active:"2023 - Present", earnings: 730, device:"iPhone 12 Pro" },
      { name: "Piggie", country: "IN", profile: testprofile, role: "Entry", active:"2022 - Present", earnings: 700, device:"iPad Pro 11\" M1" },
      { name: "Grunge", country: "BD", profile: testprofile, role: "Support", active:"2023 - Present", earnings: 500, device:"iPad Pro 11\" M2" },
    ],
    description:
      "Creators are Fnatic's top tier talent. They are our storytellers, our heavy hitting talent who are brands in themselves and the aspiring faces of the gaming industry.",
  },
  {
    id: 2,
    slug: "sfc-girls",
    name: "SFC 女队",
    game: "pubg-mobile",
    logo: shibeGirlsTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 68,
    first: 3,
    second: 4,
    third: 3,
    earnings: 220,
    players: [
      { name: "姗姗", country: "KR", profile: testprofile, role: "IGL / Scout", active:"2023 - Present", earnings: 140, device:"iPad Pro 11\" M2" },
      { name: "婷婷", country: "CN", profile: testprofile, role: "Entry", active:"2023 - Present", earnings: 160, device:"iPad Pro 11\" M1" },
      { name: "姐姐", country: "CN", profile: testprofile, role: "Roamer", active:"2023 - Present", earnings: 120, device:"iPhone 16 Pro" },
      { name: "妹妹", country: "SG", profile: testprofile, role: "Support", active:"2023 - Present", earnings: 135, device:"iPad Pro 11\" M2" },
    ],
  },
  {
    id: 3,
    slug: "sfc-boys",
    name: "SFC 男队",
    game: "pubg-mobile",
    logo: shibeBoysTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 40,
    first: 2,
    second: 2,
    third: 4,
    earnings: 260,
    players: [
      { name: "Cookie", country: "JP", profile: testprofile, role: "IGL", active:"2023 - Present", earnings: 160, device:"iPad Pro 11\" M2" },
      { name: "Mango", country: "CN", profile: testprofile, role: "Entry / Scout", active:"2023 - Present", earnings: 120, device:"iPhone 15 Pro" },
      { name: "Origami", country: "JP", profile: testprofile, role: "Entry", active:"2023 - Present", earnings: 140, device:"iPhone 13 Pro Max" },
      { name: "LittleBabyCow", country: "HK", profile: testprofile, role: "Support", active:"2023 - Present", earnings: 110, device:"iPad Pro 11\" M2" },
    ],
  },
  {
    id: 4,
    slug: "sfc-fallen-angels",
    name: "SFC Fallen Angels",
    game: "pubg-mobile",
    logo: shibeFallenAngelsTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 38,
    first: 2,
    second: 3,
    third: 2,
    earnings: 300,
    players: [
      { name: "Vander", country: "MY", profile: testprofile, role: "IGL", active:"2022 - Present", earnings: 130, device:"iPad Pro 11\" M2" },
      { name: "Senpai", country: "MY", profile: testprofile, role: "Support", active:"2022 - Present", earnings: 180, device:"iPhone 15 Pro Max" },
      { name: "Nish", country: "MY", profile: testprofile, role: "Entry", active:"2022 - Present", earnings: 120, device:"iPhone 16 Pro" },
      { name: "Rasor", country: "SG", profile: testprofile, role: "Scout", active:"2022 - Present", earnings: 150, device:"iPhone 17 Pro Max" },
    ],
  },
  {
    id: 5,
    slug: "sfc-17k",
    name: "SFC 17K",
    game: "pubg-mobile",
    logo: shibeTWTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 59,
    first: 5,
    second: 3,
    third: 3,
    earnings: 330,
    players: [
      { name: "17k", country: "TW", profile: testprofile, role: "IGL", active:"2022 - Present", earnings: 400, device:"REDMAGIC 8S Pro" },
      { name: "Tesla", country: "TW", profile: testprofile, role: "Entry", active:"2022 - Present", earnings: 400, device:"iPhone 15 Pro Max" },
      { name: "TPE", country: "TW", profile: testprofile, role: "Support", active:"2022 - Present", earnings: 400, device:"iPhone 13 Pro Max" },
      { name: "xiaotian", country: "TW", profile: testprofile, role: "Scout", active:"2022 - Present", earnings: 400, device:"iPhone 15 Pro" },
    ],
  },
  {
    id: 6,
    slug: "sfc-hk",
    name: "SFC HK",
    game: "pubg-mobile",
    logo: shibeHKTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 23,
    first: 1,
    second: 2,
    third: 3,
    earnings: 350,
    players: [
      { name: "虾米", country: "HK", profile: testprofile, role: "IGL", active:"2021 - Present", earnings: 130, device:"iPhone 17 Pro Max" },
      { name: "离别", country: "HK", profile: testprofile, role: "Roamer", active:"2021 - Present", earnings: 110, device:"iPhone 15 Pro" },
      { name: "Bite", country: "HK", profile: testprofile, role: "Entry", active:"2022 - Present", earnings: 100, device:"iPad Pro 11\" M4" },
      { name: "Lemons", country: "HK", profile: testprofile, role: "Support", active:"2021 - Present", earnings: 120, device:"iPad Pro 11\" M1" },
    ],
  },
  {
    id: 7,
    slug: "sfc-in",
    name: "SFC India",
    game: "pubg-mobile",
    logo: shibeINTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 39,
    first: 3,
    second: 4,
    third: 2,
    earnings: 370,
    players: [
      { name: "Honey", country: "IN", profile: testprofile, role: "IGL / Entry", active:"2023 - Present", earnings: 160, device:"iPad Pro 11\" M4" },
      { name: "Yansh", country: "IN", profile: testprofile, role: "Entry", active:"2023 - Present", earnings: 120, device:"iPad Pro 11\" M4" },
      { name: "BeowTheDoggie ", country: "IN", profile: testprofile, role: "Scout", active:"2022 - Present", earnings: 140, device:"iPhone 15 Pro" },
      { name: "Meboy", country: "VN", profile: testprofile, role: "Support", active:"2022 - Present", earnings: 115, device:"iPhone 13 Pro" },
    ],
  },
  {
    id: 8,
    slug: "sfc-tronfire",
    name: "SFC Tronfire",
    game: "pubg-mobile",
    logo: shibeTronfireTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 35,
    first: 3,
    second: 2,
    third: 1,
    earnings: 350,
    players: [
      { name: "Tron", country: "US", profile: testprofile, role: "IGL / Support", active:"2023 - Present", earnings: 180, device:"iPad Pro 11\" M4" },
      { name: "Nate", country: "US", profile: testprofile, role: "Entry", active:"2023 - Present", earnings: 130, device:"iPad Pro 11\" M2" },
      { name: "Fis", country: "US", profile: testprofile, role: "Support", active:"2023 - Present", earnings: 120, device:"iPhone 16 Pro" },
      { name: "Unify", country: "CA", profile: testprofile, role: "Scout", active:"2023 - Present", earnings: 110, device:"iPad Pro 11\" M2" },
    ],
  },
  {
    id: 9,
    slug: "sfc-heirs",
    name: "SFC Heirs",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 40,
    first: 4,
    second: 3,
    third: 3,
    earnings: 350,
    players: [
      { name: "FlowerC", country: "AU", profile: testprofile, role: "IGL", active:"2022 - 2022", earnings: 105, device:"iPhone 12 Pro Max" },
      { name: "Arcane", country: "MY", profile: testprofile, role: "Scout", active:"2021 - 2022", earnings: 150, device:"iPhone 13" },
      { name: "Wd", country: "MY", profile: testprofile, role: "Entry", active:"2021 - 2022", earnings: 120, device:"iPhone 13 Pro Max" },
      { name: "Toxic", country: "MY", profile: testprofile, role: "Support", active:"2022 - 2022", earnings: 110, device:"iPhone 13 Pro" },
    ],
  },
  {
    id: 10,
    slug: "sfc-mv",
    name: "SFC Maldives",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 14,
    first: 2,
    second: 1,
    third: 2,
    earnings: 300,
    players: [
      { name: "Atom", country: "MV", profile: testprofile, role: "IGL", active:"2024 - 2024", earnings: 120, device:"iPad Pro 11\" M2" },
      { name: "Niyaf", country: "MV", profile: testprofile, role: "Entry", active:"2024 - 2024", earnings: 110, device:"iPhone 13 Pro" },
      { name: "Sync", country: "SG", profile: testprofile, role: "Support", active:"2024 - 2024", earnings: 90, device:"iPhone 15 Pro Max" },
      { name: "Jo", country: "SG", profile: testprofile, role: "Scout", active:"2024 - 2024", earnings: 95, device:"iPhone 15 Pro Max" },
    ],
  },
  {
    id: 11,
    slug: "sfc-rex",
    name: "SFC Rex",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 15,
    first: 1,
    second: 0,
    third: 1,
    earnings: 280,
    players: [
      { name: "Rexy", country: "MY", profile: testprofile, role: "IGL", active:"2023 - 2024", earnings: 130, device:"iPad Pro 11\" M1" },
      { name: "Blazeey", country: "IN", profile: testprofile, role: "Entry", active:"2023 - 2024", earnings: 85, device:"iPhone 11 Pro Max" },
      { name: "채원", country: "MY", profile: testprofile, role: "Support", active:"2023 - 2024", earnings: 90, device:"iPhone 12" },
      { name: "Lurze", country: "MY", profile: testprofile, role: "Scout", active:"2023 - 2024", earnings: 80, device:"iPad Pro 11\" M1" },
    ],
  },
  {
    id: 12,
    slug: "sfc-v",
    name: "SFC V",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 20,
    first: 2,
    second: 1,
    third: 5,
    earnings: 310,
    players: [
      { name: "Suki", country: "MY", profile: testprofile, role: "IGL", active:"2022 - 2024", earnings: 140, device:"iPad Pro 11\" M1" },
      { name: "Chris", country: "MY", profile: testprofile, role: "Roamer", active:"2022 - 2024", earnings: 100, device:"iPad Pro 11\" M1" },
      { name: "KongQi", country: "MY", profile: testprofile, role: "Support", active:"2023 - 2024", earnings: 85, device:"iPhone 14 Pro"},
      { name: "Adrian", country: "MY", profile: testprofile, role: "Entry", active:"2022 - 2024", earnings: 95, device:"ASUS ROG Phone 5" },
    ],
  },
  {
    id: 13,
    slug: "sfc-valance",
    name: "SFC Valence",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 23,
    first: 1,
    second: 3,
    third: 2,
    earnings: 340,
    players: [
      { name: "Cryo", country: "MY", profile: testprofile, role: "IGL", active:"2021 - 2022", earnings: 100, device:"iPad Pro 11\" M1" },
      { name: "Zexrow", country: "MY", profile: testprofile, role: "Scout", active:"2021 - 2022", earnings: 130, device:"iPad Pro 11\" M1" },
      { name: "Grimz", country: "MY", profile: testprofile, role: "Support", active:"2021 - 2022", earnings: 95, device:"iPhone 12 Pro" },
      { name: "Price", country: "MY", profile: testprofile, role: "Entry", active:"2021 - 2022", earnings: 90, device:"iPad Pro 11\" M1" },
    ],
  },
  {
    id: 14,
    slug: "sfc-academy",
    name: "SFC Academy",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 15,
    first: 2,
    second: 1,
    third: 1,
    earnings: 200,
    players: [
      { name: "HanzoOzu", country: "MY", profile: testprofile, role: "IGL / Entry", active:"2021 - 2021", earnings: 90, device:"iPad Pro 11\" M1" },
      { name: "Legend", country: "MY", profile: testprofile, role: "Support", active:"2022 - 2021", earnings: 70, device:"iPad Pro 13\" M1" },
      { name: "Xel", country: "MY", profile: testprofile, role: "Scout", active:"2021 - 2021", earnings: 60, device:"Samsung Galaxy S21" },
      { name: "T8MX", country: "MY", profile: testprofile, role: "Roamer", active:"2021 - 2021", earnings: 65, device:"iPhone 12 Pro" },
    ],
  },
  {
    id: 15,
    slug: "sfc-nemesis",
    name: "SFC Nemesis",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 15,
    first: 1,
    second: 1,
    third: 1,
    earnings: 190,
    players: [
      { name: "Shark", country: "MY", profile: testprofile, role: "IGL", active:"2021 - 2021", earnings: 85, device:"Xiaomi Black Shark 4" },
      { name: "Icy", country: "MY", profile: testprofile, role: "Entry", active:"2021 - 2021", earnings: 70, device:"iPad Pro 11\" M1" },
      { name: "Valor", country: "MY", profile: testprofile, role: "Support", active:"2021 - 2021", earnings: 60, device:"OnePlus 9 Pro" },
      { name: "RayRay", country: "MY", profile: testprofile, role: "Roamer", active:"2021 - 2021", earnings: 55, device:"iPhone 12 Pro" },
    ],
  },
  {
    id: 16,
    slug: "sfc-esports",
    name: "SFC Esports",
    game: "pubg-mobile",
    logo: shibeLogoPink,
    banner: test,
    legacy: true,
    gamesPlayed: 34,
    first: 3,
    second: 2,
    third: 1,
    earnings: 100,
    players: [
      { name: "Shibe", country: "SG", profile: testprofile, role: "IGL / Scout", active:"2021 - 2021", earnings: 200, device:"RED MAGIC 5s" },
      { name: "Renji", country: "MY", profile: testprofile, role: "Entry / Support", active:"2021 - 2021", earnings: 200, device:"iPhone 12 Pro Max" },
      { name: "Carlo", country: "HK", profile: testprofile, role: "Entry", active:"2021 - 2021", earnings: 60, device:"iPad Pro 11\" M1" },
      { name: "Raptor", country: "MY", profile: testprofile, role: "Support", active:"2021 - 2021", earnings: 70, device:"OnePlus 8 Pro" },
    ],
  },
  {
    id: 17,
    slug: "sfc-ml",
    name: "SFC ML",
    game: "mobile-legends",
    logo: shibeMLTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 34,
    first: 2,
    second: 1,
    third: 3,
    earnings: 300,
    players: [
      { name: "Shibe", country: "SG", profile: testprofile, role: "Marksman", active:"2022 - Present", earnings:100, device:"iPad Pro 11\" M2" },
      { name: "Zietra", country: "PH", profile: testprofile, role: "Fighter", active:"2022 - Present", earnings:100, device:"iPad Pro 11\" M2" },
      { name: "Enzhu", country: "SG", profile: testprofile, role: "Mage", active:"2022 - Present", earnings:100, device:"iPhone 16 Pro" },
      { name: "Arcane", country: "MY", profile: testprofile, role: "Jungle", active:"2022 - Present", earnings:100, device:"iPhone 13" },
      { name: "Josh", country: "MY", profile: testprofile, role: "Tank", active:"2022 - Present", earnings:100, device:"iPhone 13" },
    ],
  },
  {
    id: 18,
    slug: "sfc-vm",
    name: "SFC VM",
    game: "valorant-mobile",
    logo: shibeVMTeamLogo,
    banner: test,
    legacy: false,
    gamesPlayed: 4,
    first: 0,
    second: 1,
    third: 0,
    earnings: 350,
    players: [
      { name: "Shibe", country: "SG", profile: testprofile, role: "Controller", active:"2025 - Present", earnings:0, device:"iPad Pro 11\" M2" },
      { name: "Tron", country: "US", profile: testprofile, role: "Duelist", active:"2025 - Present", earnings:0, device:"iPad Pro 11\" M4" },
      { name: "Piggie", country: "IN", profile: testprofile, role: "Duelist", active:"2025 - Present", earnings:0, device:"iPad Pro 11\" M1" },
      { name: "Zietra", country: "PH", profile: testprofile, role: "Initiator", active:"2025 - Present", earnings:0, device:"iPad Pro 11\" M2" },
      { name: "Meboy", country: "VN", profile: testprofile, role: "Sentinel", active:"2025 - Present", earnings:0, device:"iPhone 13 Pro" },
    ],
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
    imageSrc: shibeLogoBlack,
    title: "SFC 女队",
    description: "Asia Regional Champion",
    href: "/teams/sfc-girls",
  },
  {
    imageSrc: shibeLogoBlack,
    title: "SFC 17k",
    description: "Regional #7: Taiwan HK Macau",
    href: "/teams/sfc-17k",
  },
  {
    imageSrc: shibeLogoBlack,
    title: "SFC India",
    description: "#2 Asia Regional, 5x Finalist",
    href: "/teams/sfc-in",
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
