import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

// const navText = "font-[600] text-[15px]";
const navItems = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
];

// Check if a given link is for the current page for highlighting navbar
function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export const NavbarMain = () => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex items-center justify-center pl-2">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            asChild
            variant="ghost"
            size="sm"
            className={`${
              isCurrent(pathname, item.href) ? "text-pink-bright" : ""
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
