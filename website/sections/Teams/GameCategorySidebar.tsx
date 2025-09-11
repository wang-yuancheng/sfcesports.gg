"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GameCategories, GameStatsTotals } from "@/lib/types";

export default function GameCategorySidebar({
  categories,
  onSelect,
  value,
  gameStats,
}: {
  categories: GameCategories[];
  onSelect?: (value: string) => void;
  value?: string | null;
  gameStats?: Record<string, GameStatsTotals>;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(value ?? null);
  }, [value]);

  return (
    <div className="w-full space-y-4">
      <ul className="flex flex-col gap-4">
        {categories.map((i, idx) => {
          const isActive = selected === i.value;
          const panelId = `stats-${idx}`;
          const stats =
            gameStats?.[i.value] ?? { total: 0, first: 0, second: 0, third: 0 };

          return (
            <li key={idx}>
              <div
                className={[
                  "rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white",
                  isActive ? "ring-2 ring-black/20" : "",
                ].join(" ")}
              >
                <button
                  type="button"
                  aria-selected={isActive}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => {
                    if (selected === i.value) {
                      setSelected(null);
                      onSelect?.("all");
                    } else {
                      setSelected(i.value);
                      onSelect?.(i.value);
                    }
                  }}
                  className="group relative flex h-[66px] w-full items-center gap-3 px-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {/* background image with hover brighten */}
                  <div className="absolute inset-0">
                    <Image
                      src={i.backgroundSrc}
                      alt=""
                      fill
                      priority={idx < 3}
                      className="object-cover object-center transition duration-300 group-hover:brightness-110"
                    />
                    <span className="absolute inset-0 bg-black/35 opacity-100 transition-opacity duration-300 group-hover:opacity-20" />
                    <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* foreground */}
                  <span className="relative z-10 flex items-center gap-3 text-white">
                    <span className="flex h-8 w-8 items-center justify-center">
                      <Image
                        src={i.iconSrc}
                        alt={i.label}
                        width={30}
                        height={30}
                        className="drop-shadow-sm"
                      />
                    </span>
                    <span className="font-semibold text-lg drop-shadow-sm">
                      {i.label}
                    </span>
                  </span>
                </button>

                {/* stats panel on lg and up */}
                <div
                  id={panelId}
                  className={[
                    "hidden lg:block overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                    isActive ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="bg-white px-5 pb-5 pt-4">
                    <p className="text-gray-500 text-xs font-medium">
                      Total matches played
                    </p>
                    <div className="mt-2 text-2xl font-bold text-gray-900">
                      {stats.total}
                    </div>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            1st
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {stats.first}
                        </span>
                      </li>

                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            2nd
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {stats.second}
                        </span>
                      </li>

                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            3rd
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {stats.third}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
