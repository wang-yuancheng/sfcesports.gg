import Image from "next/image";
import React from "react";

import shibeFanClubBanner from "@/assets/logos/shibefanclubbanner.png";
import youtubeIcon from "@/assets/icons/youtube.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";
import FooterDropdown from "@/components/navigation/FooterDropdown";

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

const about = [
  { label: "Our Story", href: "/about" },
  { label: "Brand Kit", href: "/brand" },
  { label: "Contact Us", href: "/contact" },
  { label: "Join Us", href: "/join" },
];
const activity = [
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/Shop" },
  { label: "Live Room", href: "/live" },
];
const termsAndPolicies = [
  { label: "All Terms and Policies", href: "/policies/all" },
];
const currency = [{ label: "$ SGD" }, { label: "₹ INR" }, { label: "RM MYR" }];
const copyright = `© 2021 - ${new Date().getFullYear()}, ShibeFanClub, All rights reserved`;

export default function Footer() {
  return (
    <div className="mx-4 xs:mx-8 sm:mx-0">
      {/* Mobile Footer  */}
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
        <FooterDropdown trigger="$ USD" dropdownContent={currency} />
        <FooterDropdown trigger="About" dropdownContent={about} />
        <FooterDropdown trigger="Activity" dropdownContent={activity} />
        <FooterDropdown
          trigger="Terms and Policies"
          dropdownContent={termsAndPolicies}
        />

        {/* social icons – mobile */}
        <div className="flex gap-2 flex-nowrap justify-between">
          {srcList.map(({ src, alt, href }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-100 hover:border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200"
            >
              <Image
                src={src}
                alt={alt}
                width={20}
                height={20}
                className="object-contain"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
      {/* End of Mobile Footer */}

      {/* Desktop Footer */}
      <div
        className="hidden sm:block mx-auto max-w-[1500px]
                pt-[48px]
                pb-[clamp(2rem,5vw,3rem)]
                px-[clamp(1rem,4vw,4rem)]
                relative border-t border-gray-100"
      >
        {/* Banner  */}
        <div className="mb-8 pb-8 w-full border-b border-gray-100">
          <div className="flex flex-col items-center navbarsm:items-start">
            <Image
              src={shibeFanClubBanner}
              alt="ShibeFanClub Banner"
              width={400}
              className="object-contain mb-[clamp(1rem,2vw,2rem)]"
              draggable={false}
            />

            <div className="font-[800] text-[20px]">
              PRESTIGE ESPORTS & GAMING ORGANIZATION
            </div>
            <div className="font-[500] text-base">
              Building communities to win high quality tournament and events
            </div>
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="flex gap-[clamp(1rem,9vw,10rem)]">
          {[
            { title: "About", items: about },
            { title: "Activity", items: activity },
            { title: "Terms and Policies", items: termsAndPolicies },
          ].map(({ title, items }) => (
            <div key={title} className="flex flex-col">
              <span className="font-[600] mb-2">{title}</span>
              {items.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="py-1 font-[500] text-gray-500 hover:text-pink-bright"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
          className="absolute
                  right-[clamp(1rem,4vw,4rem)]
                  bottom-[clamp(2.5rem,5vw,4rem)]
                  flex flex-col items-end"
        >
          {/* social icons row */}
          <div className="flex gap-2 flex-wrap justify-end">
            {srcList.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-100 hover:border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={20}
                  height={20}
                  className="object-contain"
                  draggable={false}
                />
              </a>
            ))}
          </div>
          {/* copyright */}
          <div className="text-[11px] mt-2">{copyright}</div>
        </div>
      </div>
      {/* End of Desktop Footer */}

      <div className="flex justify-center py-2 text-[11px] mb-3 sm:hidden">
        {copyright}
      </div>
    </div>
  );
}
