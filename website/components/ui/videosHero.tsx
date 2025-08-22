import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type VideoItem = {
  title: string;
  link: string;                          // full YouTube URL
  thumbnail: string | StaticImageData;   // local import or remote url
  timeAgo: string;                       // e.g., "2 Days Ago"
};

type VideosProps = {
  videos: VideoItem[];                
};

function VideoCard({ item }: { item: VideoItem }) {
  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10 hover:ring-white/20 transition">
      {/* Make the whole card clickable */}
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Open ${item.title} on YouTube in a new tab`}
      />

      {/* Thumbnail 16:9 */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* Hover veil */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-medium leading-tight text-base sm:text-lg text-white/95 group-hover:text-white">
          <span className="line-clamp-2">{item.title}</span>
        </h3>
        <p className="text-sm text-white/60">{item.timeAgo}</p>
      </div>
    </article>
  );
}

export default function VideosHero({ videos }: VideosProps) {
  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(1rem,4vw,4rem)] navbarsm:my-14">
      <div className="w-full mt-4 sm:mt-0 mb-8">
        <p className="uppercase text-4xl font-druk font-medium text-center">
          Featured Videos
        </p>
      </div>

      {/* 1 col mobile, 2 cols small, 4 cards per row from md up */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
        {videos.map((v, i) => (
          <div key={i} className="md:col-span-3">
            <VideoCard item={v} />
          </div>
        ))}
      </div>
    </section>
  );
}
