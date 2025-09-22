import React from "react";
import atcBanner from "@/assets/pictures/atc.webp";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import ShortHero from "@/components/home/ShortHero";
import LongHero from "@/components/home/LongHero";
import ar15SkinsBanner from "@/assets/pictures/ar15skins.jpg";
import ar15Skins1Banner from "@/assets/pictures/ar15skins1.jpg";
import ShopHero from "@/components/home/ShopHero";
import { highlightsList } from "@/lib/constants";

export default function MainHero() {

  return (
    <section className="section-container navbarsm:pt-6 pb-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
        <LongHero
          header="All Talent Championship"
          subheader="1st Place"
          matchLabel="Regional Championship Final"
          img={atcBanner}
        />
        <ShortHero
          header="Highlights"
          subheader="Latest Matches"
          list={highlightsList}
          background={cardHero}
        />
        <ShopHero
          header="Don’t Miss Out"
          subheader="New items in shop"
          grayImage={ar15Skins1Banner}
          colorImage={ar15SkinsBanner}
          variant="small"
        />

        <ShopHero
          header="Don’t Miss Out"
          subheader="New items in shop"
          grayImage={ar15Skins1Banner}
          colorImage={ar15SkinsBanner}
          variant="big"
        />
      </div>
    </section>
  );
}
