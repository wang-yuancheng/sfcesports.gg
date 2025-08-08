import React from "react";
import Image from "next/image";
import atcBanner from "@/assets/pictures/atc.webp";
import atcgreyBanner from "@/assets/pictures/atc-gray.webp";
import cardHero from "@/assets/pictures/card-hero-gradient.png";

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-pink-bright group-hover:opacity-0 transition-opacity duration-500" />

          {/* Heading overlay */}
          <div className="relative h-full w-full">
            <div className="absolute left-6 top-6 mr-6">
              <p className="text-xs font-druk font-medium text-white/90">
                ALL TALENT CHAMPIONSHIP
              </p>
              <h2 className="mt-2 text-2xl font-druk font-bold text-nowrap text-white">
                1ST PLACE
              </h2>
            </div>
          </div>

          {/* Bottom overlay, 4 sections */}
          {/* Bottom overlay, 4 sections with responsive visibility */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            <div
              aria-hidden="true"
              className="absolute -top-10 inset-x-0 h-10 bg-gradient-to-t from-black/60 to-transparent"
            />
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:900px)]:grid-cols-3 gap-px bg-white/10 backdrop-blur-sm">
                {/* item 1, visible from sm */}
                <a
                  href="#"
                  className="hidden sm:flex items-center gap-4 bg-black/60 px-4 py-4 md:py-5 hover:bg-black/70 transition-colors"
                >
                  <div className="flex flex-col">
                    <p className="text-[11px] text-white/70 font-medium tracking-wide">
                      ATC Season 16
                    </p>
                    <p className="text-[11px] text-white/70">Time</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                        FNC
                      </span>
                      <span className="text-white/80 text-sm font-semibold">
                        vs
                      </span>
                      <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                        SASHI
                      </span>
                    </div>
                  </div>
                </a>

                {/* item 2, visible from lg */}
                <a
                  href="#"
                  className="hidden [@media(min-width:900px)]:flex items-center gap-4 bg-black/60 px-4 py-4 md:py-5 hover:bg-black/70 transition-colors"
                >
                  <div className="flex flex-col">
                    <p className="text-[11px] text-white/70 font-medium tracking-wide">
                      VCT EMEA Stage, Best of 3
                    </p>
                    <p className="text-[11px] text-white/70">
                      02:00, 9 Aug 2025
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                        FNC
                      </span>
                      <span className="text-white/80 text-sm font-semibold">
                        vs
                      </span>
                      <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                        TL
                      </span>
                    </div>
                  </div>
                </a>

                {/* item 3, Match Recap, always visible */}
                <a
                  href="#"
                  className="flex items-center justify-between bg-black/60 px-4 py-4 md:py-5 hover:bg-black/70 transition-colors"
                >
                  <div className="flex flex-row">
                    <div className="flex">
                      <div className="text-white font-druk text-base font-medium mr-4 text-nowrap">
                        MATCH RECAP
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                      <button className="rounded-md bg-white px-3 py-2 text-xs md:text-sm font-semibold text-black">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:hidden">
                    <button className="rounded-md bg-white px-3 py-2 text-xs md:text-sm font-semibold text-black text-nowrap">
                      View
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
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
                Achivements
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
                Latest Events
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
