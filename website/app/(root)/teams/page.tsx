"use client";

import { GameCategories, GameStatsTotals, Team } from "@/lib/types";
import Image, { StaticImageData } from "next/image";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
import { useEffect, useMemo, useState } from "react";
import GameCategoryDropdown from "@/components/teams/GameCategoryDropdown";
import TeamCard from "@/components/teams/TeamCard";
import TeamGrid from "@/components/teams/TeamGrid";
import GameCategorySidebar from "@/components/teams/GameCategorySidebar";
import { teams, gameCategories } from "@/lib/constants";

export default function Teams() {
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const [showLegacy, setShowLegacy] = useState(false);

  // aggregate per game, totals include all teams under the game
  const gameStats: Record<string, GameStatsTotals> = useMemo(() => {
    const agg: Record<string, GameStatsTotals> = {};
    for (const t of teams) {
      if (!agg[t.game]) agg[t.game] = { total: 0, first: 0, second: 0, third: 0 };
      agg[t.game].total += t.gamesPlayed;
      agg[t.game].first += t.first;
      agg[t.game].second += t.second;
      agg[t.game].third += t.third;
    }
    return agg;
  }, []);

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

  // pick the selected category once
  const selectedCategory = useMemo(
    () =>
      gameCategories.find((g) => g.value === selectedGame) as
        | (GameCategories & { bannerSrc?: StaticImageData })
        | undefined,
    [selectedGame]
  );

  // choose banner source, banner first then background then fallback
  const computedBannerSrc =
    selectedGame === "all"
      ? sfcBanner
      : selectedCategory?.bannerSrc ??
        selectedCategory?.backgroundSrc ??
        sfcBanner;

  const [activeBannerSrc, setActiveBannerSrc] = useState(computedBannerSrc);
  const [prevBannerSrc, setPrevBannerSrc] = useState(computedBannerSrc);
  const [bannerLoaded, setBannerLoaded] = useState(true);

  useEffect(() => {
    if (computedBannerSrc === activeBannerSrc) return;
    setPrevBannerSrc(activeBannerSrc);
    setActiveBannerSrc(computedBannerSrc);
    setBannerLoaded(false);
  }, [computedBannerSrc, activeBannerSrc]);

  // if legacy list becomes empty after filtering, ensure it is closed
  useEffect(() => {
    if (visibleLegacyTeams.length === 0 && showLegacy) setShowLegacy(false);
  }, [visibleLegacyTeams.length, showLegacy]);

  const legacyPanelId = "legacy-teams-panel";
  const mobileDropdownTitle = selectedCategory?.label ?? "All Games";

  return (
    <section className="section-container pb-10 navbarsm:my-8">
      <div className="max-w mx-auto mb-8">
        {/* mobile banner with cross fade */}
        <div className="block lg:hidden relative w-full aspect-[2000/300] overflow-hidden rounded-md border border-gray-100">
          <Image
            key={`m-prev-${(prevBannerSrc as any)?.src ?? "fallback"}`}
            src={prevBannerSrc}
            alt="SFC banner previous"
            fill
            className="object-cover object-center"
            priority
          />
          <Image
            key={`m-active-${(activeBannerSrc as any)?.src ?? "fallback"}`}
            src={activeBannerSrc}
            alt="SFC banner"
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              bannerLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setBannerLoaded(true)}
            priority
          />
        </div>

        {/* desktop banner with cross fade */}
        <div className="hidden lg:block relative w-full aspect-[2000/300] overflow-hidden rounded-md border border-gray-100">
          <Image
            key={`prev-${(prevBannerSrc as any)?.src ?? "fallback"}`}
            src={prevBannerSrc}
            alt="SFC banner previous"
            fill
            className="object-cover object-center"
            priority
          />
          <Image
            key={`active-${(activeBannerSrc as any)?.src ?? "fallback"}`}
            src={activeBannerSrc}
            alt="SFC banner"
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              bannerLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setBannerLoaded(true)}
            priority
          />
        </div>
      </div>

      <p className="font-druk font-medium uppercase text-2xl lg:text-3xl">
        Our Teams
      </p>

      {/* mobile filter, title mirrors selection */}
      <div className="block lg:hidden mt-4 mb-6">
        <GameCategoryDropdown
          title={mobileDropdownTitle}
          categories={gameCategories}
          onSelect={(value) => setSelectedGame(value)}
        />
      </div>

      {/* main content and sidebar */}
      <div className="md:flex md:items-start md:gap-6 mt-2">
        {/* main column */}
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

          {/* legacy toggle appears only if there is at least one legacy team in view */}
          {visibleLegacyTeams.length > 0 && (
            <>
              <div className="mt-8 flex items-center justify-end">
                {/* desktop toggle full width */}
                <button
                  type="button"
                  onClick={() => setShowLegacy((v) => !v)}
                  aria-expanded={showLegacy}
                  aria-controls={legacyPanelId}
                  className="hidden lg:flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  <span>
                    {showLegacy ? "Hide legacy teams" : "Show legacy teams"}
                  </span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      showLegacy ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </button>
                {/* mobile toggle full width */}
                <button
                  type="button"
                  onClick={() => setShowLegacy((v) => !v)}
                  aria-expanded={showLegacy}
                  aria-controls={legacyPanelId}
                  className="w-full lg:hidden inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  <span className="font-medium">
                    {showLegacy ? "Hide legacy teams" : "Show legacy teams"}
                  </span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      showLegacy ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </button>
              </div>

              <div
                id={legacyPanelId}
                aria-hidden={!showLegacy}
                className={[
                  "mt-4 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                  showLegacy
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <TeamGrid
                  teams={visibleLegacyTeams}
                  renderTeam={(team) => <TeamCard team={team} />}
                />
              </div>
            </>
          )}
        </div>

        {/* desktop sidebar with per game stats */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-4">
          <p className="font-druk font-medium uppercase text-base lg:text-lg mt-6">
            Filter Games
          </p>
          <GameCategorySidebar
            value={selectedGame === "all" ? null : selectedGame}
            categories={gameCategories.filter((c) => c.value !== "all")}
            onSelect={(value) => setSelectedGame(value)}
            gameStats={gameStats}
          />
        </aside>
      </div>
    </section>
  );
}
