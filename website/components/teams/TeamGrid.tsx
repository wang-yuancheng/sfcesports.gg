import type { Team } from "@/components/teams/TeamDropdown";

export default function TeamGrid({
  teams,
  renderTeam,
}: {
  teams: Team[];
  renderTeam: (t: Team) => React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {teams.map((t) => (
        <div key={t.id}>{renderTeam(t)}</div>
      ))}
      {teams.length === 0 && (
        <div className="col-span-full rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
          No teams for this category
        </div>
      )}
    </div>
  );
}
