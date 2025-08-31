"use client";

import Image from "next/image";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
import { useMemo, useState } from "react";
import TeamDropdown from "@/components/teams/TeamDropdown";
import TeamCard from "@/components/teams/TeamCard";
import TeamGrid from "@/components/teams/TeamGrid";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import TeamSideSelection from "@/components/teams/TeamSideSelection";
import type { Team, TeamLabels } from "@/components/teams/TeamDropdown";


const categories: TeamLabels[] = [
  { label: "All Teams", value: "all", imageSrc: shibeLogo },
  {
    label: "League of Legends",
    value: "pubg-mobile",
    imageSrc: shibeLogo,
  },
  { label: "Mobile Legends", value: "mobile-legends", imageSrc: shibeLogo },
  { label: "Valorant Mobile", value: "valorant-mobile", imageSrc: shibeLogo },
  { label: "Valorant", value: "valorant", imageSrc: shibeLogo },
];

const teams: Team[] = [
  { id: 1, name: "SFC 女队", game: "pubg-mobile", logo: shibeLogo, legacy: false },
  { id: 2, name: "SFC 男队", game: "pubg-mobile", logo: shibeLogo, legacy: false },
  { id: 3, name: "SFC Taiwan", game: "pubg-mobile", logo: shibeLogo, legacy: false },
  { id: 4, name: "SFC India", game: "pubg-mobile", logo: shibeLogo, legacy: false },
  { id: 5, name: "SFC Tron", game: "pubg-mobile", logo: shibeLogo, legacy: false },
  { id: 6, name: "SFC Heirs", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 7, name: "SFC OCE", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 8, name: "SFC Maldives", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 9, name: "SFC Rex", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 10, name: "SFC V", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 11, name: "SFC Valence", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 12, name: "SFC Nemesis", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 13, name: "SFC Academy", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  { id: 14, name: "SFC PH", game: "mobile-legends", logo: shibeLogo, legacy: false },
  { id: 15, name: "SFC SG", game: "valorant-mobile", logo: shibeLogo, legacy: false },
  { id: 16, name: "SFC MY", game: "valorant", logo: shibeLogo, legacy: false },
];

export default function Teams() {
  const [selected, setSelected] = useState<string>("all");

  const visibleTeams = useMemo(() => {
    if (selected === "all") return teams;
    return teams.filter((t) => t.game === selected);
  }, [selected]);

  return (
    <section className="section-container pb-10 navbarsm:my-8">
      <div className="max-w mx-auto mb-8">
        <Image
          src={sfcBanner}
          alt="SFC banner"
          priority
          className="w-full h-auto border border-gray-100 rounded-md"
        />
      </div>

      <div className="font-druk font-medium uppercase text-2xl md:text-4xl">
        Our Teams
      </div>

      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-6 mt-6">
        <div className="block lg:hidden">
          <TeamDropdown
            title="All Categories"
            categories={categories}
            onSelect={(value) => setSelected(value)}
          />
        </div>

        <TeamGrid
          teams={visibleTeams}
          renderTeam={(team) => <TeamCard team={team} />}
        />

        <div className="hidden lg:block">
          <TeamSideSelection
            title="All Categories"
            categories={categories}
            onSelect={(value) => setSelected(value)}
          />
        </div>
      </div>
    </section>
  );
}
