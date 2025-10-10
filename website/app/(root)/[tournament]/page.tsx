import { notFound } from "next/navigation";
import { tournamentHighlights } from "@/lib/constants";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import samplepic from "@/assets/pictures/events.png";

export async function generateStaticParams() {
  return tournamentHighlights.map((h) => ({ highlight: h.slug }));
}

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ tournament: string }>;
}) {
  const { tournament: tournamentSlug } = await params;
  const tournament = tournamentHighlights.find(
    (h) => h.slug === tournamentSlug
  );
  if (!tournament) return notFound();

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={samplepic} />
      <div className="section-container mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-druk">{tournament.title}</h1>
          <p className="text-gray-600 font-[400] text-base">
            {tournament.details?.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-druk">Standings</h2>

          {/* Leaderboard Component */}
          <div className="w-full">
            <table className="w-full shadow-md">
              <thead className="bg-black">
                <tr>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-[50px] md:w-[84px] ps-2.5 md:ps-6 rounded-ss-lg">Rank</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-auto ps-[42px] md:ps-[54px]">Team</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] ps-[42px] md:ps-[54px]">WWCD</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] ps-[42px] md:ps-[54px]">KP</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] ps-[42px] md:ps-[54px]">PP</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px]  ps-[42px] md:ps-[54px]">Total</th>
                  <th className="px-2.5 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[100px] md:w-[140px]  ps-[42px] md:ps-[54px] rounded-se-lg">Prize Pool</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
