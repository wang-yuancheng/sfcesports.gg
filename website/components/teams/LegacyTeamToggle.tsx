"use client";

type Props = {
  show: boolean;
  onToggle: () => void;
};

export default function LegacyTeamToggle({ show, onToggle }: Props) {
  const Icon = (
    <svg
      className={`h-4 w-4 transition-transform ${
        show ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
    </svg>
  );

  const base =
    "w-full items-center justify-center gap-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  return (
    <>
      {/* desktop */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={show}
        className={`hidden lg:flex px-3 py-2 ${base}`}
      >
        <span>{show ? "Hide legacy teams" : "Show legacy teams"}</span>
        {Icon}
      </button>

      {/* mobile */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={show}
        className={`flex lg:hidden px-4 py-2 ${base}`}
      >
        <span className="font-medium">
          {show ? "Hide legacy teams" : "Show legacy teams"}
        </span>
        {Icon}
      </button>
    </>
  );
}
