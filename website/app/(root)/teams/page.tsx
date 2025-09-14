"use client";

import { GameCategories, GameStatsTotals, Team } from "@/lib/types";
import { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";
import TeamBanner from "@/components/teams/TeamBanner";
import GameCategoryDropdown from "@/sections/Teams/GameCategoryDropdown";
import TeamCard from "@/sections/Teams/TeamCard";
import TeamGrid from "@/sections/Teams/TeamGrid";
import GameCategorySidebar from "@/sections/Teams/GameCategorySidebar";
import LegacyTeamToggle from "@/components/teams/LegacyTeamToggle";
import { teams, gameCategories } from "@/lib/constants";

export default function TeamsPage() {
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const [showLegacy, setShowLegacy] = useState(false);
  const [showAllRosters, setShowAllRosters] = useState(false);

  const gameStats: Record<string, GameStatsTotals> = useMemo(() => {
    const agg: Record<string, GameStatsTotals> = {};
    for (const t of teams as Team[]) {
      if (!agg[t.game])
        agg[t.game] = { total: 0, first: 0, second: 0, third: 0 };
      agg[t.game].total += t.gamesPlayed;
      agg[t.game].first += t.first;
      agg[t.game].second += t.second;
      agg[t.game].third += t.third;
    }
    return agg;
  }, []);

  const activeTeamsOnly = useMemo(() => teams.filter((t) => !t.legacy), []);
  const legacyTeamsOnly = useMemo(() => teams.filter((t) => t.legacy), []);

  const visibleActive = useMemo(() => {
    if (selectedGame === "all") return activeTeamsOnly;
    return activeTeamsOnly.filter((t) => t.game === selectedGame);
  }, [selectedGame, activeTeamsOnly]);

  const visibleLegacy = useMemo(() => {
    if (selectedGame === "all") return legacyTeamsOnly;
    return legacyTeamsOnly.filter((t) => t.game === selectedGame);
  }, [selectedGame, legacyTeamsOnly]);

  const selectedCategory = useMemo(
    () =>
      gameCategories.find((g) => g.value === selectedGame) as
        | (GameCategories & { bannerSrc?: StaticImageData })
        | undefined,
    [selectedGame]
  );
  const mobileDropdownTitle = selectedCategory?.label ?? "All Games";

  useEffect(() => {
    if (visibleLegacy.length === 0 && showLegacy) setShowLegacy(false);
  }, [visibleLegacy.length, showLegacy]);

  return (
    <section className="section-container pb-4 navbarsm:my-8">
      <div className="max-w mx-auto mb-8">
        <TeamBanner
          selectedGame={selectedGame}
          gameCategories={gameCategories}
        />
      </div>

      {/* Title */}
      <div className="md:hidden mt-1 mb-1 flex items-center gap-3">
        <p className="font-druk font-medium uppercase text-3xl lg:text-4xl">
          Our Teams
        </p>
      </div>

      {/* mobile filter */}
      <div className="block lg:hidden mt-4 mb-6">
        <GameCategoryDropdown
          title={mobileDropdownTitle}
          value={selectedGame === "all" ? null : selectedGame}
          categories={gameCategories}
          onSelect={(value) => setSelectedGame(value)}
        />
      </div>

      {/* main content */}
      <div className="md:flex md:items-start md:gap-6 mt-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <p className="hidden md:block font-druk font-medium uppercase text-base lg:text-lg pt-1">
              Active Teams
            </p>
            <div className="ml-auto hidden md:block">
              <button
                type="button"
                aria-pressed={showAllRosters}
                onClick={() => setShowAllRosters((v) => !v)}
                className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-[7px] text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                title="Toggle all rosters"
              >
                {showAllRosters ? "Hide rosters" : "Show rosters"}
              </button>
            </div>
          </div>
          <div className="md:mt-4">
            <TeamGrid
              teams={visibleActive}
              renderTeam={(team) => (
                <TeamCard team={team} forceRoster={showAllRosters} showLabel={false}/>
              )}
            />
          </div>

          {visibleLegacy.length > 0 && (
            <>
              <div className="mt-8">
                <LegacyTeamToggle
                  show={showLegacy}
                  onToggle={() => setShowLegacy((v) => !v)}
                />
              </div>

              <div
                aria-hidden={!showLegacy}
                className={[
                  "mt-4 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                  showLegacy
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <TeamGrid
                  teams={visibleLegacy}
                  renderTeam={(team) => (
                    <TeamCard team={team} forceRoster={showAllRosters} showLabel={false}/>
                  )}
                />
              </div>
            </>
          )}
        </div>

        {/* sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-4">
          <p className="font-druk font-medium uppercase text-base lg:text-lg my-1">
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
