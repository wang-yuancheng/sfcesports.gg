"use client";

import Image from "next/image";
import Link from "next/link";
import { Team } from "@/lib/types";

/**
 * Team card
 * - Name is fixed at the top, always visible and clickable since the whole card is a link
 * - Middle shows logo by default, roster on hover, roster is also forced by prop for mobile
 * - Roster rows use equal heights for 4 or 5 players
 * - Optional bottom label is controlled by prop for reuse on events pages
 */
export default function TeamCard({
  team,
  forceRoster = false,
  showLabel = false,
  labelText = "Circuit Points (#4)",
}: {
  team: Team;
  forceRoster?: boolean; // used by the page level "toggle rosters" button
  showLabel?: boolean;   // developer prop, not shown as a button
  labelText?: string;
}) {
  const players = team.players ?? [];
  const rowCount = Math.min(5, Math.max(4, players.length || 4));
  const roster = players.slice(0, rowCount);

  return (
    <Link
      href="#"
      className="group relative block h-full overflow-hidden rounded-xl border border-gray-200 bg-white"
      aria-label={`Open ${team.name} team page`}
    >
      {/* Layout is a column, header, middle, optional bottom label */}
      <div className="flex h-full flex-col">
        {/* Header, fixed, keeps logo from overlapping */}
        <div className="shrink-0 px-4 pt-3 pb-2 text-center">
          <span className="font-druk text-lg md:text-xl font-semibold text-gray-900">
            {team.name}
          </span>
        </div>

        {/* Middle region, holds logo or roster, never overlaps header or label */}
        <div className="relative flex-1 px-3 pb-3">
          {/* Logo, fades out on hover or when forced roster is on */}
          <div
            className={[
              "absolute inset-0 flex items-center justify-center",
              forceRoster ? "opacity-0" : "opacity-100 group-hover:opacity-0",
              "transition-opacity duration-200",
            ].join(" ")}
          >
            {team.logo ? (
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={192}
                height={192}
                className="max-h-44 w-auto object-contain"
              />
            ) : (
              <div className="h-40 w-40 rounded-md border border-gray-200" />
            )}
          </div>

          {/* Roster overlay, occupies only the middle region */}
          <div
            className={[
              "absolute inset-0 transition-opacity duration-200",
              forceRoster ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "pointer-events-none",
            ].join(" ")}
          >
            <ul
              className="grid h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white/95"
              style={{ gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))` }}
            >
              {roster.map((p, i) => (
                <li
                  key={`${p.name}-${i}`}
                  className={[
                    "flex items-center gap-3 px-4 text-base font-semibold text-gray-800",
                    i < rowCount - 1 ? "border-b border-gray-200" : "",
                  ].join(" ")}
                >
                  <span className="whitespace-nowrap">{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional bottom label for reuse on events page */}
        {showLabel && (
          <div className="shrink-0 border-t bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-700">
            {labelText}
          </div>
        )}
      </div>
    </Link>
  );
}
