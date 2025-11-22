import Image from "next/image";
import React from "react";
import tempimage from "@/assets/pictures/ar15skins1.jpg";

// You can add more items here
const mediaItems = [
  {
    id: 1,
    date: "1 Apr 2025",
    title: "Ultimate Royale Rank 1",
    image: tempimage,
  },
  {
    id: 2,
    date: "18 May 2024",
    title: "Triple Rank 1",
    image: tempimage,
  },
  {
    id: 3,
    date: "1 Apr 2024",
    title: "Gameling Tournament",
    image: tempimage,
  },
  {
    id: 4,
    date: "30 Jan 2024",
    title: "All talent championship S16",
    image: tempimage,
  },
  {
    id: 5,
    date: "5 Oct 2023",
    title: "10 Years of Shibe",
    image: tempimage,
  },
  {
    id: 6,
    date: "22 Jan 2022",
    title: "Global Rank 1",
    image: tempimage,
  },
];

function MediaCard({ item }: { item: any }) {
  return (
    <div className="rounded-lg flex flex-col w-full">
      <div className="relative w-full overflow-hidden rounded-lg border border-gray-100 bg-black aspect-[16/9]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="text-sm mt-3 text-gray-600">{item.date}</div>
      <div className="font-druk text-xl leading-tight">{item.title}</div>
    </div>
  );
}

export default function Media() {
  return (
    <div className="mb-16">
      <div className="section-container lg:mt-6 flex flex-col gap-4">
        {/* Grid of cards */}
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
