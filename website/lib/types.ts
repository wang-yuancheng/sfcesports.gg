// lib/types.ts
import type { StaticImageData } from "next/image";
import type { BreakpointMap } from "@/lib/constants";

/* ---------------------------- Styling ---------------------------- */

// Tailwind CSS Custom Breakpoints
export type BreakpointName = keyof BreakpointMap;

// For current viewport size
export type MediaInput =
  | string
  | { min?: number; max?: number }
  | BreakpointName;

// To check if menu is open or close
export interface MenuSheetProps {
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
}

// To check if nav sidebar is open or close
export interface SidebarContextProps {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

/* ---------------------------- Global Components ---------------------------- */

// Header Images
export type PageHeaderImageProps = {
  mobileSrc?: string | StaticImageData;
  desktopSrc: string | StaticImageData;
  aspectRatio?: string; // Usage: "aspect-[780/780]"
};

/* ---------------------------- Navigation UI ---------------------------- */

// Shop button
export interface CartSheetProps {
  side?: SheetSide;
  description?: React.ReactNode;
  emptyMessage?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: React.ReactNode;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
}
type SheetSide = "top" | "bottom" | "left" | "right";

// To open or close footer
export interface FooterDropdownProps {
  trigger: string;
  dropdownContent: FooterDropdownItem[];
}
interface FooterDropdownItem {
  label: string;
  href?: string;
}

// To open or close Menu
export interface MenuDropdownProps {
  heading: string;
  items: MenuDropdownItem[];
  viewAllHref?: string;
  onItemClick?: () => void;
}
interface MenuDropdownItem {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  href: string;
}

/* ---------------------------- Home Page ---------------------------- */

// Short Hero Content
export interface ShortHeroContent {
  header: string;
  subheader: string;
  list?: ShortHeroContentListItem[];
  background: string | StaticImageData;
}
interface ShortHeroContentListItem {
  title: string;
  slug: string;
  logoSrc: string | StaticImageData;
}

// Long Hero Content
export interface LongHeroContent {
  header: string;
  subheader: string;
  matchLabel?: string;
  img: string | StaticImageData;
}

// Shop Hero Content
export interface ShopHeroContent {
  header: string;
  subheader: string;
  matchLabel?: string;
  grayImage: string | StaticImageData;
  colorImage: string | StaticImageData;
  variant: "big" | "small";
}

// Event Hero Content
export interface EventHeroContent {
  header: React.ReactNode;
  subheader: string;
  href: string;
  colorImage: string | StaticImageData;
}

// Youtube video component
export interface VideoItem {
  title: string;
  id: string;
  thumbnail: string | StaticImageData;
  views: string;
}

// Type for clicked video popup on homepage display
export interface VideoModalProps {
  open: boolean;
  title: string;
  videoId: string;
  onClose: () => void;
}

/* ---------------------------- Tournaments ---------------------------- */

export interface TournamentHighlight {
  title: string;
  slug: string;
  logoSrc: string | StaticImageData;
  details?: TournamentDetails;
}
export interface TournamentDetails {
  description?: string;
  date?: string;
  teams?: number;
  leaderboardRound: string;
  leaderboard: Leaderboard[];
  prizepool?: string;
}
export type Leaderboard = {
  place: number;
  name: string;
  logo: string | StaticImageData;
  wwcd: number;
  kp: number;
  pp: number;
  tp: number;
  prize: number | string;
};

export type ATCLeaderboard = {
  name: string;
  logo: string | StaticImageData;
  advanced: string;
};

/* ---------------------------- Teams Page ---------------------------- */

// To list all game categories
export interface GameCategories {
  label: string;
  value: string;
  iconSrc: string | StaticImageData;
  backgroundSrc: string | StaticImageData;
  bannerSrc?: string | StaticImageData;
}

// To calculate stats for each team
export interface GameStatsTotals {
  total: number;
  first: number;
  second: number;
  third: number;
}

// Team component
export interface Team {
  id: number;
  slug: string;
  name: string;
  game: string;
  logo: string | StaticImageData;
  banner: string | StaticImageData;
  legacy: boolean;
  gamesPlayed: number;
  first: number;
  second: number;
  third: number;
  earnings?: number;
  players: Player[];
  description?: string;
}
export interface Player {
  name: string;
  country: string;
  profile: string | StaticImageData;
  role: string;
  active: string;
  earnings: number;
  device: string;
}

/* ---------------------------- Events Page ---------------------------- */

// To list all events in Events page
export interface Standing {
  place: number;
  name: string;
}
export interface Event {
  description?: string;
  participants?: number;
  standings?: Standing[];
  prizepool?: string;
}
export interface Events {
  name: string;
  duration: string;
  slug: string;
  details: Event[];
}
export type EventsByYear = Record<number, Events[]>;
