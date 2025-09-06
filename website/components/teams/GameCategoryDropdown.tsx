"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EllipsisVertical from "@/assets/icons/ellipsis-vertical.svg";
import Image, { StaticImageData } from "next/image";

export type GameCategories = {
  label: string;
  value: string;
  iconSrc: StaticImageData;
  backgroundSrc: StaticImageData;
  bannerSrc?: StaticImageData;
};
export type Team = {
  id: number;
  name: string;
  game: string;
  logo?: string;
  legacy: boolean;
};

export default function GameCategoryDropdown({
  title,
  categories,
  onSelect,
}: {
  title: string;
  categories: GameCategories[];
  onSelect?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const shownLabel = selected
    ? categories.find((c) => c.value === selected)?.label ?? title
    : title;

  const menuItems = selected
    ? categories.filter((c) => c.value !== selected)
    : categories.filter((c) => c.value !== "all");

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        role="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-12 w-full items-center justify-between rounded-[14px] border border-gray-200 px-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-sm"
      >
        <div className="text-black">{shownLabel}</div>
        <button
          type="button"
          aria-label="More"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          className="absolute right-2 rounded-full p-2"
        >
          <Image
            src={EllipsisVertical}
            alt=""
            className="h-5 w-5 text-gray-700"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-0 right-0 z-20 mt-2"
          >
            <div className="w-full overflow-hidden rounded-[14px] border border-gray-200 bg-white">
              <ul className="divide-y divide-gray-100">
                {menuItems.map((i, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setSelected(i.value);
                        onSelect?.(i.value);
                      }}
                      className="flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-gray-50 sm:px-6 sm:py-4"
                    >
                      <div>
                        <Image
                          src={i.iconSrc}
                          alt={i.label}
                          width={32}
                          height={32}
                          className="filter grayscale brightness-0 invert-[50%]"
                        />
                      </div>
                      <div className="text-[16px] font-[500] text-gray-600">
                        {i.label}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
