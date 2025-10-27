import { Standing } from "@/lib/types";
import { ordinal } from "@/lib/utils";
import React from "react";

export default function EventDialogLeaderboard({ rows }: { rows: Standing[] }) {
  const hasPrize = rows.some((r) => !!r.prize);
  const isTeamEvent = rows.some((r) => !!r.team);

  if (!rows?.length) {
    return (
      <div className="rounded-lg border border-neutral-200 p-3 text-sm text-neutral-600">
        No standings yet.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="w-[84px] px-4 py-2 text-start text-[10px] md:text-xs uppercase font-druk font-[400]">
                Rank
              </th>
              <th className="px-4 py-2 text-start text-[10px] md:text-xs uppercase font-druk font-[400]">
                {isTeamEvent ? "Team" : "Player"}
              </th>
              {hasPrize && (
                <th className="px-3 md:px-5 py-2 text-end text-[10px] md:text-xs uppercase font-druk font-[400] ps-[19px] md:ps-[48px]">
                  Prize
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-100">
            {rows.map((r) => (
              <tr key={r.place} className="text-sm font-medium">
                <td className="px-4 py-2">
                  <span className="inline-flex h-6 min-w-[1.75rem] items-center justify-center font-bold rounded px-2">
                    {ordinal(r.place)}
                  </span>
                </td>
                <td className="font-bold px-4 py-2 uppercase">
                  {r.team ?? r.name ?? "TBA"}
                </td>
                {r.prize && (
                  <td className="px-3 md:px-5 py-2 text-end">
                    <span className="font-bold text-pink-bright contrast-150 text-xs md:text-[15px]">
                      {r.prize || ""}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
