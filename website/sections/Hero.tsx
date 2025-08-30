import React from "react";
import atcBanner from "@/assets/pictures/atc.webp";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import Logo from "@/assets/icons/shibe-pinkbright.svg";
import ShortHero from "@/components/home/ShortHero";
import LongHero from "@/components/home/LongHero";
import royalEsportsLogo from "@/assets/logos/royalesports.png";
import kohaiCupLogo from "@/assets/logos/kohaicup.png";
import gamelingLogo from "@/assets/logos/gameling.png";
import kodLogo from "@/assets/logos/kod.png";
import nyzLogo from "@/assets/logos/nyz.png";
import thmLogo from "@/assets/logos/thm.png";
import dlyLogo from "@/assets/logos/dly.png";
import xbossLogo from "@/assets/logos/xboss.png";
import novaLogo from "@/assets/logos/nova.webp";
import ar15SkinsBanner from "@/assets/pictures/ar15skins.jpg";
import ar15Skins1Banner from "@/assets/pictures/ar15skins1.jpg";
import ShopHero from "@/components/home/ShopHero";

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
    <section className="section-container navbarsm:pt-14 pb-14">
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
          list={list}
          background={cardHero}
        />
        <ShopHero
          header="Don’t Miss Out"
          subheader="New items in shop"
          grayImage={ar15Skins1Banner}
          colorImage={ar15SkinsBanner}
          variant={2}
        />

        <ShopHero
          header="Don’t Miss Out"
          subheader="New items in shop"
          grayImage={ar15Skins1Banner}
          colorImage={ar15SkinsBanner}
          variant={1}
        />
      </div>
    </section>
  );
}
