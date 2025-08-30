"use client";

import Image from "next/image";
import type { TeamDropdown, Team } from "@/components/teams/TeamDropdown";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 text-center">
      {team.logo ? (
        <Image
          src={team.logo}
          alt={team.name}
          width={64}
          height={64}
          className="mb-3 rounded-md object-cover"
        />
      ) : (
        <div className="mb-3 h-16 w-16 rounded-md border border-gray-200" />
      )}
      <div className="text-sm font-medium text-gray-800">{team.name}</div>
    </div>
  );
}
