"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  User,
  Settings,
  Bell,
  Shield,
  Link as LinkIcon,
  LogOut,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { icon: User, label: "Edit Profile", href: "/account" },
  { icon: CreditCard, label: "Membership", href: "/account/membership" },
  { icon: Settings, label: "Settings", href: "/account/settings" },
  { icon: Bell, label: "Notifications", href: "/account/notifications" },
  { icon: Shield, label: "Security", href: "/account/security" },
  { icon: LinkIcon, label: "Connections", href: "/account/connections" },
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
      {/* Matches structure of GameCategoryDropdown exactly */}
      <div
        ref={dropdownRef}
        className="block lg:hidden w-full relative z-30"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="relative flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-3 text-black">
            <activeItem.icon className="w-5 h-5 stroke-[2.5px]" />
            <span className="font-medium text-[16px]">{activeItem.label}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
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
                  {menuItems.map((item) => {
                    const isItemActive = item.label === activeItem.label;
                    // Optional: hide the currently active item from the list like the GameDropdown often does, 
                    // or keep it to allow "re-clicking". Here we keep it but style it.
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-gray-50 transition-colors sm:px-6 sm:py-4 ${
                            isItemActive ? "bg-gray-50/50" : ""
                          }`}
                        >
                          <item.icon
                            className={`w-5 h-5 ${
                              isItemActive
                                ? "text-black stroke-[2.5px]"
                                : "text-gray-500 stroke-[2px]"
                            }`}
                          />
                          <span
                            className={`text-[16px] font-[500] ${
                              isItemActive ? "text-black" : "text-gray-600"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}

                  {/* Sign Out (Mobile) */}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-red-50 sm:px-6 sm:py-4 transition-colors group"
                    >
                      <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
                      <span className="text-[16px] font-[500] text-gray-600 group-hover:text-red-600">
                        Sign Out
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---------------- DESKTOP SIDEBAR (hidden lg:block) ---------------- */}
      <div className="hidden lg:block flex-shrink-0 py-3 px-3 rounded-xl w-[280px] bg-gray-50 p-4 h-fit">
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
                className={`relative flex items-center gap-3 px-4 py-4 rounded-xl text-[16px] font-[500] transition-colors duration-200 ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-pink-bright"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-gray-200/50"
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-3">
                  <item.icon
                    className={`w-5 h-5 transition-all duration-200 ${
                      isActive ? "stroke-[2.5px]" : "stroke-[2px]"
                    }`}
                  />
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="my-2 border-t border-gray-200/60 mx-2" />

          <button
            onClick={handleSignOut}
            className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-[500] text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
          >
            <LogOut className="w-5 h-5" strokeWidth={2} />
            Sign Out
          </button>
        </nav>
      </div>
    </>
  );
}