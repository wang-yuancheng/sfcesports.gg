import Image from "next/image";
import React from "react";

import youtubeIcon from "@/assets/youtube-icon.webp";
import tiktokIcon from "@/assets/tiktok-icon.png";
import instagramIcon from "@/assets/instagram-icon.png";
import githubIcon from "@/assets/github-icon.png";
import discordIcon from "@/assets/discord-icon.png";

const srcList = [
  { src: youtubeIcon, alt: "YouTube Icon" },
  { src: tiktokIcon, alt: "TikTok Icon" },
  { src: instagramIcon, alt: "Instagram Icon" },
  { src: githubIcon, alt: "Github Icon" },
  { src: discordIcon, alt: "Discord Icon " },
];

const logoSize = "h-[clamp(24px,6vw,44px)] w-auto";

export default function Footer() {
  // mobile -> desktop breakpoint: sm 640px
  return (
    <>
      <div className="flex flex-col text-[16px] gap-3 sm:hidden">
        <div className="relative w-full h-[50px]">
          <Image
            src="/logo-black.svg"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="absolute translate-x-[-20%]"
          />
        </div>
        <div className="py-2">$USD</div>
        <div className="py-2">About</div>
        <div className="py-2">Shop</div>
        <div className="py-2">Terms and Policies</div>
        <div className="py-2 flex justify-between">
          {srcList.map(({ src, alt }, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              className={`${logoSize} flex-shrink-0 object-contain`}
              draggable={false}
            />
          ))}
        </div>
        <div className="py-2 text-[11px]">
          2021 - 2026, ShibeFanClub, All rights reserved
        </div>
      </div>

      <div className="hidden sm:flex flex-col text-[16px] gap-3">
        Desktop Footer
      </div>
    </>
  );
}
