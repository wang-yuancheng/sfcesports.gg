import { notFound } from "next/navigation";
import { tournamentHighlights } from "@/data/home/highlights";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import matchBanner from "@/assets/pictures/match.png";
import Leaderboard from "@/components/leaderboards/leaderboard";

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

  const rows = tournament.details?.leaderboard ?? [];
  const leaderboardRound = tournament.details?.leaderboardRound;

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={matchBanner} />
      <div className="section-container mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-druk">{tournament.title}</h1>
          <p className="text-gray-600 font-[400] text-base">
            {tournament.details?.description}
          </p>
          <div>
            <p className="text-gray-600 font-[400] text-base">
              <span className="font-bold text-black">Registered Teams: </span>{" "}
              {tournament.details?.teams}
            </p>
            <p className="text-gray-600 font-[400] text-base">
              <span className="font-bold text-black">Date: </span>
              {tournament.details?.date}
            </p>
            <p className="text-gray-600 font-[400] text-base">
              <span className="font-bold text-black">Prize Pool: </span>
              {tournament.details?.prizepool}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-druk">{leaderboardRound}</h2>
          <Leaderboard rows={rows} />
        </div>
      </div>
    </div>
  );
}
