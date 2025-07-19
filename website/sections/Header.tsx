"use client";

import Link from "next/link";
import LogoFade from "@/components/ui/logofade";

// Custom Components
import { CartSheetResponsive } from "@/components/navbar/CartSheet";
import { MenuSheetResponsive } from "@/components/navbar/MenuSheet";
import NavbarProfile from "@/components/navbar/NavbarProfile";
import {
  LoginButton,
  SignUpButton,
  SearchButton,
} from "@/components/navbar/CustomButtons";
import {
  LongLiveDisplay,
  ShortLiveDisplay,
} from "@/components/navbar/LiveDisplay";
import { NavbarMain } from "@/components/navbar/NavbarMain";

export default function Navbar() {
  return (
    <nav className="bg-white">
      {/* Mobile */}
      <div className="flex flex-col sm:hidden">
        <div className="w-full h-14 flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center">
            <MenuSheetResponsive />
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
            <NavbarMain />
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
