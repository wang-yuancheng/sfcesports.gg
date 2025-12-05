import tempstats from "@/assets/pictures/tempstats.webp";

// Banners
import atcBanner from "@/assets/pictures/atc.webp";
import sccs1Banner from "@/assets/pictures/sccs1.webp";
import sccs2Banner from "@/assets/pictures/sccs2.webp";
import tdmTourS4Banner from "@/assets/pictures/1v1s4.webp";

// Profiles
import shibeprofile from "@/assets/profiles/shibeprofile.jpg";
import saiprofile from "@/assets/profiles/saiprofile.jpg";
import piggieprofile from "@/assets/profiles/piggieprofile.jpg";
import grungeprofile from "@/assets/profiles/grungeprofile.jpg";
import shanshanprofile from "@/assets/profiles/shanshanprofile.jpeg";
import seventeenkprofile from "@/assets/profiles/17kprofile.jpg";
import rovinprofile from "@/assets/profiles/rovinprofile.webp";
import tronprofile from "@/assets/profiles/tronprofile.jpg";

export const boosters = [
  {
    id: 1,
    name: "Shibe",
    title: "Duo & Squad Conqueror Push", // TOP TITLE
    role: "Professional IGL & Scout", // HERO STATEMENT
    country: "SG",
    profile: shibeprofile,
    cover: tempstats,
    highlight: "9.8 K/D Ratio",
    subHighlight: "Mechanical God",
    rating: "5.0",
    jobs: 120,
    gallery: [atcBanner, sccs1Banner, sccs2Banner],
    description:
      "I specialize in high-tier rank pushing for Duo and Squad modes. With multiple regional championships under my belt, I know exactly how to rotate, when to take fights, and how to secure maximum placement points. If you are looking for a safe conqueror push with high KD, I am your best choice.",
  },
  {
    id: 2,
    name: "Sai",
    title: "Aggressive Rush Gameplay",
    role: "Entry Fragger & Coach",
    country: "CN",
    profile: saiprofile,
    cover: tempstats,
    highlight: "92% Win Rate",
    subHighlight: "Guaranteed Wins",
    rating: "4.9",
    jobs: 85,
    gallery: [sccs1Banner, tdmTourS4Banner],
    description:
      "Don't want to play boring survival games? I play aggressive entry. I will clear the path for you so you can loot and secure kills easily. Perfect for players who want to improve their fighting skills while ranking up.",
  },
  {
    id: 3,
    name: "Piggie",
    title: "Professional Sniper Support",
    role: "Tier 1 Scrim Player",
    country: "IN",
    profile: piggieprofile,
    cover: tempstats,
    highlight: "Scrim Pro",
    subHighlight: "Tier 1 Experience",
    rating: "4.8",
    jobs: 200,
    gallery: [sccs2Banner, atcBanner, tempstats],
    description:
      "With Tier 1 scrim experience, I provide the best cover fire in the game. I play sniper support, ensuring no enemy gets close to you without taking damage. Relax and enjoy the game while I watch your back.",
  },
  {
    id: 4,
    name: "Grunge",
    title: "1v1 TDM & CQC Training",
    role: "CQC Specialist",
    country: "BD",
    profile: grungeprofile,
    cover: tempstats,
    highlight: "1v1 Specialist",
    subHighlight: "Unbeatable CQC",
    rating: "4.9",
    jobs: 45,
    gallery: [tdmTourS4Banner, tempstats],
    description:
      "Specializing in Close Quarter Combat (CQC). If you lose your 1v1 fights often, hire me. I will not only boost your rank but I can also teach you movement mechanics and aim drills to improve your individual skill.",
  },
  {
    id: 5,
    name: "ShanShan",
    title: "Mic-On Duo Rank Push",
    role: "Tactical Scout",
    country: "KR",
    profile: shanshanprofile,
    cover: tempstats,
    highlight: "Girl Gamer",
    subHighlight: "Mic On & Chill",
    rating: "5.0",
    jobs: 32,
    gallery: [sccs2Banner, sccs1Banner],
    description:
      "Friendly and chill rank pushing. I always use a microphone and communicate clearly in English or Mandarin. No toxicity, just good vibes and steady points.",
  },
  {
    id: 6,
    name: "17k",
    title: "Global Top 100 Rank Push",
    role: "Global Conqueror #1",
    country: "TW",
    profile: seventeenkprofile,
    cover: tempstats,
    highlight: "Rank 1",
    subHighlight: "Global Conqueror",
    rating: "4.7",
    jobs: 150,
    gallery: [atcBanner, tempstats, sccs2Banner],
    description:
      "I have reached Global Conqueror #1 multiple times. I know the meta inside out. If you want the exclusive conqueror frame and title within the first week of the season, book me early.",
  },
  {
    id: 7,
    name: "Rovin",
    title: "Tactical IGL & Rotations",
    role: "IGL Coach",
    country: "IN",
    profile: rovinprofile,
    cover: tempstats,
    highlight: "Tactical IGL",
    subHighlight: "Smart Rotations",
    rating: "4.9",
    jobs: 90,
    gallery: [sccs1Banner, atcBanner],
    description:
      "Brain over brawn. I focus on smart rotations and positioning to ensure we win the game with high kills. Ideal for clients who want to learn map awareness and game sense.",
  },
  {
    id: 8,
    name: "Tron",
    title: "Entertainment & Rank Push",
    role: "Content Creator",
    country: "US",
    profile: tronprofile,
    cover: tempstats,
    highlight: "Vibe Carry",
    subHighlight: "Fun To Talk To",
    rating: "5.0",
    jobs: 12,
    gallery: [tdmTourS4Banner, sccs2Banner],
    description:
      "The ultimate vibe carry. I keep the mood high even during tough matches. Highly active communicator and entertainer. Let's make ranking up fun again.",
  },
];
