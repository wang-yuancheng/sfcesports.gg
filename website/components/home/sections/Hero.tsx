import atcBanner from "@/assets/pictures/atc/atc.webp";
import cardHero from "@/assets/pictures/card-hero-gradient.png";
import ShortHero from "@/components/home/ShortHero";
import LongHero from "@/components/home/LongHero";
import boosting from "@/assets/pictures/media/rank1.webp";
import subscription from "@/assets/pictures/subscription.webp";
import BasicHero from "@/components/home/BasicHero";
import { tournamentHighlights } from "@/data/home/highlights";

export default function MainHero() {
  return (
    <section className="section-container navbarsm:pt-6 pb-14 mb-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
        <LongHero
          header="All Talent Championship"
          subheader="1st Place"
          matchLabel="Regional Championship Final"
          image={atcBanner}
        />
        <ShortHero
          header="Highlights"
          subheader="Latest Matches"
          list={tournamentHighlights}
          background={cardHero}
        />
        <BasicHero
          header="Membership"
          subheader="Premium Benefits"
          image={subscription}
          variant="small"
          href="/shop"
        />

        <BasicHero
          header="Latest Deals"
          subheader="Boosting Services"
          image={boosting}
          variant="big"
          href="/shop"
        />
      </div>
    </section>
  );
}
