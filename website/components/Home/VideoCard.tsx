"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

export type VideoItem = {
  title: string;
  id: string;                       // YouTube video ID
  thumbnail: StaticImageData;
  timeAgo: string;
};

export default function VideoCard({
  item,
  onOpen,
}: {
  item: VideoItem;
  onOpen: (item: VideoItem) => void;
}) {
  return (
    <div className="mx-3">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group relative flex w-full flex-col overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
        aria-label={`Play ${item.title}`}
      >
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-pink-bright/20 transition" />
        </div>
      </button>

      <div className="flex flex-col gap-2 pt-3">
        <h3 className="text-base font-medium leading-tight sm:text-lg">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">{item.timeAgo}</p>
      </div>
    </div>
  );
}
