"use client";

import PageHeaderImage from "@/components/global/PageHeaderImage";
import tdms5Banner from "@/assets/pictures/1v1s5banner.png";
import { useMemo, useState } from "react";
import { useYoutubeViews } from "@/hooks/useYoutubeViews";
import { VideoItem } from "@/lib/types";
import {
  tdms5SemiFinals,
  tdms5Media,
  videos,
  tdms5Matches,
} from "@/data/events/1v1s5";
import VideoCard from "@/components/home/VideoCard";
import VideoModal from "@/components/home/VideoModal";
import MediaGallery from "@/components/home/MediaGallery";
import TdmLeaderboard from "@/components/leaderboards/leaderboards/TdmLeaderboard";
import DoubleEliminationBracket from "@/components/leaderboards/brackets/DoubleEliminationBracket";
import {
  sccs2UBSemifinal,
  sccs2GrandFinal,
  sccs2LBFinal,
  sccs2LBQuarterfinal,
  sccs2LBSemifinal,
  sccs2UBFinal,
  sccs2UBQuarterfinal,
} from "@/data/events/1v1s5";

export default function tdms5() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const ids = useMemo(() => videos.map((v) => v.id), []);
  const viewsMap = useYoutubeViews(ids);

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={tdms5Banner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-druk uppercase text-center  leading-tight">
                Shibe x Dz 1v1 Tournament: <br className="sm:hidden" />
                Season 5
              </h1>
              <p className="text-gray-600 font-[400] text-lg text-justify">
                Season 5 marked a historic milestone as the biggest prize pool
                event we have ever held, featuring $500 USD distributed among
                the top 15 competitors. Through a strategic partnership with
                独尊 (Dz), we elevated the competitive standard, introducing a
                high stake double-elimination bracket for the final 6. This new
                format intensified the rivalry, giving top contenders a fighting
                chance to claw their way back to the championship.
              </p>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Playoffs
                </h2>
                <DoubleEliminationBracket
                  ubQuarterfinal={sccs2UBQuarterfinal}
                  lbQuarterfinal={sccs2LBQuarterfinal}
                  ubSemifinal={sccs2UBSemifinal}
                  lbSemifinal={sccs2LBSemifinal}
                  ubFinal={sccs2UBFinal}
                  lbFinal={sccs2LBFinal}
                  grandfinal={sccs2GrandFinal}
                />
              </div>
            </section>

            <section>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-druk uppercase">
                  Semifinals Standings
                </h2>
                <TdmLeaderboard
                  rows={tdms5SemiFinals}
                  matchData={tdms5Matches}
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
              <MediaGallery media={tdms5Media} hideArrows />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
