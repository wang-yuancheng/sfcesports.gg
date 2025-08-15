import React from "react";
import atcBanner from "@/assets/pictures/atc.avif";
import atcgrayBanner from "@/assets/pictures/atc-gray.avif";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import Logo from "@/assets/icons/shibe-pinkbright.svg";
import ShortHero from "@/components/ui/shortHero";
import LongHero from "@/components/ui/longHero";

export default function PastEvents() {
  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] navbarsm:my-14">
      <div className="w-full mt-4 sm:mt-0 mb-8 ">
        <p className="uppercase text-4xl font-druk font-medium text-center">
          Featured Events
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(1,minmax(0,1fr))]">
        <div className="relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2 bg-pink-bright"></div>
        <div className="relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2 bg-pink-bright"></div>
        <div className="relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2 bg-pink-bright"></div>
      </div>
    </section>
  );
}
