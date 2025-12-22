import gamecontrollericon from "@/assets/icons/gamecontroller.png";
import gameBackground from "@/assets/pictures/sfcbanner.webp";
import valorantIcon from "@/assets/icons/valoranticon.png";
import mlbbIcon from "@/assets/icons/mlbbicon.png";
import pubgmobileIcon from "@/assets/icons/pubgmobileicon.png";
import valorantBackground from "@/assets/pictures/teamcategories/valorantbackground.webp";
import valorantBanner from "@/assets/pictures/teamcategories/valorantbanner.webp";
import pubgmobileBackground from "@/assets/pictures/teamcategories/pubgmobilebackground.webp";
import pubgmobileBanner from "@/assets/pictures/teamcategories/pubgmobilebanner.webp";
import mlbbBackground from "@/assets/pictures/teamcategories/mlbbbackground.webp";
import mlbbBanner from "@/assets/pictures/teamcategories/mlbbbanner.webp";

import { GameCategories } from "@/lib/types";

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