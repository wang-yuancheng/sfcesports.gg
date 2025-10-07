"use client";

import Image from "next/image";
import Link from "next/link";
import { Team } from "@/lib/types";
import FlagIcon from "@/components/ui/flagicon";

// To create label add props: showLabel={true} labelText={team.label}
export default function TeamCard({
  team,
  forceRoster = false,
  showLabel,
  labelText = "No label given",
}: {
  team: Team;
  forceRoster?: boolean;
  showLabel?: boolean;
  labelText?: string;
}) {
  const players = team.players ?? [];
  const rowCount = Math.min(5, Math.max(4, players.length || 4));
  const roster = players.slice(0, rowCount);
  const teamHref = `/teams/${team.slug}`;

  return (
    <div className="group relative block h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_3px_rgba(0,0,0,0.05)] md:hover:border-pink/50 md:hover:shadow-pink-light duration-300">
      {/* everything except the bottom label is clickable */}
      <Link
        href={teamHref}
        aria-label={`Open ${team.name} team page`}
        className="flex h-full flex-col"
      >
        {/* Header */}
        <div className="shrink-0 py-3 border-b border-gray-200 text-center">
          <span className="uppercase text-sm font-bold text-gray-600">
            {team.name}
          </span>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-stretch">
            <div className="flex h-28 w-28 xs:h-40 xs:w-40 sm:h-52 sm:w-52 shrink-0 items-center justify-center">
              {team.logo ? (
                <Image
                  src={team.logo}
                  alt={`${team.name} logo`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-full w-full border border-gray-200" />
              )}
            </div>

            {/* roster column */}
            <div className="flex-1">
              <div className="h-full border-l border-gray-200">
                <ul
                  className="grid h-full w-full overflow-hidden"
                  style={{
                    gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
                  }}
                >
                  {roster.map((p, i) => (
                    <li
                      key={`${p.name}-${p.country ?? "XX"}-${i}`}
                      className={[
                        "flex items-stretch text-gray-600",
                        i < rowCount - 1 ? "border-b border-gray-200" : "",
                      ].join(" ")}
                    >
                      <span className="flex-1 flex items-center gap-2 px-4 whitespace-nowrap">
                        <FlagIcon code={p.country} />
                        {p.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* md and up */}
        <div className="relative hidden md:block flex-1 px-3 pb-3">
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

          {/* Roster */}
          <div
            className={[
              "absolute inset-0 transition-opacity duration-200",
              forceRoster ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "pointer-events-none",
            ].join(" ")}
          >
            <ul
              className="grid h-full w-full overflow-hidden"
              style={{
                gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
              }}
            >
              {roster.map((p, i) => (
                <li
                  key={`${p.name}-${p.country ?? "XX"}-md-${i}`}
                  className={[
                    "flex items-center gap-3 px-4 text-gray-600",
                    i < rowCount - 1 ? "border-b border-gray-200" : "",
                  ].join(" ")}
                >
                  <FlagIcon code={p.country} />
                  <span className="whitespace-nowrap">{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* Bottom label, not clickable */}
      {showLabel && (
        <div className="shrink-0 border-t py-3 text-center text-sm font-medium text-gray-600">
          {labelText}
        </div>
      )}
    </div>
  );
}
