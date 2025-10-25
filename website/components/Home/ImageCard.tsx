"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ImageCard({
  image,
  alt,
  onOpen,
}: {
  image: StaticImageData;
  alt?: string;
  onOpen: () => void;
}) {
  return (
    <div className="w-[clamp(140px,40vw,320px)] shrink-0">
      <button
        type="button"
        onClick={onOpen}
        className="group relative flex w-full flex-col overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
      >
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={alt || "Media image"}
            fill
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 20vw"
            className="object-cover object-center group-hover:scale-110 group-focus:scale-110 ease-in-out duration-500 transition"
            draggable={false}
            placeholder={"blurDataURL" in (image as any) ? "blur" : undefined}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-pink-bright/20 transition duration-500" />
        </div>
      </button>
    </div>
  );
}
