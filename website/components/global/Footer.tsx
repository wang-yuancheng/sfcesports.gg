import Image from "next/image";

import shibeFanClubBanner from "@/assets/logos/shibefanclubbanner.png";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";
import FooterDropdown from "@/components/navigation/FooterDropdown";
import {
  footerSocialsList,
  footerAbout,
  footerActivity,
  termsAndPolicies,
  copyright,
} from "@/data/navigation/footer";
import Link from "next/link";

interface FooterProps {
  onNavClick?: () => void;
}

export default function Footer({ onNavClick }: FooterProps) {
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

        <FooterDropdown
          trigger="About"
          dropdownContent={footerAbout}
          onLinkClick={onNavClick}
        />
        <FooterDropdown
          trigger="Activity"
          dropdownContent={footerActivity}
          onLinkClick={onNavClick}
        />
        <FooterDropdown
          trigger="Terms and Policies"
          dropdownContent={termsAndPolicies}
          onLinkClick={onNavClick}
        />

        {/* social icons – mobile */}
        <div className="flex gap-2 flex-nowrap justify-between">
          {footerSocialsList.map(({ src, alt, href }) => (
            <Link
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
            </Link>
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
              PREMIER ESPORTS & GAMING ORGANIZATION
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
                <Link
                  key={label}
                  href={href}
                  className="py-1 font-[500] text-gray-500 hover:text-pink-bright"
                >
                  {label}
                </Link>
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
              <Link
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
              </Link>
            ))}
          </div>
          {/* copyright */}
          <p className="text-[11px] mt-2 text-gray-600">{copyright}</p>
        </div>
      </div>
      {/* End of Desktop Footer */}

      <div className="flex justify-center py-2 text-[11px] text-gray-600 mb-3 mt-2 md:hidden">
        {copyright}
      </div>
    </>
  );
}
