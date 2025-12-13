import Image from "next/image";
import React from "react";
import ChevronRight from "@/assets/icons/chevron-right-white.svg";
import { LongHeroContent } from "@/lib/types";
import Link from "next/link";

export default function LongHero({
  header,
  subheader,
  matchLabel,
  image,
}: LongHeroContent) {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-4">
      <Image
        src={image}
        alt=""
        fill
        priority={true}
        className="absolute top-0 bottom-0 object-cover object-center opacity-100 transition-all duration-500"
      />

      {/* Black hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40
               bg-gradient-to-b from-black/50 to-transparent
               opacity-100 transition-opacity duration-500
               group-hover:opacity-50 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40
               bg-gradient-to-t from-black/50 to-transparent
               opacity-100 transition-opacity duration-500
               group-hover:opacity-50 z-0"
      />

      {/* Heading overlay */}
      <div className="relative h-full w-full">
        <div className="absolute left-8 top-8 mr-8">
          <p className="text-xs xxs:text-sm xs:text-md sm:text-lg uppercase font-druk font-medium text-white/90">
            {header}
          </p>
          <p className="text-3xl xxs:text-4xl xs:text-4xl sm:text-5xl uppercase font-druk font-bold text-white">
            {subheader}
          </p>
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="relative px-4 pb-4">
          <Link
            href="/atc"
            className="block w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-md hover:bg-black/65 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 p-4">
              {/* left, title + subtitle */}
              <div className="min-w-0">
                <p className="hidden max-[330px]:flex items-center gap-2 text-white font-druk font-bold text-lg leading-[1]">
                  RECAP
                </p>
                <p className="flex max-[330px]:hidden items-center gap-2 text-white font-druk font-bold text-lg leading-[1]">
                  MATCH RECAP
                </p>
                <p className="text-white/75 text-sm leading-tight truncate">
                  {matchLabel}
                </p>
              </div>
              <Image
                src={ChevronRight}
                alt="Chevron Right"
                width={30}
                height={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
