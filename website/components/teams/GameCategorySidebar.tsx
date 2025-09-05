import Image from "next/image";
import { useState } from "react";
import type { GameCategories } from "@/components/teams/GameCategoryDropdown";

export default function GameCategorySidebar({
  categories,
  onSelect,
}: {
  categories: GameCategories[];
  onSelect?: (value: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full space-y-4">
      <ul className="flex flex-col gap-4">
        {categories.map((i, idx) => {
          const isActive = selected === i.value;
          return (
            <li key={idx}>
              <button
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  setSelected(i.value);
                  onSelect?.(i.value);
                }}
                className={[
                  "group relative flex w-full items-center justify-start overflow-hidden rounded-xl",
                  "border bg-white bg-center bg-cover px-5 shadow-sm",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                  "border-gray-100 dark:border-gray-700",
                  // base height stays 66, expanded height only on lg and above
                  "h-[66px] lg:transition-[height] lg:duration-300",
                  isActive ? "lg:h-[116px] ring-2 ring-black/20" : "lg:h-[66px]",
                ].join(" ")}
              >
                {/* background image */}
                <div className="absolute inset-0">
                  <Image
                    src={i.backgroundSrc}
                    alt=""
                    fill
                    priority={idx < 3}
                    className="object-cover object-center"
                  />
                </div>

                {/* dark overlay */}
                <span className="absolute inset-0 z-0 rounded-xl bg-black/50 opacity-50 transition-opacity group-hover:opacity-60" />

                {/* foreground */}
                <span className="relative z-10 flex items-center gap-3 text-white">
                  <span className="flex h-10 w-10 items-center justify-center">
                    <Image
                      src={i.iconSrc}
                      alt={i.label}
                      width={40}
                      height={40}
                      className="drop-shadow-sm"
                    />
                  </span>
                  <span className="font-medium text-base lg:text-lg drop-shadow-sm">
                    {i.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
