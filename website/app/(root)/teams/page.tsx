"use client";

import Image from "next/image";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
import { useMemo, useState } from "react";
import GameCategoryDropdown from "@/components/teams/GameCategoryDropdown";
import TeamCard from "@/components/teams/TeamCard";
import TeamGrid from "@/components/teams/TeamGrid";
import shibeLogo from "@/assets/icons/shibe-pinkbright.svg";
import type {
  Team,
  GameCategories,
} from "@/components/teams/GameCategoryDropdown";
import gameBackground from "@/assets/pictures/sfcbanner.png";
import valorantBackground from "@/assets/pictures/valorantbackground.webp";
import pubgmobileBackground from "@/assets/pictures/pubgmobilebackground.jpg";
import mlbbBackground from "@/assets/pictures/mlbbbackground.webp";
import mlbbBackgroundbig from "@/assets/pictures/mlbbbackgroundbig.webp";
import GameCategorySidebar from "@/components/teams/GameCategorySidebar";

const gameCategories: GameCategories[] = [
  {
    label: "All Games",
    value: "all",
    iconSrc: shibeLogo,
    backgroundSrc: gameBackground,
  },
  {
    label: "PUBG Mobile",
    value: "pubg-mobile",
    iconSrc: shibeLogo,
    backgroundSrc: pubgmobileBackground,
  },
  {
    label: "Mobile Legends",
    value: "mobile-legends",
    iconSrc: shibeLogo,
    backgroundSrc: mlbbBackground,
  },
  {
    label: "Valorant Mobile",
    value: "valorant-mobile",
    iconSrc: shibeLogo,
    backgroundSrc: valorantBackground,
  },
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
  {
    id: 16,
    name: "SFC X",
    game: "pubg-mobile",
    logo: shibeLogo,
    legacy: false,
  },
];

export default function Teams() {
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

  // desktop banner source, only used on lg and up
  const desktopBannerSrc =
    selectedGame === "all"
      ? sfcBanner
      : gameCategories.find((g) => g.value === selectedGame)?.backgroundSrc ??
        sfcBanner;

  return (
    <section className="section-container pb-10 navbarsm:my-8">
      <div className="max-w mx-auto mb-8">
        {/* mobile and tablet keep static banner */}
        <Image
          src={sfcBanner}
          alt="SFC banner"
          priority
          className="block lg:hidden w-full h-auto border border-gray-100 rounded-md"
        />

        {/* desktop, exact same aspect as original, crops nicely */}
        <div className="hidden lg:block relative w-full aspect-[2522/422] overflow-hidden rounded-md border border-gray-100">
          <Image
            src={desktopBannerSrc}
            alt="SFC banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <p className="font-druk font-medium uppercase text-2xl lg:text-3xl">
        Our Teams
      </p>

      {/* mobile filter keeps All Games */}
      <div className="block md:hidden mt-4 mb-6">
        <GameCategoryDropdown
          title="All Games"
          categories={gameCategories}
          onSelect={(value) => setSelectedGame(value)}
        />
      </div>

      {/* main content and sidebar */}
      <div className="md:flex md:items-start md:gap-6 mt-2">
        <div className="flex-1 min-w-0">
          <p className="font-druk font-medium uppercase text-base lg:text-lg mt-6">
            Active Teams
          </p>
          <div className="mt-4">
            <TeamGrid
              teams={visibleActiveTeams}
              renderTeam={(team) => <TeamCard team={team} />}
            />
          </div>

          <p className="font-druk font-medium uppercase text-base lg:text-lg mt-8">
            Legacy Teams
          </p>
          <div className="mt-4">
            <TeamGrid
              teams={visibleLegacyTeams}
              renderTeam={(team) => <TeamCard team={team} />}
            />
          </div>
        </div>

        {/* desktop sidebar, visible on lg only, and shows only real games */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-4">
          <p className="font-druk font-medium uppercase text-base lg:text-lg mt-6">
            Filter Games
          </p>

          <GameCategorySidebar
            categories={gameCategories.filter((c) => c.value !== "all")}
            onSelect={(value) => setSelectedGame(value)}
          />
        </aside>
      </div>
    </section>
  );
}
