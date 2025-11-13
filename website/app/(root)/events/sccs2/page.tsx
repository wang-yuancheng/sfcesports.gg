"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import sccs2banner from "@/assets/pictures/sccs2thumbnail.png";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import {
  sccs2InvitedTeams,
  sccs2Teams,
  videos,
  sccs2Media,
  sccs2GrandFinal,
} from "@/data/events/sccs2";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import MediaGallery from "@/components/home/MediaGallery";
import DefaultLeaderboard from "@/components/leaderboards/leaderboards/DefaultLeaderboard";
import ParticipatingTeams from "@/components/leaderboards/ParticipatingTeams";

export default function sccs2() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={sccs2banner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-druk uppercase text-center  leading-tight">
                Shibe's Community Cup: Season 2
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
                  Grand Finals
                </h2>
                <DefaultLeaderboard rows={sccs2GrandFinal} />
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Invited Teams
                </h2>
                <div
                  className="overflow-auto scrollbar-hide grid w-full auto-rows-fr gap-2 overflow-x-auto py-4 
                              max-md:grid-flow-col max-md:grid-rows-2 max-md:px-4 max-md:pt-10 
                              md:grid-cols-3 xmd:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-4 xlg:grid-cols-5"
                >
                  {sccs2InvitedTeams.map((t) => (
                    <ParticipatingTeams key={t.name} team={t} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Finals Qualified Teams
                </h2>
                <div
                  className="overflow-auto scrollbar-hide grid w-full auto-rows-fr gap-2 overflow-x-auto py-4 
                              max-md:grid-flow-col max-md:grid-rows-2 max-md:px-4 max-md:pt-10 
                              md:grid-cols-3 xmd:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-4 xlg:grid-cols-5"
                >
                  {sccs2Teams.map((t) => (
                    <ParticipatingTeams key={t.name} team={t} />
                  ))}
                </div>
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
              <MediaGallery media={sccs2Media} hideArrows />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
