import { Team } from "@/lib/types";

export default function TeamGrid({
  teams,
  renderTeam,
}: {
  teams: Team[];
  renderTeam: (t: Team) => React.ReactNode;
}) {
  return (
    <div
      className="
        grid grid-cols-1 gap-3
        sm:grid-cols-1
        md:grid-cols-4
        lg:grid-cols-3
        navbarsm:grid-cols-4
        xlg:grid-cols-5
        navbarlg:grid-cols-5
      "
    >
      {teams.map((t) => (
        <div key={t.id} className="w-full h-auto md:h-64 navbarlg:h-64">
          {renderTeam(t)}
        </div>
      ))}
    </div>
  );
}