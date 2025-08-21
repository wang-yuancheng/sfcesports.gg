import React from "react";
import atcBanner from "@/assets/pictures/atc.avif";
import sccs1Banner from "@/assets/pictures/sccs1.png";
import sccs2Banner from "@/assets/pictures/sccs2.png";
import EventHero from "@/components/ui/eventHero";
import tdmTourBanner from "@/assets/pictures/1v1.png";

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
          header={
            <>
              Shibe&apos;s Community Cup{" "}
              <span className="whitespace-nowrap">Season 2</span>
            </>
          }
          subheader="13 Nov 2023"
          href="#"
          colorImage={sccs2Banner}
        />
        <EventHero
          header={
            <>
              Shibe&apos;s 1v1 Tour{" "}
              <span className="whitespace-nowrap">Season 5</span>
            </>
          }
          subheader="1 Jun 2023"
          href="#"
          colorImage={tdmTourBanner}
        />
        <EventHero
          header={
            <>
              Shibe&apos;s Community Cup{" "}
              <span className="whitespace-nowrap">Season 1</span>
            </>
          }
          subheader="23 Aug 2021"
          href="#"
          colorImage={sccs1Banner}
        />
      </div>
    </section>
  );
}
