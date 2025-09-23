import { notFound } from "next/navigation";
import { teams } from "@/lib/constants";
import Image from "next/image";
import PlayerCard from "@/components/teams/PlayerCard";

export async function generateStaticParams() {
  return teams.map((t) => ({ team: t.slug }));
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team: teamSlug } = await params;
  const team = teams.find((t) => t.slug === teamSlug);
  if (!team) return notFound();

  return (
    <div className="mb-16">
      {/* Mobile banner */}
      <div className="block md:hidden w-full overflow-hidden border border-gray-100 aspect-[780/780]">
        <div className="relative w-full h-full">
          <Image
            src={team.banner}
            alt="banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Desktop banner */}
      <div className="hidden md:block section-container navbarsm:mt-6">
        <div className="relative w-full overflow-hidden rounded-lg border border-gray-100 aspect-[1920/800]">
          <Image
            src={team.banner}
            alt="banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          {/* Logo */}
          <div className="relative -translate-y-1/2 top-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-50 border border-gray-100">
            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Team content */}
          <div className="px-1">
            <div className="flex flex-col gap-3 -mt-8">
              <h1 className="text-2xl md:text-3xl font-druk">{team.name}</h1>
              <h2 className="text-gray-600 font-[400] text-base">
                {team.description}
              </h2>
            </div>
            <div>
              <h2 className="mt-8 mb-4 text-xl">Players</h2>
              {/* Player Components */}
              <div className="flex flex-col divide-y divide-gray-100">
                {team.players.map((p) => (
                  <PlayerCard key={p.name} player={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
