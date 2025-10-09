import { StaticImageData } from "next/image";
import { BREAKPOINTS } from "@/lib/constants";

/* ---------------------------- Styling ---------------------------- */

// Tailwind CSS Custom Breakpoints
export type BreakpointName = keyof typeof BREAKPOINTS;

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
  mobileSrc?: StaticImageData;
  desktopSrc: StaticImageData;
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
  background: StaticImageData;
}
interface ShortHeroContentListItem {
  title: string;
  slug: string;
  logoSrc: StaticImageData;
}

// Long Hero Content
export interface LongHeroContent {
  header: string;
  subheader: string;
  matchLabel?: string;
  img: StaticImageData;
}

// Shop Hero Content
export interface ShopHeroContent {
  header: string;
  subheader: string;
  matchLabel?: string;
  grayImage: StaticImageData;
  colorImage: StaticImageData;
  variant: "big" | "small";
}

// Event Hero Content
export interface EventHeroContent {
  header: React.ReactNode;
  subheader: string;
  href: string;
  colorImage: StaticImageData;
}

// Youtube video component
export interface VideoItem {
  title: string;
  id: string;
  thumbnail: StaticImageData;
  views: string;
}

// Type for clicked video popup on homepage display
export interface VideoModalProps {
  open: boolean;
  title: string;
  videoId: string;
  onClose: () => void;
}

/* ---------------------------- Teams Page ---------------------------- */

// To list all game categories
export interface GameCategories {
  label: string;
  value: string;
  iconSrc: StaticImageData;
  backgroundSrc: StaticImageData;
  bannerSrc?: StaticImageData;
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
  logo: StaticImageData;
  banner: StaticImageData;
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
  profile: StaticImageData;
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
