import Image from "next/image";
import React from "react";

import youtubeIcon from "@/assets/icons/youtube.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";
import FooterDropdown from "@/components/navbar/FooterDropdown";

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
        
        {/* TODO: Change global state when currency is modified */}
        <FooterDropdown
          trigger="$ USD"
          dropdownContent={[
            { label: "$ SGD" },
            { label: "₹ INR" },
            { label: "RM MYR" },
          ]}
        />
        <FooterDropdown
          trigger="About"
          dropdownContent={[
            { label: "Our Story", href: "/about" },
            { label: "Brand Kit", href: "/brand" },
            { label: "Contact Us", href: "/contact" },
            { label: "Join Us", href: "/join" },
          ]}
        />
        <FooterDropdown
          trigger="Activity"
          dropdownContent={[
            { label: "Events", href: "/events" },
            { label: "Blog", href: "/blog" },
            { label: "Live Room", href: "/live" },
          ]}
        />
        <FooterDropdown
          trigger="Terms and Policies"
          dropdownContent={[
            { label: "All Terms and Policies", href: "/policies/all" },
          ]}
        />

        <div className=" flex justify-between items-center">
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
        {/* TODO */}
        Desktop Footer
      </div>
      <div className="flex justify-center py-2 text-[11px] mb-3">
        &copy; 2021 - 2026, ShibeFanClub, All rights reserved
      </div>
    </>
  );
}
