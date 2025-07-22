import Image from "next/image";
import React from "react";

import youtubeIcon from "@/assets/logos/youtube.svg";
import tiktokIcon from "@/assets/logos/tiktok.svg";
import instagramIcon from "@/assets/logos/instagram.svg";
import githubIcon from "@/assets/logos/github.svg";
import discordIcon from "@/assets/logos/discord.svg";
import linkedinIcon from "@/assets/logos/linkedin.svg";
import shibeLogoBlack from "@/assets/logos/shibe-black.svg";

const srcList = [
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

const logoSize = "h-[clamp(24px,6vw,44px)] w-auto";

export default function Footer() {
  // mobile -> desktop breakpoint: sm 640px
  return (
    <>
      <div className="flex flex-col text-[16px] gap-3 sm:hidden">
        <div className="relative w-full h-[50px]">
          <Image
            src={shibeLogoBlack}
            alt="Shibe Logo"
            width={50}
            height={50}
            draggable={false}
            className="absolute translate-x-[-20%]"
          />
        </div>
        <div className="py-2">$ USD</div>
        <div className="py-2">About</div>
        <div className="py-2">Shop</div>
        <div className="py-2">Terms and Policies</div>
        <div className="py-2 flex justify-between">
          {srcList.map(({ src, alt, href }, i) => (
            <a
              key={i}
              href={href}
              className="relative rounded-md p-2 hover:bg-gray-100 inline-block cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                key={i}
                src={src}
                alt={alt}
                width={22}
                height={22}
                draggable={false}
                className={`${logoSize} flex-shrink-0 object-contain min-w-[22px]`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex flex-col text-[16px] gap-3">
        Desktop Footer
      </div>
      <div className="flex justify-center py-2 text-[11px] mb-3">
        &copy; 2021 - 2026, ShibeFanClub, All rights reserved
      </div>
    </>
  );
}
