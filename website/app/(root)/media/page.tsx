import Image from "next/image";
import React from "react";
import Link from "next/link";
import { mediaItems } from "@/data/media/media";
import { MediaItem } from "@/lib/types";

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <Link href={`/media/${item.slug}`} className="group block w-full h-full">
      <div className="rounded-lg flex flex-col w-full h-full cursor-pointer">
        <div className="relative w-full overflow-hidden rounded-lg border border-gray-100 bg-black aspect-[16/9]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="text-xs mt-3 mb-1 font-[500] text-gray-600">{item.date}</div>
        <div className="font-druk text-xl leading-tight uppercase group-hover:text-gray-600 transition-colors">
          {item.title}
        </div>
      </div>
    </Link>
  );
}

export default function Media() {
  return (
    <div className="mb-16">
      <div className="section-container navbarsm:mt-6 flex flex-col gap-4">
        <div
          className="
            grid gap-6
            grid-cols-1      
            sm:grid-cols-2     
            md:grid-cols-2    
            lg:grid-cols-3  
          "
        >
          {mediaItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
