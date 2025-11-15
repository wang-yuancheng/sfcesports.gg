import { TdmMatchData, MatchRound } from "@/lib/types";

const rounds = ["r1", "r2", "r3", "r4", "r5", "r6", "r7"] as const;

type Outcome = "win" | "lose" | "tie" | "bye";

function outcomeFromRes(res: MatchRound["res"]): Outcome {
  if (res === "W") return "win";
  if (res === "L") return "lose";
  else return "tie";
}

function getRoundOutcome(round: MatchRound): Outcome {
  const { ps, os, res } = round;
  const fallback = outcomeFromRes(res);

  // If scores are not numbers, rely on res
  if (ps === "-" || os === "-") return fallback;

  // If 0-0, still use .res
  if (ps === 0 && os === 0) return fallback;

  const diff = Math.abs(ps - os);

  // <2 difference means tie (e.g. 12-11)
  if (diff < 2) return "tie";
  if (ps > os) return "win";
  if (os > ps) return "lose";

  // Equal non-zero scores, treat as tie
  return "tie";
}

function formatOutcomeText(outcome: Outcome): string {
  if (outcome === "win") return "Win";
  if (outcome === "lose") return "Lose";
  return "Tie";
}

export default function TdmLeaderboardDialog({
  match,
}: {
  match: TdmMatchData | undefined;
}) {
  if (!match) {
    return (
      <div className="rounded-lg border border-neutral-200 p-3 text-sm text-neutral-600">
        No match data found.
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col bg-gray-50 flex-grow overflow-y-auto">
      <div className="hide-scrollbar flex-grow overflow-y-auto">
        <section className="relative w-full">
          <div>
            <div className="relative flex flex-col gap-5 md:gap-8">
                <div className="flex flex-col gap-2.5">
                  {rounds.map((roundKey, idx) => {
                    const round = match[roundKey];

                    // If for some reason a round is missing, skip it
                    if (!round) return null;

                    const outcome = getRoundOutcome(round);
                    const outcomeText = formatOutcomeText(outcome);

                    const isPlayerWinner = outcome === "win";
                    const isOpponentWinner = outcome === "lose";

                    return (
                      <div
                        key={roundKey}
                        className="flex flex-col gap-2.5 max-md:gap-0.5 cursor-pointer"
                      >
                        <div className="flex">
                          {/* Player side */}
                          <div className="relative flex min-h-[55px] w-full justify-end gap-2 rounded-md bg-white p-1 max-md:rounded-t-none max-md:rounded-b-sm max-md:p-1.5">
                            <div className="flex items-center gap-4 max-md:flex-1 max-md:flex-col-reverse max-md:justify-center max-md:gap-1">
                              <h5 className="text-[16px] max-md:text-center max-md:text-[12px] text-right max-w-full truncate leading-none font-bold uppercase md:text-sm text-wrap">
                                {match.name}
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
                                {round.ps}
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
                              <span className="text-gray-600/80 font-bold text-[13px]">
                                {outcomeText}
                              </span>
                            </div>
                          </div>

                          {/* Opponent side */}
                          <div className="relative flex min-h-[55px] w-full justify-end gap-2 rounded-md bg-white p-1 max-md:rounded-t-none max-md:rounded-b-sm max-md:p-1.5 flex-row-reverse">
                            <div className="mr-4 flex items-center gap-4 max-md:flex-1 max-md:flex-col-reverse max-md:justify-center max-md:gap-1 flex-row-reverse">
                              <h5 className="text-[16px] max-md:text-center max-md:text-[12px] max-w-full truncate leading-none font-bold uppercase md:text-sm">
                                {round.opp}
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
                                {round.os}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Mobile result text under each round */}
                        <div className="md:hidden flex items-center justify-center">
                          <span className="text-gray-600/80 font-bold text-[14px] uppercase">
                            Round {idx + 1} · {outcomeText}
                          </span>
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
  );
}
