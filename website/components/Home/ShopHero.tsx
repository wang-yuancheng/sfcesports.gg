import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Variant = 1 | 2;

interface heroContent {
  header: string;
  subheader: string;
  matchLabel?: string;
  grayImage: StaticImageData;
  colorImage: StaticImageData;
  variant: Variant;
}

export default function ShopHero({
  header,
  subheader,
  grayImage,
  colorImage,
  variant,
}: heroContent) {
  return (
    <div
      className={`group relative isolate overflow-hidden rounded-2xl h-[540px] ${
        variant === 1 ? "md:col-span-4" : "md:col-span-2"
      }`}
    >
      {/* Color image, fades in on hover */}
      <Image
        src={colorImage}
        alt="atcBanner"
        fill
        quality={100}
        priority={false}
        className="absolute top-0 bottom-0 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* Gray image, fades out on hover */}
      <Image
        src={grayImage}
        alt="atcgrayBanner"
        fill
        quality={100}
        priority={false}
        className="absolute top-0 bottom-0 object-cover object-center opacity-100 group-hover:opacity-0 transition-opacity duration-500"
      />

      {/* Pink gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-t from-black/20 to-pink-bright/70 group-hover:opacity-0 transition-opacity duration-500" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 h-14 bottom-0 bg-gradient-to-t md:top-0 md:bg-gradient-to-b from-pink-bright/90 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 z-0"
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

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="absolute bottom-[20px] inset-x-6 flex flex-col justify-end z-20">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-fit bg-black/40 ring-1 ring-white/10 text-white hover:bg-black/65 transition-colors backdrop-blur-sm"
          >
            <Link href={""}>Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
