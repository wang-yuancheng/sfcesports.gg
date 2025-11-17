import Image from "next/image";
import React from "react";
import templogo from "@/assets/icons/shibe-pinkbright.svg";
import type { MatchType } from "@/lib/types";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Match(props: MatchType) {
  const {
    slot1 = "",
    slot1Score = 0,
    slot2 = "",
    slot2Score = 0,
    slot1logo = templogo,
    slot2logo = templogo,
    date = "",
    round = "",
    status = "completed",
    details = false,
    bgColor = "bg-gray-100",
    r1,
    r2,
    r3,
  } = props;

  const s1lost = slot1Score < slot2Score;
  const s2lost = slot2Score < slot1Score;
  const Card = (
    <div
      className={`flex w-[220px] shrink-0 flex-col gap-1 rounded-sm p-1 md:w-[264px] md:gap-1.5 md:rounded-lg md:p-2 ${bgColor} shadow-[0px_8px_24px_0px_#FFFFFF4D] ${
        details
          ? "cursor-pointer hover:bg-pink-bright/70 transition-colors duration-200"
          : ""
      }`}
    >
      <div className="flex h-3 items-center justify-between gap-2.5 text-[8px] leading-none font-bold uppercase md:h-4 md:text-[10px]">
        <p className="ps-1.5">{date}</p>
        <p className="rounded-xs px-1 py-0.5 uppercase md:rounded-sm md:px-[5px] md:py-[3px] bg-white">
          {status}
        </p>
      </div>

      {/* Slot 1 */}
      <div className="flex h-8 items-center justify-between rounded-xs bg-white p-[3px] md:h-[55px] md:rounded-md">
        <div
          className={`flex min-w-0 items-center gap-1 ${
            s1lost ? "opacity-50" : ""
          }`}
        >
          <Image src={slot1logo} alt="" className="size-5 md:size-10" />
          <p className="max-w-full truncate text-[10px] leading-none font-bold uppercase md:text-xs">
            {slot1}
          </p>
        </div>
        <div
          className={`flex size-[26px] items-center justify-center rounded-[2px] px-[7.5px] md:size-[49px] md:rounded-[3px] ${
            s1lost ? "" : "bg-gray-100"
          }`}
        >
          <p
            className={`text-base leading-none font-bold md:text-2xl ${
              s1lost ? "opacity-50" : ""
            }`}
          >
            {slot1Score}
          </p>
        </div>
      </div>

      {/* Slot 2 */}
      <div className="flex h-8 items-center justify-between rounded-xs bg-white p-[3px] md:h-[55px] md:rounded-md">
        <div
          className={`flex min-w-0 items-center gap-1 ${
            s2lost ? "opacity-50" : ""
          }`}
        >
          <Image src={slot2logo} alt="" className="size-5 md:size-10" />
          <p className="max-w-full truncate text-[10px] leading-none font-bold uppercase md:text-xs">
            {slot2}
          </p>
        </div>
        <div
          className={`flex size-[26px] items-center justify-center rounded-[2px] px-[7.5px] md:size-[49px] md:rounded-[3px] ${
            s2lost ? "" : "bg-gray-100"
          }`}
        >
          <p
            className={`text-base leading-none font-bold md:text-2xl ${
              s2lost ? "opacity-50" : ""
            }`}
          >
            {slot2Score}
          </p>
        </div>
      </div>

      <div className="flex h-3 items-center justify-between md:h-4">
        <p className="ps-1 text-[8px] leading-none font-extrabold uppercase">
          {round}
        </p>

        {details && (
          <svg
            className="size-4"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        )}
      </div>
    </div>
  );

  type Outcome = "win" | "lose" | "tie";

  function getOutcome(ps: number, os: number): Outcome {
    if (ps > os) return "win";
    if (ps < os) return "lose";
    return "tie";
  }

  function formatOutcomeText(outcome: Outcome): string {
    if (outcome === "win") return "Win";
    if (outcome === "lose") return "Lose";
    return "Tie";
  }

  // If details = false, do not wrap in dialog
  if (!details) return Card;

  return (
    <Dialog>
      <DialogTrigger asChild>{Card}</DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        {/* Header (title) */}
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold max-md:text-[21px] uppercase">
            Playoffs - {round}
          </DialogTitle>
        </DialogHeader>

        <div className="relative flex h-full flex-col bg-gray-50 flex-grow overflow-y-auto">
          <div className="hide-scrollbar flex-grow overflow-y-auto">
            <section className="relative w-full">
              <div>
                <div className="relative flex flex-col gap-5 md:gap-8">
                  <div className="flex flex-col gap-2.5">
                    {([r1, r2, r3] as const).map((roundData, idx) => {
                      if (!roundData) return null;

                      const ps = roundData.s1score;
                      const os = roundData.s2score;

                      const outcome = getOutcome(ps, os);

                      const isPlayerWinner = outcome === "win";
                      const isOpponentWinner = outcome === "lose";

                      return (
                        <div
                          key={idx}
                          className="flex flex-col gap-2.5 max-md:gap-0.5"
                        >
                          <div className="flex">
                            {/* Player side */}
                            <div className="relative flex min-h-[55px] w-full justify-end gap-2 rounded-md bg-white p-1 max-md:rounded-t-none max-md:rounded-b-sm max-md:p-1.5">
                              <div className="flex items-center gap-4 max-md:flex-1 max-md:flex-col-reverse max-md:justify-center max-md:gap-1">
                                <h5 className="text-[16px] max-md:text-center max-md:text-[12px] text-right max-w-full truncate leading-none font-bold uppercase md:text-sm text-wrap">
                                  {slot1}
                                </h5>
                              </div>
                              <div
                                className={`relative flex h-auto min-w-[49px] items-center justify-center self-stretch rounded-md ${
                                  isPlayerWinner
                                    ? "bg-pink-bright"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                <span
                                  className={`text-base leading-none font-bold md:text-2xl ${
                                    isPlayerWinner ? "text-white" : ""
                                  }`}
                                >
                                  {ps}
                                </span>
                              </div>
                            </div>

                            {/* Middle: round + result */}
                            <div className="hidden md:contents">
                              <div className="flex min-w-[130px] flex-col items-center justify-center text-center px-2.5">
                                <div className="flex w-fit items-center justify-center rounded-sm px-2 py-1 text-gray-600 bg-white">
                                  <span className="font-druk text-[13px] flex items-center gap-1 uppercase">
                                    Round {idx + 1}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Opponent side */}
                            <div className="relative flex min-h-[55px] w-full justify-end gap-2 rounded-md bg-white p-1 max-md:rounded-t-none max-md:rounded-b-sm max-md:p-1.5 flex-row-reverse">
                              <div className="mr-4 flex items-center gap-4 max-md:flex-1 max-md:flex-col-reverse max-md:justify-center max-md:gap-1 flex-row-reverse">
                                <h5 className="text-[16px] max-md:text-center max-md:text-[12px] max-w-full truncate leading-none font-bold uppercase md:text-sm">
                                  {slot2}
                                </h5>
                              </div>
                              <div
                                className={`relative flex h-auto min-w-[49px] items-center justify-center self-stretch rounded-md ${
                                  isOpponentWinner
                                    ? "bg-pink-bright"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                <span
                                  className={`text-base leading-none font-bold md:text-2xl ${
                                    isOpponentWinner ? "text-white" : ""
                                  }`}
                                >
                                  {os}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
