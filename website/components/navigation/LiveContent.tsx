"use client";

import Image from "next/image";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import pubgmLogo from "@/assets/logos/pubgm.svg";
import novaLogo from "@/assets/logos/nova.webp";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Link from "next/link";

export function LiveContentBack({ showVod }: { showVod: boolean }) {
  return (
    <Link href="/events/sccs2" className="block w-full group">
      <div className="w-full min-w-0 h-[52px] flex justify-between items-center pl-2">
        {/* Left side */}
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src={pubgmLogo}
            alt="PUBGM Logo"
            width={35}
            draggable={false}
            className="object-contain shrink-0"
            priority
          />
          <div className="min-w-0 leading-none">
            <div className="font-[600] text-sm leading-tight whitespace-nowrap">
              SCC S2
            </div>
            <StatusLine showVod={showVod} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center shrink-0 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src={ChevronRight}
            alt="Chevron Right"
            className="w-[25px] h-[25px]"
          />
        </div>
      </div>
    </Link>
  );
}

export function LiveContentFront({ showVod }: { showVod: boolean }) {
  return (
    <Link href="/events/sfcxnova" className="block w-full group">
      <div className="w-full min-w-0 h-[52px] flex justify-between items-center px-2">
        {/* Left side */}
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src={pubgmLogo}
            alt="PUBGM Logo"
            width={35}
            draggable={false}
            priority
            className="object-contain shrink-0"
          />
          <div className="min-w-0 leading-none">
            <div className="font-[600] text-sm leading-tight whitespace-nowrap">
              SFC vs NOVA
            </div>
            <StatusLine showVod={showVod} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src={shibeLogo}
            alt="Shibe Logo"
            width={35}
            draggable={false}
            priority
            className="object-contain"
          />
          <Image
            src={novaLogo}
            alt="Nova Logo"
            width={35}
            draggable={false}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
function StatusLine({ showVod }: { showVod: boolean }) {
  return (
    <div className="relative block leading-tight min-w-100">
      {/* Mobile version of default line */}
      <div className="font-[400] text-xs text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis navbarsm:hidden">
        Event has ended
      </div>

      {/* Desktop default line */}
      <div
        className={`hidden navbarsm:block font-[400] text-xs text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-300 ${
          showVod
            ? "opacity-0 pointer-events-none"
            : "opacity-100 group-hover:opacity-0 group-hover:duration-0"
        }`}
      >
        Event has ended
      </div>

      {/* Desktop VOD overlay */}
      <div
        className={`hidden navbarsm:block absolute inset-0 font-[400] text-xs text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-300 ${
          showVod
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-hover:duration-0"
        }`}
      >
        View More
      </div>
    </div>
  );
}
