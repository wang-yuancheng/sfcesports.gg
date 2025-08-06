import Image from "next/image";
import React from "react";

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

const logoSize = "h-[clamp(24px,6vw,44px)] w-auto";

const about = [
  { label: "Our Story", href: "/about" },
  { label: "Brand Kit", href: "/brand" },
  { label: "Contact Us", href: "/contact" },
  { label: "Join Us", href: "/join" },
];
const activity = [
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Live Room", href: "/live" },
];
const termsAndPolicies = [
  { label: "All Terms and Policies", href: "/policies/all" },
];
const currency = [{ label: "$ SGD" }, { label: "₹ INR" }, { label: "RM MYR" }];
const copyright = `© 2021 - ${new Date().getFullYear()}, ShibeFanClub, All rights reserved`;

export default function Footer() {
  // mobile -> desktop breakpoint: sm 640px
  return (
    <>
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
      {/* End of Mobile Footer */}

      {/* Desktop Footer */}
      <div className="hidden sm:block w-full py-10 px-4 md:pb-16 md:px-10 lg:px-16 relative">
        {/* LEFT SIDE – link columns ------------------------------------------- */}
        <div className="flex gap-[clamp(1rem,9vw,10rem)]">
          {[
            { title: "About", items: about },
            { title: "Activity", items: activity },
            { title: "Terms", items: termsAndPolicies },
          ].map(({ title, items }) => (
            <div key={title} className="flex flex-col">
              <span className="font-semibold mb-2">{title}</span>
              {items.map(({ label, href }) => (
                <a key={label} href={href} className="py-1 hover:underline">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – absolutely positioned, no interaction with left -------- */}
        <div className="absolute right-4 md:right-10 lg:right-16 bottom-10 md:bottom-16 flex flex-col items-end">
          {/* social icons row */}
          <div className="flex gap-2 flex-wrap justify-end">
            {srcList.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border rounded-md hover:bg-gray-100 flex items-center justify-center"
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
    </>
  );
}
