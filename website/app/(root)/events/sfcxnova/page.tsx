"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import sfcxnovaBanner from "@/assets/pictures/sfcxnova.png";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import { sfcxnovaMedia, videos } from "@/data/events/sfcxnova";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import MediaGallery from "@/components/home/MediaGallery";
import DefaultLeaderboard from "@/components/leaderboards/leaderboards/DefaultLeaderboard";
import SingleEliminationBracket from "@/components/leaderboards/brackets/SingleEliminationBracket";
import {
  sfcxnovaDay1,
  sfcxnovaDay2GrandFinal,
  sfcxnovaDay2Quarterfinal,
  sfcxnovaDay2Semifinal,
} from "@/data/events/sfcxnova";

export default function sfcxnova() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={sfcxnovaBanner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-druk uppercase text-center  leading-tight">
                SFC VS NOVA COMMUNITY TOURNAMENT
              </h1>
              <p className="text-gray-600 font-[400] text-lg text-justify">
                The SFC x NOVA Community Tournament was a collaboration between
                Shibe and Xifan, uniting two passionate player bases for a
                thrilling weekend of competition on March 15-16, 2024. With a
                total prize pool of $200 USD on the line, the event offered a
                diverse test of skill. Day 1 challenged teams with the strategic
                depth of Classic Mode, rewarding consistent rotations and
                survival instincts. The intensity peaked on Day 2 as the format
                shifted to a cutthroat single-elimination bracket in the 'World
                of Wonder' (WoW) mode, where pure mechanical skill and
                adaptability crowned the ultimate champion.
              </p>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Day 1
                </h2>
                <DefaultLeaderboard rows={sfcxnovaDay1} />
              </div>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Day 2
                </h2>
                <SingleEliminationBracket
                  quarterfinal={sfcxnovaDay2Quarterfinal}
                  semifinal={sfcxnovaDay2Semifinal}
                  grandfinal={sfcxnovaDay2GrandFinal}
                />
              </div>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Vods
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
            </section>
            <section>
              <MediaGallery media={sfcxnovaMedia} hideArrows />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
