"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import userIcon from "@/assets/icons/circle-user-round.svg";
import gemIcon from "@/assets/icons/gem.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import bellIcon from "@/assets/icons/bell.svg";
import lockIcon from "@/assets/icons/lock-keyhole.svg";
import linkIcon from "@/assets/icons/link.svg";
import logoutIcon from "@/assets/icons/log-out.svg";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import userPinkIcon from "@/assets/icons/circle-user-round-pink.svg";
import gemPinkIcon from "@/assets/icons/gem-pink.svg";
import settingsPinkIcon from "@/assets/icons/settings-pink.svg";
import bellPinkIcon from "@/assets/icons/bell-pink.svg";
import lockPinkIcon from "@/assets/icons/lock-keyhole-pink.svg";
import linkPinkIcon from "@/assets/icons/link-pink.svg";
import logoutRedIcon from "@/assets/icons/log-out-red.svg";

const menuItems = [
  {
    label: "Edit Profile",
    href: "/account",
    icon: userIcon,
    pinkIcon: userPinkIcon,
  },
  {
    label: "Membership",
    href: "/account/membership",
    icon: gemIcon,
    pinkIcon: gemPinkIcon,
  },
  {
    label: "Settings",
    href: "/account/settings",
    icon: settingsIcon,
    pinkIcon: settingsPinkIcon,
  },
  {
    label: "Notifications",
    href: "/account/notifications",
    icon: bellIcon,
    pinkIcon: bellPinkIcon,
  },
  {
    label: "Security",
    href: "/account/security",
    icon: lockIcon,
    pinkIcon: lockPinkIcon,
  },
  {
    label: "Connections",
    href: "/account/connections",
    icon: linkIcon,
    pinkIcon: linkPinkIcon,
  },
];

export default function ProfileSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  // -- Mobile Dropdown State --
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  // Identify active page for display
  const activeItem =
    menuItems.find((item) =>
      item.href === "/account"
        ? pathname === "/account"
        : pathname.startsWith(item.href)
    ) || menuItems[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <>
      {/* ---------------- MOBILE DROPDOWN (lg:hidden) ---------------- */}
      <div ref={dropdownRef} className="block lg:hidden w-full relative z-30">
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="relative flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-3 text-black">
            {/* Active item always shows default (black) icon */}
            <Image
              src={activeItem.icon}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span className="font-medium text-[16px]">{activeItem.label}</span>
          </div>

          <Image
            src={ChevronDown}
            alt="Toggle"
            width={16}
            height={16}
            className={`ml-2 h-4 w-4 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 z-20"
            >
              <div className="w-full overflow-hidden rounded-[14px] border border-gray-200 bg-white shadow-lg">
                <ul className="flex flex-col divide-y divide-gray-100">
                  {/* Navigation Links */}
                  {menuItems
                    .filter((item) => item.label !== activeItem.label)
                    .map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-gray-50 transition-colors sm:px-6 sm:py-4 group"
                        >
                          <SidebarItemIcon
                            defaultIcon={item.icon}
                            hoverIcon={item.pinkIcon}
                            isActive={false}
                          />
                          <span className="text-[16px] font-[500] text-gray-600 group-hover:text-pink-bright transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}

                  {/* Sign Out (Mobile) */}
                  <li>
                    <LogoutButtonMobile onClick={handleSignOut} />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---------------- DESKTOP SIDEBAR (hidden lg:block) ---------------- */}
      <div className="hidden lg:block flex-shrink-0 py-3 px-3 rounded-xl w-[280px] bg-[#f5f6f7] p-4 h-fit">
        <nav className="flex flex-col gap-1 relative">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/account"
                ? pathname === "/account"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative group flex items-center gap-3 px-4 py-4 rounded-xl text-[16px] font-[500] transition-colors duration-200 ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-pink-bright"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-0 bg-white rounded-xl"
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-3">
                  <SidebarItemIcon
                    defaultIcon={item.icon}
                    hoverIcon={item.pinkIcon}
                    isActive={isActive}
                  />
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="my-2 border-t border-gray-200/60 mx-2" />

          {/* Desktop Logout Button */}
          <LogoutButtonDesktop onClick={handleSignOut} />
        </nav>
      </div>
    </>
  );
}

// --- Helper Components ---

/**
 * Handles the "Gray -> Pink" transition on hover,
 * and "Gray -> Black" transition on active.
 */
function SidebarItemIcon({
  defaultIcon,
  hoverIcon,
  isActive,
}: {
  defaultIcon: any;
  hoverIcon: any;
  isActive: boolean;
}) {
  return (
    <div className="relative w-5 h-5">
      {/* Default Gray/Black Icon */}
      {/* If Active: Opacity 100% (Black) */}
      {/* If Inactive: Opacity 50% (Gray), fades to 0 on group hover */}
      <Image
        src={defaultIcon}
        alt=""
        fill
        className={`object-contain transition-opacity duration-200 ${
          isActive ? "opacity-100" : "opacity-50 group-hover:opacity-0"
        }`}
      />

      {/* Pink Hover Icon */}
      <Image
        src={hoverIcon}
        alt=""
        fill
        className={`object-contain transition-opacity duration-200 ${
          isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </div>
  );
}

function LogoutButtonMobile({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-red-50 sm:px-6 sm:py-4 transition-colors"
    >
      <div className="relative w-5 h-5">
        <Image
          src={logoutIcon}
          alt="Log Out"
          fill
          className="object-contain transition-opacity duration-200 group-hover:opacity-0 opacity-60"
        />
        <Image
          src={logoutRedIcon}
          alt="Log Out"
          fill
          className="object-contain transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        />
      </div>
      <span className="text-[16px] font-[500] text-gray-600 group-hover:text-red-600 transition-colors">
        Sign Out
      </span>
    </button>
  );
}

function LogoutButtonDesktop({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-[500] text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors text-left w-full"
    >
      <div className="relative w-5 h-5">
        <Image
          src={logoutIcon}
          alt="Log Out"
          fill
          className="object-contain transition-opacity duration-200 group-hover:opacity-0 opacity-50"
        />
        <Image
          src={logoutRedIcon}
          alt="Log Out"
          fill
          className="object-contain transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        />
      </div>
      Sign Out
    </button>
  );
}
