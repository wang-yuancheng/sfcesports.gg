import { notFound } from "next/navigation";
import { tournamentHighlights } from "@/lib/constants";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import samplepic from "@/assets/pictures/events.png";
import Image from "next/image";
import samplelogo from "@/assets/icons/shibe-color.webp";
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
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-druk">Leaderboard</h2>

          {/* Leaderboard Component */}
          <Leaderboard rows={rows} />
        </div>
      </div>
    </div>
  );
}
