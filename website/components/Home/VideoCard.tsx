"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

export type VideoItem = {
  title: string;
  id: string;
  thumbnail: StaticImageData;
  views: string;
};

export default function VideoCard({
  item,
  onOpen,
  viewCount,
}: {
  item: VideoItem;
  onOpen: (item: VideoItem) => void;
  viewCount?: string;
}) {
  const formatted =
    typeof viewCount === "string" && viewCount.length
      ? new Intl.NumberFormat("en-SG").format(Number(viewCount))
      : "";

  return (
    <div className="mx-3">
      <div>
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
              className="object-cover object-center group-hover:scale-110 group-focus:scale-110 ease-in-out duration-500 transition"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-pink-bright/20 transition duration-500" />
          </div>
        </button>
      </div>
      <div>
        <button type="button" onClick={() => onOpen(item)}>
          <div className="flex flex-col gap-2 pt-3">
            <h3 className="text-lg font-medium leading-tight text-left md:text-sm lg:text-lg">
              {item.title}
            </h3>
            <p className="text-md text-gray-600 text-left md:text-xs lg:text-[14px]">
              {formatted ? `${formatted} views` : ""}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
