import React from "react";
import atcBanner from "@/assets/pictures/atc.avif";
import atcgrayBanner from "@/assets/pictures/atc-gray.avif";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import Logo from "@/assets/icons/shibe-pinkbright.svg";
import ShortHero from "@/components/ui/shortHero";
import LongHero from "@/components/ui/longHero";

export default function MainHero() {
  const list = [
    { title: "Placeholder 1", href: "#", logoSrc: Logo },
    { title: "Placeholder 2", href: "#", logoSrc: Logo },
    { title: "Placeholder 3", href: "#", logoSrc: Logo },
    { title: "Placeholder 4", href: "#", logoSrc: Logo },
    { title: "Placeholder 5", href: "#", logoSrc: Logo },
    { title: "Placeholder 6", href: "#", logoSrc: Logo },
    { title: "Placeholder 7", href: "#", logoSrc: Logo },
    { title: "Placeholder 8", href: "#", logoSrc: Logo },
    { title: "Placeholder 9", href: "#", logoSrc: Logo },
    { title: "Placeholder 10", href: "#", logoSrc: Logo },
  ];

  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] navbarsm:my-14">
      {/* Grid: 1 column on small screens */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(1,minmax(0,1fr))]">
        {/* Top left hero */}
        <LongHero
          header="All Talent Championship"
          subheader="1st Place"
          matchLabel="Regional Championship Final"
          grayImage={atcgrayBanner}
          colorImage={atcBanner}
          variant={1}
        />

        {/* Top right sidebar card */}
        <ShortHero
          header="Highlights"
          subheader="Latest Matches"
          list={list}
          background={cardHero}
        />

        {/* Hidden: If required, enable md:[grid-template-rows:repeat(2,minmax(0,1fr))] */}
        {/* --------------------------------------------------------------------------- */}
        <div className="hidden relative isolate overflow-hidden rounded-2xl h-[540px] md:col-span-2 bg-pink-bright"></div>
        <div className="hidden">
          <LongHero
            header="Featured Event"
            subheader="SCC S2"
            matchLabel="Regional Tier 2 Tournament"
            grayImage={atcgrayBanner}
            colorImage={atcBanner}
            variant={2}
          />
        </div>
        {/* --------------------------------------------------------------------------- */}
      </div>
    </section>
  );
}
