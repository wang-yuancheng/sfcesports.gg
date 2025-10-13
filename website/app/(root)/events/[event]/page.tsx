import { notFound } from "next/navigation";
import { events } from "@/data/events/events";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import samplepic from "@/assets/pictures/events.png";

export async function generateStaticParams() {
  return Object.values(events).flatMap((yearEvents) =>
    yearEvents.map((e) => ({ event: e.slug }))
  );
}

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event: eventSlug } = await params;
  const event = Object.values(events)
    .flat()
    .find((e) => e.slug === eventSlug);
  if (!event) return notFound();

  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={samplepic} />
    </div>
  );
}
