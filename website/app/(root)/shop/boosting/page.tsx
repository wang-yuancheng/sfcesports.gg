"use client";

import React, { useState } from "react";
import Image from "next/image";
import FlagIcon from "@/components/ui/flagicon";
import { boosters } from "@/data/boosters/boosters";
// Import the new modal
import BoosterModal from "@/components/shop/BoosterModal";

// --- CARD COMPONENT ---
function BoosterCard({ booster }: { booster: any }) {
  return (
    <div className="group flex flex-col gap-3 cursor-pointer h-full">
      {/* 1. Main Image Area */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
        {/* Main Photo */}
        <Image
          src={booster.cover}
          alt={`${booster.name} cover`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          {/* Content Container - Translates up on hover */}
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <div className="flex flex-col gap-1">
              {/* BIG TEXT: The main unique selling point */}
              <span className="text-white font-druk text-xl uppercase tracking-wide leading-none">
                {booster.highlight}
              </span>

              {/* SMALL TEXT: Supporting detail */}
              <span className="text-pink-bright text-xs font-bold uppercase tracking-wider">
                {booster.subHighlight}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Footer Area (Profile Info) */}
      <div className="flex items-center justify-between px-1 mt-auto">
        {/* Left: Avatar + Name + Country */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={booster.profile}
              alt={booster.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-sm text-gray-900 group-hover:text-pink-bright transition-colors">
            {booster.name}
          </span>
          <div className="opacity-60 grayscale group-hover:grayscale-0 transition-all">
            <FlagIcon
              code={booster.country}
              width={16}
              className="rounded-[2px]"
            />
          </div>
        </div>

        {/* Right: Stats (Rating + Jobs) */}
        <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1" title="Rating">
            <svg
              className="w-3 h-3 text-yellow-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {booster.rating}
          </span>
          <span className="flex items-center gap-1" title="Completed Jobs">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {booster.jobs}
          </span>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function BoostingPage() {
  // State for the selected booster
  const [selectedBooster, setSelectedBooster] = useState<any>(null);

  return (
    <div className="mb-24 min-h-screen">
      {/* Header */}
      <div className="section-container pt-12 pb-10">
        <div className="max-w-2xl">
          <h1 className="font-druk text-4xl md:text-5xl uppercase mb-4 text-gray-900">
            Available <span className="text-pink-bright">Boosters</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Hire our verified professional players. Select a specialist that
            fits your playstyle.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-x-8 gap-y-10">
          {boosters.map((booster) => (
            <div
              key={booster.id}
              onClick={() => setSelectedBooster(booster)}
              className="cursor-pointer" // Added specifically for the wrapper interaction
            >
              <BoosterCard booster={booster} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <BoosterModal
        open={!!selectedBooster}
        booster={selectedBooster}
        onClose={() => setSelectedBooster(null)}
      />
    </div>
  );
}
