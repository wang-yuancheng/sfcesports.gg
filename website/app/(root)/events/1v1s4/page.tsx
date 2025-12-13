"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import tdms4Banner from "@/assets/pictures/tourmedia/1v1s4/1v1s4banner.png";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import {
  tdms4SemiFinals,
  tdms4Media,
  videos,
  tdms4Matches,
} from "@/data/events/1v1s4";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import MediaGallery from "@/components/home/MediaGallery";
import TdmLeaderboard from "@/components/leaderboards/leaderboards/TdmLeaderboard";

export default function tdms4() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={tdms4Banner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-druk uppercase text-center  leading-tight">
                Shibe's 1v1 Tournament: Season 4
              </h1>
              <p className="text-gray-600 font-[400] text-lg text-justify">
                Season 4 represented a significant milestone for the tournament
                as it transitioned to an open-registration format, welcoming
                over 400 players from across Asia. This massive influx of
                participants expanded the competition into a rigorous two-week
                event, with a $100 USD prize pool awarded to the top 5
                finalists. Managing hundreds of individual competitors presented
                a new operational challenge compared to team events, but it
                ultimately established the tournament as a major test of
                individual skill in the region.
              </p>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Standings
                </h2>
                <TdmLeaderboard
                  rows={tdms4SemiFinals}
                  matchData={tdms4Matches}
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
              <MediaGallery media={tdms4Media} hideArrows />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
