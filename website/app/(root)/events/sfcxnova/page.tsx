"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import sfcxnovaBanner from "@/assets/pictures/sfcxnovabanner.png";
import { sfcxnovaday1 } from "@/data/events/sfcxnova/sfcxnova";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import { videos } from "@/data/events/sfcxnova/sfcxnova";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import type { StaticImageData } from "next/image";

import sfcxnovaMedia1 from "@/assets/pictures/sfcxnovaday1result.png";
import sfcxnovaMedia2 from "@/assets/pictures/sfcxnovaday2result.png";
import MediaGallery from "@/components/home/MediaGallery";
import DefaultLeaderboard from "@/components/leaderboards/leaderboards/DefaultLeaderboard";
import SingleEliminationBracket from "@/components/leaderboards/brackets/SingleEliminationBracket";

export default function sfcxnova() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  const media: StaticImageData[] = [sfcxnovaMedia1, sfcxnovaMedia2];

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={sfcxnovaBanner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-druk uppercase text-center text-pink-bright leading-tight">
                SFC VS NOVA COMMUNITY TOURNAMENT
              </h1>
              <p className="text-gray-600 font-[400] text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Day 1
                </h2>
                <DefaultLeaderboard rows={sfcxnovaday1} />
              </div>
            </section>

            <section>
              <SingleEliminationBracket />
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
              <MediaGallery media={media} hideArrows />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
