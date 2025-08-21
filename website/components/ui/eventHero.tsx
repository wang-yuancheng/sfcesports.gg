import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroContent {
  header: React.ReactNode;
  subheader: string;
  href: string;
  colorImage: StaticImageData;
}

export default function EventHero({
  header,
  subheader,
  href,
  colorImage,
}: HeroContent) {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2">
      {/* Color image, fades in on hover */}
      <Image
        src={colorImage}
        alt="atcBanner"
        fill
        quality={100}
        priority={false}
        className="absolute top-0 bottom-0 object-cover object-center grayscale group-hover:grayscale-0 transition-opacity duration-500"
      />

      {/* Pink gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-pink-bright/70 group-hover:opacity-0 transition-opacity duration-500" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 h-14 bottom-0 bg-gradient-to-t from-pink-bright/90 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 z-0"
      />

      {/* Black hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40
                     bg-gradient-to-b from-black/50 to-transparent
                     opacity-0 transition-opacity duration-500
                     group-hover:opacity-100 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40
                     bg-gradient-to-t from-black/50 to-transparent
                     opacity-0 transition-opacity duration-500
                     group-hover:opacity-100 z-0"
      />

      {/* Header, above gradient */}
      <div className="absolute top-8 left-6 z-20 mr-6">
        <div className="text-white uppercase text-md xxs:text-lg sm:text-xl md:text-sm lg:text-xl font-druk font-medium">
          {subheader}
        </div>
        <div className="text-white uppercase text-md xxs:text-xl sm:text-2xl md:text-lg lg:text-2xl font-druk font-medium">
          {header}
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[20px] inset-x-6 flex flex-col justify-end z-20">
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="w-fit bg-black/40 ring-1 ring-white/10 text-white hover:bg-black/65 transition-colors backdrop-blur-sm"
        >
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
