import React from "react";
import sccs1Banner from "@/assets/pictures/sccs1.webp";
import sccs2Banner from "@/assets/pictures/sccs2.webp";
import EventHero from "@/components/home/EventHero";
import tdmTourBanner from "@/assets/pictures/1v1s4.webp";

export default function PastEvents() {
  return (
    <section className="section-container pt-14 navbarsm:pb-14 mb-5">
      <div className="w-full mt-0 sm:mt-0 mb-8 ">
        <p className="uppercase text-4xl font-druk font-medium text-center">
          Featured Events
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(1,minmax(0,1fr))]">
        <EventHero
          header={
            <p>
              Shibe&apos;s Community Cup{" "}
              <span className="whitespace-nowrap">Season 2</span>
            </p>
          }
          subheader="13 Nov 2023"
          href="#"
          colorImage={sccs2Banner}
        />
        <EventHero
          header={
            <p>
              Shibe&apos;s 1v1 Tour{" "}
              <span className="whitespace-nowrap">Season 4</span>
            </p>
          }
          subheader="1 Jun 2022"
          href="#"
          colorImage={tdmTourBanner}
        />
        <EventHero
          header={
            <p>
              Shibe&apos;s Community Cup{" "}
              <span className="whitespace-nowrap">Season 1</span>
            </p>
          }
          subheader="23 Aug 2021"
          href="#"
          colorImage={sccs1Banner}
        />
      </div>
    </section>
  );
}
