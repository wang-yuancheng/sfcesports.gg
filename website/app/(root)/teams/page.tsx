"use client";

import Image from "next/image";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
import { useMemo, useState } from "react";
import TeamDropdown from "@/components/teams/TeamDropdown";
import TeamCard from "@/components/teams/TeamCard";
import TeamGrid from "@/components/teams/TeamGrid";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import type { Team, TeamLabels } from "@/components/teams/TeamDropdown";

// Games only, used for the per section mobile filters
const gameCategories: TeamLabels[] = [
  { label: "All Games", value: "all", imageSrc: shibeLogo },
  { label: "PUBG Mobile", value: "pubg-mobile", imageSrc: shibeLogo },
  { label: "Mobile Legends", value: "mobile-legends", imageSrc: shibeLogo },
  { label: "Valorant Mobile", value: "valorant-mobile", imageSrc: shibeLogo },
  { label: "Valorant", value: "valorant", imageSrc: shibeLogo },
];

const teams: Team[] = [
  {
    id: 1,
    name: "SFC 女队",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 2,
    name: "SFC 男队",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 3,
    name: "SFC Taiwan",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 4,
    name: "SFC India",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 5,
    name: "SFC Tron",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 6,
    name: "SFC Heirs",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 7,
    name: "SFC OCE",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 8,
    name: "SFC Maldives",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 9,
    name: "SFC Rex",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  { id: 10, name: "SFC V", game: "pubg-mobile", logo: shibeLogo, legacy: true },
  {
    id: 11,
    name: "SFC Valence",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 12,
    name: "SFC Nemesis",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 13,
    name: "SFC Academy",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: true,
  },
  {
    id: 14,
    name: "SFC PH",
    game: "mobile-legends",
    logo: shibeLogo,
    legacy: false,
  },
  {
    id: 15,
    name: "SFC SG",
    game: "valorant-mobile",
    logo: shibeLogo,
    legacy: false,
  },
  { id: 16, name: "SFC MY", game: "valorant", logo: shibeLogo, legacy: false },
];

export default function Teams() {
  // One shared state instead of two
  const [selectedGame, setSelectedGame] = useState<string>("all");

  const activeTeamsOnly = useMemo(() => teams.filter((t) => !t.legacy), []);
  const legacyTeamsOnly = useMemo(() => teams.filter((t) => t.legacy), []);

  const visibleActiveTeams = useMemo(() => {
    if (selectedGame === "all") return activeTeamsOnly;
    return activeTeamsOnly.filter((t) => t.game === selectedGame);
  }, [selectedGame, activeTeamsOnly]);

  const visibleLegacyTeams = useMemo(() => {
    if (selectedGame === "all") return legacyTeamsOnly;
    return legacyTeamsOnly.filter((t) => t.game === selectedGame);
  }, [selectedGame, legacyTeamsOnly]);

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

      {/* Title */}
      <div className="font-druk font-medium uppercase text-2xl lg:text-3xl">
        Our Teams
      </div>

      {/* Mobile filter */}
      <div className="block md:hidden mt-4 mb-6">
        <TeamDropdown
          title="All Games"
          categories={gameCategories}
          onSelect={(value) => setSelectedGame(value)}
        />
      </div>

      {/* Main content and sidebar */}
      <div className="md:flex md:items-start md:gap-6 mt-2">
        {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Active */}
          <div className="font-druk font-medium uppercase text-base lg:text-lg mt-6">
            Active Teams
          </div>
          <div className="mt-4">
            <TeamGrid
              teams={visibleActiveTeams}
              renderTeam={(team) => <TeamCard team={team} />}
            />
          </div>

          {/* Legacy */}
          <div className="font-druk font-medium uppercase text-base lg:text-lg mt-8">
            Legacy Teams
          </div>
          <div className="mt-4">
            <TeamGrid
              teams={visibleLegacyTeams}
              renderTeam={(team) => <TeamCard team={team} />}
            />
          </div>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden md:flex w-64 shrink-0 flex-col gap-4">
          <div className="font-druk font-medium uppercase text-base lg:text-lg mt-6">
            Filter
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold mb-2">Filters</div>

            <TeamDropdown
              title="All Games"
              categories={gameCategories}
              onSelect={(value) => setSelectedGame(value)}
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold">Sidebar widgets</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
