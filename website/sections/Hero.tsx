import React from "react";
import atcBanner from "@/assets/pictures/atc.avif";
import atcgrayBanner from "@/assets/pictures/atc-gray.avif";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import Logo from "@/assets/icons/shibe-pinkbright.svg";
import ShortHero from "@/components/Home/ShortHero";
import LongHero from "@/components/Home/LongHero";
import royalEsportsLogo from "@/assets/logos/royalesports.png";
import kohaiCupLogo from "@/assets/logos/kohaicup.png";
import gamelingLogo from "@/assets/logos/gameling.png";
import kodLogo from "@/assets/logos/kod.png";
import nyzLogo from "@/assets/logos/nyz.png";
import thmLogo from "@/assets/logos/thm.png";
import dlyLogo from "@/assets/logos/dly.png";
import xbossLogo from "@/assets/logos/xboss.png";
import novaLogo from "@/assets/logos/nova.webp";

export default function MainHero() {
  const list = [
    { title: "Royal Esports Tournament", href: "#", logoSrc: royalEsportsLogo },
    { title: "NYZ Mini Tournament", href: "#", logoSrc: nyzLogo },
    { title: "DLY Mini Tournament", href: "#", logoSrc: dlyLogo },
    { title: "SFCxNova Community Tournament", href: "#", logoSrc: novaLogo },
    { title: "KOD Showdown 2024", href: "#", logoSrc: kodLogo },
    { title: "Kohai Cup 2024", href: "#", logoSrc: kohaiCupLogo },
    { title: "Gameling Gauntlet", href: "#", logoSrc: gamelingLogo },
    { title: "Shibe's Community Cup", href: "#", logoSrc: Logo },
    { title: "THM Challenge Cup 2023", href: "#", logoSrc: thmLogo },
    { title: "Xboss Tournament", href: "#", logoSrc: xbossLogo },
  ];

  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] navbarsm:pt-14 navbarsm:pb-7">
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
