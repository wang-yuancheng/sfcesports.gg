"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import ChevronDownPink from "@/assets/icons/chevron-down-pink.svg";
import { MenuDropdownProps } from "@/lib/types";
export default function MenuDropdown({
  heading,
  items,
  viewAllHref,
  onItemClick,
}: MenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // current route

  /* Highlight header when the current route matches anything inside */
  const isActive =
    pathname.startsWith(viewAllHref ?? "/teams") ||
    items.some((i) => pathname.startsWith(i.href));

  return (
    <div className="border-b border-b-gray-200">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between h-16 text-[16px] ${
          isActive ? "text-pink-bright" : ""
        }`}
      >
        <span>{heading}</span>
        <Image
          src={isActive ? ChevronDownPink : ChevronDown}
          alt="Chevron Down"
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* -------- collapsible content -------- */}
      <div
        className={`overflow-hidden transition-all duration-200 px-2 ${
          open ? "max-h-[480px] pb-3" : "max-h-0"
        }`}
      >
        <div className="text-gray-800 text-xs">Featured</div>

        <ul className="space-y-1">
          {items.map(({ imageSrc, title, description, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onItemClick} // only collapses sheet
                className="flex items-start rounded-lg p-2 pl-0 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-gray-100 p-[4px] overflow-hidden flex items-center">
                    <Image
                      src={imageSrc}
                      alt={title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="font-semibold leading-none">{title}</p>
                    <p className="text-sm text-gray-600 leading-none">
                      {description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {viewAllHref && (
          <Link
            href={viewAllHref}
            onClick={onItemClick}
            className="inline-block text-xs underline underline-offset-2 hover:text-gray-600"
          >
            View All
          </Link>
        )}
      </div>
    </div>
  );
}
