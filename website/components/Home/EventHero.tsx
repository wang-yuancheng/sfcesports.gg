import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/Button";
import { EventHeroContent } from "@/lib/types";

export default function EventHero({
  header,
  date,
  href,
  image,
}: EventHeroContent) {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl h-[520px] md:col-span-2">
      <Image
        src={image}
        alt="atcBanner"
        fill
        className="absolute top-0 bottom-0 object-cover object-center brightness-90 group-hover:grayscale-0 group-hover:brightness-100 duration-500"
      />

      {/* Black hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40
                   bg-gradient-to-b from-black/50 to-transparent
                   opacity-100 transition-opacity duration-500
                   md:group-hover:opacity-30 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40
                   bg-gradient-to-t from-black/50 to-transparent
                   opacity-100 transition-opacity duration-500
                   md:group-hover:opacity-30 z-0"
      />

      {/* Header, above gradient */}
      <div className="absolute top-8 left-6 z-20 mr-6">
        <span className="text-white uppercase text-sm xxs:text-md sm:text-lg md:text-sm lg:text-lg font-druk font-medium text-white/90">
          {date}
        </span>
        <span className="text-white uppercase text-md xxs:text-xl sm:text-2xl md:text-lg lg:text-2xl font-druk font-bold">
          {header}
        </span>
      </div>

      {/* Button: visible on mobile, reveal on hover from md+ by sliding up */}
      <div
        className="
          absolute bottom-[20px] inset-x-6 flex flex-col justify-end z-20
          transition-all duration-500 ease-out will-change-transform
          pointer-events-auto
          md:opacity-0 md:translate-y-6 md:pointer-events-none
          md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto
        "
      >
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="w-fit bg-black/40 ring-1 ring-white/10 text-white hover:bg-black/65 transition-colors"
        >
          <Link href={`/events/${href}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
