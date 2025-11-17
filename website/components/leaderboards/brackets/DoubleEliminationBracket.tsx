import React from "react";
import Match from "@/components/leaderboards/brackets/Match";
import type { MatchType } from "@/lib/types";

type BracketConnectorMergeProps = {
  topClass: string;
  verticalClass: string;
  bottomClass: string;
  centerClass: string;
};

const BracketConnectorMerge: React.FC<BracketConnectorMergeProps> = ({
  topClass,
  verticalClass,
  bottomClass,
  centerClass,
}) => (
  <>
    {/* Top horizontal line */}
    <div className={`absolute h-0.5 bg-[#E0E0E0] ${topClass}`} />
    {/* Middle vertical line */}
    <div className={`absolute w-0.5 bg-[#E0E0E0] ${verticalClass}`} />
    {/* Bottom horizontal line */}
    <div className={`absolute h-0.5 bg-[#E0E0E0] ${bottomClass}`} />
    {/* Center horizontal line */}
    <div className={`absolute h-0.5 bg-[#E0E0E0] ${centerClass}`} />
  </>
);

type BracketConnectorAdvanceProps = {
  line1Class: string;
  line2Class: string;
};

const BracketConnectorAdvance: React.FC<BracketConnectorAdvanceProps> = ({
  line1Class,
  line2Class,
}) => (
  <>
    <div className={`absolute h-0.5 bg-[#E0E0E0] ${line1Class}`} />
    <div className={`absolute h-0.5 bg-[#E0E0E0] ${line2Class}`} />
  </>
);

export default function DoubleEliminationBracket({
  ubQuarterfinal,
  lbQuarterfinal,
  ubSemifinal,
  lbSemifinal,
  ubFinal,
  lbFinal,
  grandfinal,
}: {
  ubQuarterfinal: MatchType[];
  lbQuarterfinal: MatchType[];
  ubSemifinal: MatchType[];
  lbSemifinal: MatchType[];
  ubFinal: MatchType[];
  lbFinal: MatchType[];
  grandfinal: MatchType[];
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="bg-white shadow-[0_1px_5px_-1px_rgba(0,0,0,0.1)] rounded-lg md:rounded-2xl">
        <div className="py-4 md:py-8">
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-9 md:gap-[50px]">
              {/* UPPER AND LOWER BRACKET COMBINED COLUMN */}
              <div className="flex flex-col gap-4">
                <div className="flex">
                  {/* Upper Bracket Quarterfinal */}
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Upper Bracket Quarterfinal
                      </p>
                    </div>
                    <div className="md:h-3" />
                    <div className="flex flex-1 flex-col gap-4">
                      {ubQuarterfinal.map((m) => (
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
                            r1={m.r1}
                            r2={m.r2}
                            r3={m.r3}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Lower Bracket Quarterfinal */}
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Lower Bracket Quarterfinal
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {lbQuarterfinal.map((m) => (
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
                            r1={m.r1}
                            r2={m.r2}
                            r3={m.r3}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connectors column 1 */}
                  <div>
                    <div className="relative h-full w-[40px]">
                      {/* Two "winner goes to seeded player" connectors */}
                      <BracketConnectorAdvance
                        line1Class="left-5 right-0 top-[68px] md:top-[90px]"
                        line2Class="left-0 right-0 top-[102px] md:top-[148px]"
                      />
                      <BracketConnectorAdvance
                        line1Class="left-5 right-0 top-[192px] md:top-[282px]"
                        line2Class="left-0 right-0 top-[226px] md:top-[341px]"
                      />

                      {/* One "two matches merge into one" connector */}
                      <BracketConnectorMerge
                        topClass="left-0 right-5 top-[387px] md:top-[565px]"
                        verticalClass="top-[387px] bottom-[56px] md:top-[565px] md:bottom-[87px] left-1/2 -translate-x-1/2"
                        bottomClass="left-0 right-5 bottom-[56px] md:bottom-[87px]"
                        centerClass="left-5 right-0 bottom-[114px] md:bottom-[182px] -translate-y-1/2"
                      />
                    </div>
                  </div>

                  {/* Upper Bracket Semifinal */}
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Upper Bracket Semifinal
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {ubSemifinal.map((m) => (
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
                            r1={m.r1}
                            r2={m.r2}
                            r3={m.r3}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="h-2 md:h-3" />

                    {/* Lower Bracket Semifinal */}
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Lower Bracket Semifinal
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {lbSemifinal.map((m) => (
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
                            r1={m.r1}
                            r2={m.r2}
                            r3={m.r3}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connectors column 2 */}
                  <div>
                    <div className="relative h-full w-[40px]">
                      {/* Merge connector for this column */}
                      <BracketConnectorMerge
                        topClass="left-0 right-5 top-[87px] md:top-[120px]"
                        verticalClass="top-[87px] bottom-[358px] md:top-[120px] md:bottom-[532px] left-1/2 -translate-x-1/2"
                        bottomClass="left-0 right-5 top-[210px] md:top-[312px]"
                        centerClass="left-5 right-0 top-[149px] md:top-[217px] -translate-y-1/2"
                      />

                      {/* Advance connector for lower side */}
                      <BracketConnectorAdvance
                        line1Class="left-5 right-0 top-[420px] md:top-[604px] -translate-y-1/2"
                        line2Class="left-0 right-0 top-[454px] md:top-[662px] -translate-y-1/2"
                      />
                    </div>
                  </div>

                  {/* Lower Bracket Final */}
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Upper Bracket Final
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                      {ubFinal.map((m) => (
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
                            r1={m.r1}
                            r2={m.r2}
                            r3={m.r3}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="h-2 md:h-3" />

                    {/* Lower Bracket Final */}
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Lower Bracket Final
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        {lbFinal.map((m) => (
                          <div
                            key={m.slot1}
                            className="flex flex-col justify-center h-[calc(108px*2+16px)] md:h-[calc(176px*2+16px)] pb-8 md:pb-14"
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
                              r1={m.r1}
                              r2={m.r2}
                              r3={m.r3}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connectors column 3 */}
                  <div>
                    <div className="relative h-full w-[40px]">
                      <BracketConnectorMerge
                        topClass="left-0 right-5 top-[148px] md:left-0 md:right-5 md:top-[216px]"
                        verticalClass="top-[148px] md:top-[216px] bottom-[131px] md:bottom-[210px] left-1/2 w-0.5 -translate-x-1/2"
                        bottomClass="left-0 right-5 top-[437px] md:left-0 md:right-5 md:top-[634px]"
                        centerClass="left-5 right-0 top-[303px] md:left-5 md:right-0 md:top-[440px] -translate-y-1/2"
                      />
                    </div>
                  </div>

                  {/* Grand Final */}
                  <div className="flex flex-col gap-4 first:ps-4 last:pe-4 md:first:ps-8 md:last:pe-8">
                    <div className="bg-gray-200 flex h-[17px] items-center justify-center rounded-sm">
                      <p className="text-[10px] leading-[1.1] font-bold uppercase">
                        Grand Final
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col justify-center h-[calc(108px*4+16px*3)] md:h-[calc(176px*4+16px*3)]">
                        <div className="flex min-w-0 items-center gap-1">
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
                                bgColor="bg-pink-bright"
                                r1={m.r1}
                                r2={m.r2}
                                r3={m.r3}
                              />
                            </div>
                          ))}
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
