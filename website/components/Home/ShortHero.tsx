import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShortHeroContent } from "@/lib/types";

export default function ShortHero({
  header,
  subheader,
  list,
  background,
}: ShortHeroContent) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2">
      <Image
        src={background}
        alt=""
        priority={true}
        className="absolute top-0 object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 from-[80%] xs:from-[75%] md:from-[80%] lg:from-[75%] xlg:from-[65%] to-transparent"></div>

      {/* Header */}
      <div className="absolute top-8 left-6">
        <p className="text-white uppercase text-lg xxs:text-2xl md:text-lg lg:text-2xl font-druk font-medium">
          {header}
        </p>
      </div>

      <div className="absolute bottom-[24px] inset-x-6 flex flex-col justify-end">
        <span className="inline-flex items-center text-zinc-300 mb-2">
          {subheader}
        </span>

        {/* List */}
        <ul className="space-y-1 overflow-y-auto flex-1">
          {list?.map((item, idx) => (
            <li key={idx}>
              <Link
                href={`/${item.slug}`}
                className="group flex items-center justify-between gap-3 py-1 text-white transition-colors hover:text-zinc-300"
              >
                <span className="truncate text-lg">{item.title}</span>
                <span className="relative h-7 w-7 shrink-0">
                  <Image
                    src={item.logoSrc}
                    alt=""
                    fill
                    className="object-contain transition grayscale group-hover:grayscale-0"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
