import Image from "next/image";
import React from "react";
import templogo from "@/assets/icons/shibe-pinkbright.svg";

export default function Match() {
  return (
    <div className="flex w-[220px] shrink-0 flex-col gap-1 rounded-sm p-1 md:w-[264px] md:gap-1.5 md:rounded-lg md:p-2 cursor-pointer bg-gray-100 shadow-[0px_8px_24px_0px_#FFFFFF4D]">
      <div className="flex h-3 items-center justify-between gap-2.5 text-[8px] leading-none font-bold uppercase md:h-4 md:text-[10px]">
        <p className="ps-1.5">Thu, Jul 31 - 8:00 PM</p>
        <p className="rounded-xs px-1 py-0.5 uppercase md:rounded-sm md:px-[5px] md:py-[3px] bg-white">
          completed
        </p>
      </div>
      <div className="flex h-8 items-center justify-between rounded-xs bg-white p-[3px] ps[9px] md:h-[55px] md:rounded-md">
        <div className="flex min-w-0 items-center gap-1 opacity-50">
          <Image src={templogo} alt="" className="size-5 md:size-10" />
          <p className="max-w-full truncate text-[10px] leading-none font-bold uppercase md:text-xs">
            Team Number 1
          </p>
        </div>
        <div className="flex size-[26px] items-center justify-center rounded-[2px] px-[7.5px] py-[5px] md:size-[49px] md:rounded-[3px] md:p-2">
          <p className="text-base leading-none font-bold md:text-2xl opacity-50">
            1
          </p>
        </div>
      </div>
      <div className="flex h-8 items-center justify-between rounded-xs bg-white p-[3px] ps[9px] md:h-[55px] md:rounded-md">
        <div className="flex min-w-0 items-center gap-1 ">
          <Image src={templogo} alt="" className="size-5 md:size-10" />
          <p className="max-w-full truncate text-[10px] leading-none font-bold uppercase md:text-xs">
            Team Number 2
          </p>
        </div>
        <div className="flex size-[26px] items-center justify-center rounded-[2px] px-[7.5px] py-[5px] md:size-[49px] md:rounded-[3px] md:p-2 bg-gray-100">
          <p className="text-base leading-none font-bold md:text-2xl o">2</p>
        </div>
      </div>
      <div className="flex h-3 items-center justify-between md:h-4">
        <p className="ps-1 text-[8px] leading-none font-extrabold uppercase">
          Quarterfinal
        </p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          className="size-4"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
      </div>
    </div>
  );
}
