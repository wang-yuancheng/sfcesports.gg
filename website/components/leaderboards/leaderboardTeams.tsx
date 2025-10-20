import Image from "next/image";
import React from "react";
import { ATCLeaderboard } from "@/lib/types";

export default function LeaderboardTeams({ team }: { team: ATCLeaderboard }) {
  return (
    <div className="relative flex min-h-[200px] w-full min-w-[170px] flex-col gap-3 rounded-2xl px-4 pt-4 pb-6 text-center drop-shadow-md border-t justify-between bg-white">
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="h-24 w-24 overflow-hidden rounded-xl">
          <Image
            src={team.logo}
            alt=""
            width={100}
            height={100}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-sm leading-[110%] text-nowrap font-semibold">{team.name}</span>
      </div>
      <div className="z-10 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2 rounded-md px-2 py-1 bg-gray-900">
          <span className="text-[10px] text-white leading-tight">{team.advanced}</span>
        </div>
      </div>
    </div>
  );
}
