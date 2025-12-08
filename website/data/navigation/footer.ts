import youtubeIcon from "@/assets/icons/youtube.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";

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
  { label: "Our Teams", href: "/teams" },
  { label: "Our Events", href: "/events" },
];
export const footerActivity = [
  { label: "Media", href: "/media" },
  { label: "Shop", href: "/shop" },
];
export const termsAndPolicies = [
  { label: "All Terms and Policies", href: "/policies" },
];
export const currency = [
  { label: "$ SGD" },
  { label: "₹ INR" },
  { label: "RM MYR" },
];
export const copyright = `© 2021 - ${new Date().getFullYear()}, ShibeFanClub, All rights reserved`;
