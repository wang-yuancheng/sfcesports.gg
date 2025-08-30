"use client";

import Image from "next/image";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
import { useMemo, useState } from "react";
import TeamDropdown from "@/components/teams/TeamDropdown";
import TeamCard from "@/components/teams/TeamCard";
import TeamGrid from "@/components/teams/TeamGrid";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";

type TeamDropdown = { label: string; value: string; imageSrc: string };
type Team = { id: number; name: string; game: string; logo?: string };

const categories: TeamDropdown[] = [
  { label: "All Teams", value: "all", imageSrc: shibeLogo },
  {
    label: "League of Legends",
    value: "league-of-legends",
    imageSrc: shibeLogo,
  },
  { label: "Valorant", value: "valorant", imageSrc: shibeLogo },
  { label: "Counter-Strike 2", value: "counter-strike-2", imageSrc: shibeLogo },
];

const teams: Team[] = [
  { id: 1, name: "Fnatic", game: "league-of-legends", logo: shibeLogo },
  { id: 2, name: "G2", game: "league-of-legends", logo: shibeLogo },
  { id: 3, name: "SEN", game: "valorant", logo: shibeLogo },
  { id: 4, name: "Liquid", game: "valorant", logo: shibeLogo },
  { id: 5, name: "NAVI", game: "counter-strike-2", logo: shibeLogo },
  { id: 6, name: "Faze", game: "counter-strike-2", logo: shibeLogo },
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
          quality={100}
          priority
          className="w-full h-auto border border-gray-100 rounded-md"
        />
      </div>

      <div className="font-druk font-medium uppercase text-2xl md:text-4xl">Our Teams</div>

      <div className="mx-auto max-w-6xl space-y-6 py-6">
        <TeamDropdown
          title="All Categories"
          categories={categories}
          onSelect={(value) => setSelected(value)}
        />

        <TeamGrid
          teams={visibleTeams}
          renderTeam={(team) => <TeamCard team={team} />}
        />
      </div>
    </section>
  );
}
