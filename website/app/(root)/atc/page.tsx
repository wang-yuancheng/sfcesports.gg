"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import atcBanner from "@/assets/pictures/atc.webp";
import ATCLeaderboard from "@/components/leaderboards/atcLeaderboard";
import { atcLeaderboard, atcTeams } from "@/data/home/atc/atc";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import { videos } from "@/data/home/atc/vods";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import LeaderboardTeams from "@/components/leaderboards/leaderboardTeams";

export default function ATCPage() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);
  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={atcBanner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-3xl md:text-4xl font-druk uppercase text-center text-pink-bright leading-tight">
                All talent championship
              </h1>
              <p className="text-gray-600 font-[400] text-base text-justify">
                The PUBG Mobile All Talent Championship is a large-scale in-game
                tournament where tens of thousands of players form teams each
                season to compete. To reach the finals, teams must outscore
                thousands of teams in the qualifying rounds and secure a spot
                among the top 160. From there, they need to place in the top 2
                out of 20 others in the same lobby to advance. Teams that fail
                to do so will be offered a last chance in the playoffs which
                also requires a top 2 finish. The final round consists of 20 of
                the best teams in their region and winners would earn the
                opportunity to compete for a place in the official PUBG Mobile
                league.
              </p>
              <h1 className="mt-10 text-2xl md:text-3xl font-druk uppercase text-center text-pink-bright">
                Champion Team
              </h1>
              <div className="flex flex-wrap justify-center items-start -mx-4">
                {/* Player 1 */}
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px]">
                    Piggie
                  </p>
                  <p className="text-gray-600 font-[400] text-center">Entry</p>
                </div>

                {/* Player 2 */}
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px]">
                    Bite
                  </p>
                  <p className="text-gray-600 font-[400] text-center">Entry</p>
                </div>

                {/* Player 3 */}
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px]">
                    Shibe
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    IGL / Scout
                  </p>
                </div>

                {/* Player 4 */}
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px]">
                    Cry
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    Support
                  </p>
                </div>

                {/* Player 5 */}
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px]">
                    Grunge
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    Support
                  </p>
                </div>
              </div>
            </section>
            <div className="flex flex-col gap-3 -mt-6 md:-mt-8 lg:-mt-12">
              <h2 className="text-xl md:text-2xl font-druk uppercase">
                Grand Finals
              </h2>
              <ATCLeaderboard rows={atcLeaderboard} />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-druk uppercase">
                Finals Qualified Teams
              </h2>
              <div
                className="overflow-auto scrollbar-hide grid w-full auto-rows-fr gap-2 overflow-x-auto py-4 
                  max-md:grid-flow-col max-md:grid-rows-2 max-md:px-4 max-md:pt-10 
                  md:grid-cols-3 xmd:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-4 xlg:grid-cols-5"
              >
                {atcTeams.map((t) => (
                  <LeaderboardTeams key={t.name} team={t} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-druk uppercase">
                ATC S16 Vods
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-9">
                {videos.map((v) => (
                  <div key={v.id} className="md:col-span-3 ">
                    <VideoCard
                      item={v}
                      onOpen={setActive}
                      viewCount={viewsMap[v.id]}
                    />
                  </div>
                ))}
              </div>

              <VideoModal
                open={Boolean(active)}
                title={active?.title ?? ""}
                videoId={active?.id ?? ""}
                onClose={() => setActive(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
