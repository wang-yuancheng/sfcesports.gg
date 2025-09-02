"use client";

import Link from "next/link";
import LogoFade from "@/components/ui/logofade";

import { CartSheetResponsive } from "@/components/navigation/CartSheet";
import { MenuSheetResponsive } from "@/components/navigation/MenuSheet";
import NavbarProfile from "@/components/navigation/NavbarProfile";
import {
  LoginButton,
  SignUpButton,
  SearchButton,
} from "@/components/navigation/CustomButtons";
import {
  LongLiveDisplay,
  ShortLiveDisplay,
} from "@/components/navigation/LiveDisplay";
import { NavbarMain } from "@/components/navigation/NavbarMain";

export default function Navbar() {
  return (
    <>
      {/* Mobile */}
      <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="flex flex-col h-fit min-h-[58px] flex-shrink-0 md:hidden">
          <div className="w-full h-14 flex justify-between items-center px-4 flex-shrink-0">
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
        </div>
      </header>

      <header>
        {/* Desktop / Ipad */}
        <div className="section-container">
          <div className="hidden md:flex w-full md:py-2 flex-col">
            {/* Left side */}
            <div className="relative flex h-16 items-center justify-between">
              <nav className="flex flex-1 lg:flex-initial items-center justify-center md:items-stretch md:justify-start md:ml-0">
                <Link
                  href="/"
                  aria-label="Home"
                  className="flex shrink-0 items-center"
                >
                  <LogoFade />
                </Link>
                <NavbarMain />
              </nav>

              <ShortLiveDisplay />

              {/* Right Side */}
              <div className="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto md:mr-0">
                <div className="md:mr-2">
                  <SearchButton />
                  <CartSheetResponsive />
                </div>
                {/* auth */}
                <div className="hidden md:flex gap-2 mx-0">
                  <LoginButton />
                  <SignUpButton />
                </div>

                <div className="md:hidden">
                  <NavbarProfile />
                </div>
              </div>
            </div>
            <div className="navbarsm:hidden">
              <LongLiveDisplay />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
