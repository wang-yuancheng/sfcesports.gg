import React from "react";
import atcBanner from "@/assets/pictures/atc.avif";
import atcgrayBanner from "@/assets/pictures/atc-gray.avif";
import EventHero from "@/components/ui/eventHero";

export default function PastEvents() {
  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] navbarsm:my-14">
      <div className="w-full mt-4 sm:mt-0 mb-8 ">
        <p className="uppercase text-4xl font-druk font-bold text-center">
          Featured Events
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(1,minmax(0,1fr))]">
        <EventHero
          header="Shibe Community Cup S2"
          subheader="13 Nov 2023"
          href="#"
          grayImage={atcgrayBanner}
          colorImage={atcBanner}
        />
        <EventHero
          header="Shibe 1v1 Tour S5"
          subheader="1 Jun 2023"
          href="#"
          grayImage={atcgrayBanner}
          colorImage={atcBanner}
        />
        <EventHero
          header="Shibe Community Cup S1"
          subheader="23 Aug 2021"
          href="#"
          grayImage={atcgrayBanner}
          colorImage={atcBanner}
        />
      </div>
    </section>
  );
}
