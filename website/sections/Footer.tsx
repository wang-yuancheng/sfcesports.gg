import Image from "next/image";
import React from "react";

import shibeFanClubBanner from "@/assets/logos/shibefanclubbanner.png";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";
import FooterDropdown from "@/components/navigation/FooterDropdown";
import { footerSocialsList, footerAbout, footerActivity, termsAndPolicies, currency, copyright } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      {/* Mobile Footer  */}
      <div className="flex flex-col text-[16px] gap-3 mt-3 md:hidden">
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
        <FooterDropdown trigger="About" dropdownContent={footerAbout} />
        <FooterDropdown trigger="Activity" dropdownContent={footerActivity} />
        <FooterDropdown
          trigger="Terms and Policies"
          dropdownContent={termsAndPolicies}
        />

        {/* social icons – mobile */}
        <div className="flex gap-2 flex-nowrap justify-between">
          {footerSocialsList.map(({ src, alt, href }) => (
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
        className="hidden md:block mx-auto max-w-[1500px]
                pt-[32px]
                navbarsm:pt-[clamp(2px,5vw,3rem)]
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

            <p className="font-[800] text-[20px]">
              PRESTIGE ESPORTS & GAMING ORGANIZATION
            </p>
            <p className="font-[500] text-base">
              Building communities to win high quality tournament and events
            </p>
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="flex gap-[clamp(1rem,9vw,10rem)]">
          {[
            { title: "About", items: footerAbout },
            { title: "Activity", items: footerActivity },
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
                  bottom-[clamp(2rem,5vw,3rem)]
                  flex flex-col items-end"
        >
          {/* social icons row */}
          <div className="flex gap-2 flex-wrap justify-end">
            {footerSocialsList.map(({ src, alt, href }) => (
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
          <p className="text-[11px] mt-2">{copyright}</p>
        </div>
      </div>
      {/* End of Desktop Footer */}

      <div className="flex justify-center py-2 text-[11px] mb-3 mt-2 md:hidden">
        {copyright}
      </div>
    </>
  );
}
