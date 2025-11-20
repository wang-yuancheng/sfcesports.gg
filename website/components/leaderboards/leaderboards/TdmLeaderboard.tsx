import type { TdmLeaderboard, TdmMatchData } from "@/lib/types";
import { ordinal } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TdmLeaderboardDialog from "@/components/leaderboards/TdmLeaderboardDialog";

export default function TdmLeaderboard({
  rows,
  matchData,
}: {
  rows: TdmLeaderboard[];
  matchData: TdmMatchData[];
}) {
  const hasLogos = rows.some((r) => r.logo !== undefined && r.logo !== null);
  const hasPrize = rows.some((r) => r.prize !== undefined && r.prize !== null);

  return (
    <div className="w-full">
      <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-[0_1px_5px_-1px_rgba(0,0,0,0.1)] bg-white">
        <table className="w-full">
          <thead className="bg-black">
            <tr>
              <th className="px-3 md:px-6 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Rank
              </th>
              <th
                className={`px-3 md:px-16 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-auto font-druk font-[400] ${
                  hasLogos ? "px-9 md:px-16" : "px-3 md:px-6"
                }`}
              >
                Player
              </th>
              <th className="hidden xs:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Win
              </th>
              <th className="hidden xs:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Lose
              </th>
              <th className="hidden xs:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Draw
              </th>
              <th className="hidden xs:table-cell px-2 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Score
              </th>
              <th
                className={`hidden sm:table-cell md:hidden lg:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[800] ${
                  hasPrize ? "" : "px-3 md:px-5"
                }`}
              >
                Δ±
              </th>
              {hasPrize && (
                <th className="px-3 md:px-5 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] ps-[19px] md:ps-[48px] font-druk font-[400]">
                  Prize
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <Dialog key={r.place}>
                <DialogTrigger asChild>
                  <tr className="text-sm leading-none font-bold hover:bg-pink-bright transition-colors duration-200 cursor-pointer">
                    <td className="px-3 md:px-6 py-1.5 md:py-4">
                      <div className="flex flex-col px-1 text-xs md:text-[19px]">
                        {ordinal(r.place)}
                      </div>
                    </td>

                    <td className="px-3 md:px-6 py-1.5 md:py-4">
                      <div className="flex items-center gap-1 md:gap-3">
                        {r.logo ? (
                          <Image
                            src={r.logo}
                            alt=""
                            className="hidden xs:flex size-6 md:size-8"
                          />
                        ) : null}
                        <p className="text-start text-xs md:text-[19px] uppercase">
                          {r.name}
                        </p>
                      </div>
                    </td>

                    <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                      <div className="text-end text-xs md:text-[19px]">
                        {r.win}
                      </div>
                    </td>

                    <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                      <div className="text-end text-xs md:text-[19px]">
                        {r.loss}
                      </div>
                    </td>

                    <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                      <div className="text-end text-xs md:text-[19px]">
                        {r.draw}
                      </div>
                    </td>

                    <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                      <div className="text-end text-xs md:text-[19px]">
                        {r.score}
                      </div>
                    </td>

                    <td className="hidden sm:table-cell md:hidden lg:table-cell px-2 md:px-4 py-1.5 md:py-4">
                      <div className="text-end text-xs md:text-[19px]">
                        {r.delta}
                      </div>
                    </td>

                    {hasPrize && (
                      <td className="px-3 md:px-5 py-1.5 md:py-4 md:pe-6">
                        <div className="text-end text-xs md:text-[19px] text-pink-bright contrast-150">
                          {r.prize}
                        </div>
                      </td>
                    )}
                  </tr>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold max-md:text-[21px]">
                      Semi-Finals
                    </DialogTitle>
                  </DialogHeader>
                  {(() => {
                    const match = matchData.find((m) => m.name === r.name);
                    return <TdmLeaderboardDialog match={match} />;
                  })()}
                </DialogContent>
              </Dialog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
