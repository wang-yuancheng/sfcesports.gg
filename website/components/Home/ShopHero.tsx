import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShopHeroContent } from "@/lib/types";

export default function ShopHero({
  header,
  subheader,
  grayImage,
  colorImage,
  variant,
}: ShopHeroContent) {
  return (
    <div
      className={`group relative isolate overflow-hidden rounded-2xl h-[540px] ${
        variant === "big" ? "md:col-span-4" : "md:col-span-2"
      }`}
    >
      {/* Back image, fades in on hover */}
      <Image
        src={colorImage}
        alt=""
        fill
        className="absolute top-0 bottom-0 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* Front image, fades out on hover */}
      <Image
        src={grayImage}
        alt=""
        fill
        priority={true}
        className="absolute top-0 bottom-0 object-cover object-center opacity-100 group-hover:opacity-0 transition-opacity duration-500"
      />

      {/* Pink gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-t md:from-black/20 md:to-pink-bright/80 brightness-110 group-hover:opacity-0 transition-opacity duration-500" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 h-14 bottom-0 bg-gradient-to-t md:top-0 md:bg-gradient-to-b md:from-pink-bright/90 brightness-125 md:to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 z-0"
      />

      {/* Black hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40
               bg-gradient-to-b from-black/50 to-transparent
               opacity-100 transition-opacity duration-500 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40
               bg-gradient-to-t from-black/50 to-transparent
               opacity-100 transition-opacity duration-500 z-0"
      />

      {/* Heading overlay */}
      <div className="relative h-full w-full">
        <div className="absolute left-8 top-8 mr-8">
          <p className="text-xs xxs:text-sm xs:text-lg md:text-base lg:text-lg uppercase font-druk font-medium text-white/90">
            {header}
          </p>
          <p className="text-2xl xxs:text-2xl xs:text-3xl md:text-2xl lg:text-4xl uppercase font-druk font-bold text-white">
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
