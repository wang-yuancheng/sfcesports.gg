import React from "react";
import Image from "next/image";
import atcBanner from "@/assets/pictures/atc.avif";
import atcgreyBanner from "@/assets/pictures/atc-gray.avif";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import { ChevronRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="mx-auto max-w-[1000px] px-4 sm:px-6 navbarsm:my-14">
      {/* Grid: 1 column on small screens */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 sm:[grid-template-rows:repeat(2,minmax(0,1fr))]">
        {/* Top left hero, spans 4 columns, gray to color hover swap */}
        <div className="group relative isolate overflow-hidden rounded-2xl h-[360px] sm:col-span-4">
          {/* Color image on top, fades in on hover */}
          <Image
            src={atcBanner}
            alt="atcBanner"
            fill
            quality={100}
            priority={false}
            className="absolute top-0 bottom-0 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          {/* Gray image underneath, fades out on hover */}
          <Image
            src={atcgreyBanner}
            alt="atcgreyBanner"
            fill
            quality={100}
            priority={false}
            className="absolute top-0 bottom-0 object-cover object-center opacity-100 group-hover:opacity-0 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 66vw"
          />

          {/* Pink gradient base */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-pink-bright/70 group-hover:opacity-0 transition-opacity duration-500" />

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
            <div className="absolute left-6 top-6 mr-6">
              <p className="text-xs font-druk font-medium text-white/90">
                ALL TALENT CHAMPIONSHIP
              </p>
              <p className="text-3xl font-druk font-bold text-white">
                1ST PLACE
              </p>
            </div>
          </div>

          {/* Bottom overlay, integrated recap */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            {/* base pink gradient, fades OUT on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14
               bg-gradient-to-t from-pink-bright/90 to-transparent
               opacity-100 transition-opacity duration-500
               group-hover:opacity-0 z-0"
            />

            <div className="relative px-4 pb-4">
              <a
                href="#"
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
                      Regional Championship Finals
                    </p>
                  </div>

                  <ChevronRight className="w-[25px] h-[25px] text-white" />
                </div>
              </a>
            </div>
          </div>

          {/*  */}
        </div>

        {/* Top right sidebar card, spans 2 columns */}
        <div className="relative isolate overflow-hidden rounded-2xl h-[360px] sm:col-span-2">
          <Image
            src={cardHero}
            alt=""
            fill
            quality={100}
            priority={false}
            className="absolute top-0 bottom-0 object-cover object-center"
            sizes="(max-width: 768px) 100vw, 34vw"
          />

          <div className="relative h-full w-full">
            <div className="absolute left-6 top-6">
              <p className="text-white text-lg font-druk font-bold">
                Highlights
              </p>
              <p className="text-white/90 font-druk text-sm">Result 1</p>
            </div>
          </div>
        </div>

        {/* Bottom left sidebar card, spans 2 columns */}
        <div className="relative isolate overflow-hidden rounded-2xl h-[360px] sm:col-span-2">
          <Image
            src={cardHero}
            alt=""
            fill
            quality={100}
            priority={false}
            className="absolute top-0 bottom-0 object-cover object-center"
            sizes="(max-width: 768px) 100vw, 34vw"
          />

          <div className="relative h-full w-full">
            <div className="absolute left-6 top-6">
              <p className="text-white text-lg font-druk font-bold">
                Achievements
              </p>
              <p className="text-white/90 font-druk text-sm">Global Rank #1</p>
            </div>
            <button className="absolute left-6 bottom-6 rounded-md bg-white px-3 py-2 text-sm font-semibold">
              View more
            </button>
          </div>
        </div>

        {/* Bottom right hero, spans 4 columns */}
        <div className="relative isolate overflow-hidden rounded-2xl h-[360px] sm:col-span-4">
          <Image
            src={cardHero}
            alt=""
            fill
            quality={100}
            priority={false}
            className="absolute top-0 bottom-0 object-cover object-center"
            sizes="(max-width: 768px) 100vw, 66vw"
          />

          <div className="relative h-full w-full">
            <div className="absolute left-6 top-6">
              <p className="text-white text-lg font-druk font-bold">
                Latest Event
              </p>
              <p className="text-white/90 font-druk text-sm">
                Shibe Community Cup S2
              </p>
            </div>
            <button className="absolute left-6 bottom-6 rounded-md bg-white px-3 py-2 text-sm font-semibold">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
