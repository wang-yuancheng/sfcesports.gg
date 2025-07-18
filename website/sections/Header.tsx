"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/shadcn/button";
import LogoFade from "@/components/shadcn/logofade";

// Custom Components
import { CartSheetResponsive } from "@/components/navbar/CartSheet";
import NavbarProfile from "@/components/navbar/NavbarProfile";
import {
  LoginButton,
  SignUpButton,
  SearchButton,
  MenuButton,
} from "@/components/navbar/CustomButtons";
import {
  LongLiveDisplay,
  ShortLiveDisplay,
} from "@/components/navbar/LiveDisplay";

const navText = "font-[600] text-[15px]";
const navItems = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Join", href: "/join" },
];

// Check if a given link is for the current page for highlighting navbar
function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white font-bold">
      {/* Mobile */}
      <div className="flex flex-col sm:hidden">
        <div className="w-full h-14 flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center">
            <MenuButton />
            <SearchButton />
          </div>
          {/* Logo Mid */}
          <Link href="/" aria-label="Home">
            <LogoFade />
          </Link>
          {/* Right */}
          <div className="flex">
            <CartSheetResponsive />
            <NavbarProfile />
          </div>
        </div>
        <div>
          <LongLiveDisplay />
        </div>
      </div>

      {/* Desktop / Ipad */}
      <div className="hidden sm:flex mx-auto w-full sm:px-6 sm:py-2 md:px-0 flex-col">
        {/* Left side */}
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 lg:flex-initial items-center justify-center sm:items-stretch sm:justify-start md:ml-5">
            <Link
              href="/"
              aria-label="Home"
              className="flex shrink-0 items-center"
            >
              <LogoFade />
            </Link>

            {/* desktop navbar links */}
            <div className="hidden sm:flex items-center justify-center pl-2">
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    asChild
                    variant="ghost"
                    size="sm"
                    className={`${navText} ${
                      isCurrent(pathname, item.href) ? "text-orange-500" : ""
                    }`}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <ShortLiveDisplay />

          {/* Right Side */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto md:mr-5">
            <SearchButton />
            <CartSheetResponsive />

            {/* auth */}
            <div className="hidden md:flex gap-2 mx-2">
              <LoginButton />
              <SignUpButton />
            </div>

            <div className="md:hidden">
              <NavbarProfile />
            </div>
          </div>
        </div>
        <LongLiveDisplay />
      </div>
    </nav>
  );
}
