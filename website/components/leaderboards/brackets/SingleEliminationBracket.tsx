import React from "react";
import Image from "next/image";
import Match from "@/components/leaderboards/brackets/Match";
import templogo from "@/assets/icons/shibe-pinkbright.svg";
import type { MatchType } from "@/lib/types";

export default function SingleEliminationBracket({
  quarterfinal,
  semifinal,
  grandfinal,
}: {
  quarterfinal: MatchType[];
  semifinal: MatchType[];
  grandfinal: MatchType[];
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="bg-white shadow-[0_1px_5px_-1px_rgba(0,0,0,0.1)] rounded-lg md:rounded-2xl">
        <div className="py-4 md:py-8">
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-9 md:gap[50px]">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Quarterfinal
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {quarterfinal.map((m) => (
                        <div
                          key={m.slot1}
                          className="flex flex-col justify-center"
                        >
                          <Match
                            slot1={m.slot1}
                            slot1Score={m.slot1Score}
                            slot2={m.slot2}
                            slot2Score={m.slot2Score}
                            slot1logo={m.slot1logo}
                            slot2logo={m.slot2logo}
                            date={m.date}
                            round={m.round}
                            status={m.status}
                            details={m.details}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-[17px]" />
                    <div className="flex w-10 flex-1 flex-col justify-center md:w-15">
                      <div className="flex w-full md:h-[calc(176px+16px)] h-[calc(108px+16px)]">
                        <div className="flex grow flex-col justify-between">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                        <div className="w-0.5 bg-[#E0E0E0]" />
                        <div className="flex grow flex-col justify-center">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-10 flex-1 flex-col justify-center md:w-15">
                      <div className="flex w-full md:h-[calc(176px+16px)] h-[calc(108px+16px)]">
                        <div className="flex grow flex-col justify-between">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                        <div className="w-0.5 bg-[#E0E0E0]" />
                        <div className="flex grow flex-col justify-center">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Semifinal
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col gap-4">
                      {semifinal.map((m) => (
                        <div
                          key={m.slot1}
                          className="flex flex-col justify-center h-[calc(108px*2+16px)] md:h-[calc(176px*2+16px)]"
                        >
                          <Match
                            slot1={m.slot1}
                            slot1Score={m.slot1Score}
                            slot2={m.slot2}
                            slot2Score={m.slot2Score}
                            slot1logo={m.slot1logo}
                            slot2logo={m.slot2logo}
                            date={m.date}
                            round={m.round}
                            status={m.status}
                            details={m.details}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-[17px]" />
                    <div className="flex w-10 flex-1 flex-col justify-center md:w-15">
                      <div className="flex w-full md:h-[calc((176px+16px)*2)] h-[calc((108px+16px)*2)]">
                        <div className="flex grow flex-col justify-between">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                        <div className="w-0.5 bg-[#E0E0E0]" />
                        <div className="flex grow flex-col justify-center">
                          <div className="h-0.5 bg-[#E0E0E0]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Grand Final
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {grandfinal.map((m) => (
                        <div
                          key={m.slot1}
                          className="flex flex-col justify-center h-[calc(108px*4+16px*3)] md:h-[calc(176px*4+16px*3)]"
                        >
                          <Match
                            slot1={m.slot1}
                            slot1Score={m.slot1Score}
                            slot2={m.slot2}
                            slot2Score={m.slot2Score}
                            slot1logo={m.slot1logo}
                            slot2logo={m.slot2logo}
                            date={m.date}
                            round={m.round}
                            status={m.status}
                            details={m.details}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-[17px]" />
                    <div className="flex w-10 flex-1 flex-col justify-center md:w-15 md:h-[176px] h-[108px]">
                      <div className="h-0.5 bg-[#E0E0E0]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Winner
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex flex-col justify-center h-[calc(108px*4+16px*3)] md:h-[calc(176px*4+16px*3)]">
                        <div className="flex w-[220px] shrink-0 flex-col gap-1 rounded-sm p-1 md:w-[264px] md:gap-1.5 md:rounded-lg md:p-2 bg-pink-bright">
                          <div className="flex h-3 items-center justify-between gap-2.5 text-[8px] leading-none font-bold uppercase md:h-4 md:text-[10px]">
                            <p className="ps-1.5 text-white">Winner</p>
                            <p className="rounded-xs px-1 py-0.5 uppercase md:rounded-sm md:px-[5px] md:py-[3px] invisible" />
                          </div>
                          <div className="flex h-8 items-center justify-between rounded-xs bg-white p-[3px] ps-[9px] md:h-[55px] md:rounded-md">
                            <div className="flex min-w-0 items-center gap-1">
                              <Image
                                src={templogo}
                                alt=""
                                className="size-5 md:size-10"
                              />
                              <p className="max-w-full truncate text-[10px] leading-none font-bold uppercase md:text-xs">
                                SFC SG
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
