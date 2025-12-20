"use client";

import React, { useState } from "react";
import { Player } from "@/lib/types";
import Image from "next/image";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import FlagIcon from "@/components/ui/FlagIcon";

export default function PlayerCard({ player }: { player: Player }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header row */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group w-full text-left relative"
      >
        {/* Wider hover background */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-3 md:-inset-x-4 inset-y-1 rounded-xl transition-colors lg:group-hover:bg-gray-100"
        />
        {/* Content */}
        <div className="relative flex items-center gap-3 py-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={player.profile}
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-2 font-semibold text-lg truncate">
              <FlagIcon code={player.country} />
              <span className="truncate">{player.name}</span>
            </div>
            <div className="text-gray-600 truncate">{player.role}</div>
          </div>

          <div
            className={`shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <Image
              src={ChevronDown}
              alt="Chevron Down"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </button>

      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-2 items-center px-2 my-4">
          <div className="rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-y-6">
              <div className="sm:text-center">
                <div className="font-semibold">Years active</div>
                <div className="text-gray-700">{player.active}</div>
              </div>
              <div className="sm:text-center">
                <div className="font-semibold">Earnings</div>
                <div className="text-gray-700">${player.earnings}</div>
              </div>
              <div className="sm:text-center">
                <div className="font-semibold">Device</div>
                <div className="text-gray-700">{player.device}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
