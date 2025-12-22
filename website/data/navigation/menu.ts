import shibeLogoColor from "@/assets/icons/shibe-color.webp";
import shibeINTeamLogo from "@/assets/logos/sfc/shibe-in.webp";
import shibe17kTeamLogo from "@/assets/logos/sfc/shibe-17k.webp";

export const navItems = [
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
];

export const navTeams = [
  {
    imageSrc: shibeLogoColor,
    title: "SFC",
    description: "Asia Regional Champion",
    href: "/teams/sfc",
  },
  {
    imageSrc: shibe17kTeamLogo,
    title: "SFC 17k",
    description: "Regional #7: Taiwan HK Macau",
    href: "/teams/sfc-17k",
  },
  {
    imageSrc: shibeINTeamLogo,
    title: "SFC India",
    description: "#2 Asia Regional, 5x Finalist",
    href: "/teams/sfc-in",
  },
];
