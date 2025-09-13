"use client";

import Image from "next/image";
import Link from "next/link";
import { Team } from "@/lib/types";

function FlagIcon({
  code,
  width = 22,
  className = "border border-gray-200",
}: {
  code?: string;
  width?: number;
  className?: string;
}) {
  if (!code) return null;
  const c = code.toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/${c}.svg`}
      alt={code}
      width={width}
      style={{ height: "auto" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

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

  return (
    <Link
      href="#"
      className="group relative block h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_3px_rgba(0,0,0,0.05)]"
      aria-label={`Open ${team.name} team page`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="shrink-0 py-3 border-b border-gray-200 text-center">
          <span className="uppercase text-sm font-bold text-gray-700">
            {team.name}
          </span>
        </div>

        {/* Mobile and small, logo left, names right, always visible */}
        <div className="md:hidden">
          <div className="flex items-stretch">
            {/* logo column, defines row height */}
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

            {/* roster column, stretches to match logo height */}
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
                        "flex items-stretch text-gray-700",
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

        {/* md and up, center logo with hover roster */}
        <div className="relative hidden md:block flex-1 px-3 pb-3">
          {/* Logo */}
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

          {/* Roster overlay */}
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
                    "flex items-center gap-3 px-4 text-gray-700",
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

        {/* Bottom label, optional */}
        {showLabel && (
          <div className="shrink-0 border-t py-3 text-center text-sm font-medium text-gray-700">
            {labelText}
          </div>
        )}
      </div>
    </Link>
  );
}
