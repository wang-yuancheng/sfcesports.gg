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
  const team = tournamentHighlights.find((h) => h.slug === tournamentSlug);
  if (!team) return notFound();

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={samplepic} />
    </div>
  );
}
