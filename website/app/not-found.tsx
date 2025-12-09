import Link from "next/link";
import {
  LayoutGrid,
  Users,
  Trophy,
  Newspaper,
  ShoppingBag,
  ShieldAlert,
  Info,
} from "lucide-react";

const foundingYear = 2021;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - foundingYear;

const notFoundLinks = [
  {
    title: "Feed",
    description: "Latest of everything SFC",
    href: "/",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    title: "About",
    description: `${yearsActive} years leading esports`,
    href: "/about",
    icon: <Info className="w-5 h-5" />,
  },
  {
    title: "Our Teams",
    description: "Meet our rosters and players",
    href: "/teams",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Events",
    description: "Tournaments and match results",
    href: "/events",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "Media",
    description: "The latest SFC updates",
    href: "/media",
    icon: <Newspaper className="w-5 h-5" />,
  },
  {
    title: "Shop",
    description: "Boosting services and memberships",
    href: "/shop",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
];

function NotFoundLinkCard({ item }: { item: (typeof notFoundLinks)[0] }) {
  return (
    <Link
      href={item.href}
      className="group flex items-center gap-4 p-4 rounded-2xl transition-colors duration-200 hover:bg-[#F3F4F6]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-black group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
        {item.icon}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[17px] font-bold text-gray-900 leading-tight">
          {item.title}
        </span>
        <span className="text-sm text-gray-600 font-[400] leading-tight tracking-wide">
          {item.description}
        </span>
      </div>
    </Link>
  );
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center section-container my-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-druk text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.85] tracking-tighter text-black">
          The page you’re looking for
          <br />
          can’t be found.
        </h1>
      </div>

      <div className="w-full max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {notFoundLinks.map((link) => (
            <NotFoundLinkCard key={link.title} item={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
