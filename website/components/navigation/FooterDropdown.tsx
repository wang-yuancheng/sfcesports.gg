"use client";

import React, { useState, useEffect } from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import Image from "next/image";
import Link from "next/link";
import { FooterDropdownProps } from "@/lib/types";

export default function FooterDropdown({
  trigger,
  dropdownContent,
}: FooterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="space-y-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-left font-medium text-black hover:text-gray-600"
        aria-expanded={open}
        aria-controls="footer-dropdown-list"
      >
        <span>{trigger}</span>

        <Image
          src={ChevronDown}
          alt="Chevron Down"
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <ul
        id="footer-dropdown-list"
        className={`pl-2 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {dropdownContent.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="flex flex-col justify-center text-sm text-gray-600 hover:text-black py-1"
              >
                {item.label}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  console.log(`Switch currency to: ${item.label}`);
                  // TODO: Add your global state logic here later
                }}
                className="flex flex-col justify-center text-sm text-gray-600 hover:text-black py-1 cursor-pointer w-full text-left"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
