"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import LogoFade from "@/app/components/ui/logofade";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const navItems = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Join", href: "/join" },
];

const navText = "font-[600] text-[15px]";

function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white font-bold">
      <div className="flex flex-col sm:hidden">
        <div className="w-full h-14 flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center">
            <button
              className="relative rounded-md p-2 hover:bg-gray-100"
              aria-label="Open burger menu"
            >
              <Image
                alt="Menu"
                src="/menu.svg"
                width={22}
                height={22}
                className="min-w-[22px]"
              />
            </button>
            <button
              className="relative rounded-md p-2 hover:bg-gray-100"
              type="button"
              title="Search Button"
            >
              <Image
                alt="Search"
                src="/search.svg"
                width={22}
                height={22}
                className="min-w-[22px]"
              />
            </button>
          </div>
          {/* Logo Mid */}
          <Link href="/" aria-label="Home">
            <LogoFade />
          </Link>
          {/* Right */}
          <div className="flex">
            <button
              aria-label="Shop"
              className="relative rounded-md p-2 hover:bg-gray-100"
            >
              <Image
                src="/cart.svg"
                alt="Cart"
                width={22}
                height={22}
                className="min-w-[22px]"
              />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative rounded-md p-2 hover:bg-gray-100">
                  <Image
                    src="/profile.svg"
                    alt="Profile"
                    width={22}
                    height={22}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Sign in</DropdownMenuItem>
                <DropdownMenuItem>Create an account</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="gap-2 rounded-md shadow-sm px-3 py-3 md:py-2 bg-white min-w-[300px] w-[448px] h-[58px]">
              <div className="flex items-center justify-center h-full">
                Live Display
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / Ipad */}
      <div className="hidden sm:flex mx-auto w-full sm:px-6 sm:py-2 md:px-0 flex-col">
        {/* top bar */}
        <div className="relative flex h-16 items-center justify-between">
          {/* center region, holds logo, desktop nav */}
          <div className="flex flex-1 lg:flex-initial items-center justify-center sm:items-stretch sm:justify-start md:ml-5">
            {/* logo, centered on mobile by the flex container above */}
            <Link
              href="/"
              aria-label="Home"
              className="flex shrink-0 items-center"
            >
              <LogoFade />
            </Link>

            {/* desktop nav links */}
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

          <div className="hidden navbarsm:flex navbarlg:absolute navbarlg:left-1/2 navbarlg:-translate-x-1/2">
            <div className="flex gap-2 items-center justify-center rounded-md group shadow-sm px-3 py-3 md:py-2 bg-white min-w-[288px] min-h-[52px]">
              <div>LIVE DISPLAY TOP</div>
            </div>
          </div>

          {/* right actions */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto md:mr-5">
            {/* cart */}
            <button
              className="relative rounded-md p-2 hover:bg-gray-100"
              type="button"
              title="Search Button"
            >
              <Image
                alt="Search"
                src="/search.svg"
                width={22}
                height={22}
                className="min-w-[22px]"
              />
            </button>
            <Link
              href="/shop"
              aria-label="Shop"
              className="relative rounded-md p-2 hover:bg-gray-100"
            >
              <Image
                src="/cart.svg"
                alt="Cart"
                width={22}
                height={22}
                className="min-w-[22px]"
              />
            </Link>

            {/* auth */}
            <div className="hidden md:flex gap-2 mx-2">
              <Button variant="outline" size="default" asChild>
                <Link href="/auth/login">Log In</Link>
              </Button>
              <Button variant="default" size="default" asChild>
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </div>

            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative rounded-md p-2 hover:bg-gray-100">
                    <Image
                      src="/profile.svg"
                      alt="Profile"
                      width={22}
                      height={22}
                      className="min-w-[22px]"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Sign in</DropdownMenuItem>
                  <DropdownMenuItem>Create an account</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* mobile live display */}
        <div className="flex justify-center">
          <div className="navbarsm:hidden gap-2 rounded-md shadow-sm px-3 py-3 md:py-2 bg-white min-w-[300px] w-[448px] h-[58px]">
            <div className="flex items-center justify-center h-full">
              Live Display
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
