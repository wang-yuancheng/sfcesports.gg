import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BasicHeroContent } from "@/lib/types";

export default function BasicHero({
  header,
  subheader,
  image,
  variant,
  href,
}: BasicHeroContent) {
  return (
    <div
      className={`group relative isolate overflow-hidden rounded-2xl h-[540px] ${
        variant === "big" ? "md:col-span-4" : "md:col-span-2"
      }`}
    >
      {/* Front image, fades out on hover */}
      <Image
        src={image}
        alt=""
        fill
        priority={true}
        className="absolute top-0 bottom-0 object-cover object-center duration-500"
      />

      {/* Black hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40
               bg-gradient-to-b from-black/75 to-transparent
               opacity-100 transition-opacity duration-500
               group-hover:opacity-50 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40
               bg-gradient-to-t from-black/75 to-transparent
               opacity-100 transition-opacity duration-500
               group-hover:opacity-50 z-0"
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
            <Link href={href}>Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
