import React from "react";
import { Events } from "@/lib/types";

export default function EventTimeline({ events }: { events: Events[] }) {
  return (
    <div>
      {/* Timeline */}
      <div className="relative mx-auto mt-6 max-w-3xl px-2 sm:px-4 md:px-6">
        {/* vertical rail */}
        <div className="pointer-events-none absolute top-4 bottom-6 w-[3px] bg-pink-bright ml-[23px]" />

        <ul className="space-y-10">
          {events.map((event, idx) => (
            <li key={event.slug} className="relative pl-0">
              {/* number badge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center rounded-full border-2 border-black bg-pink-bright text-black font-bold text-lg">
                {idx + 1}
              </div>

              {/* text block */}
              <div className="group pl-20">
                <p className="font-druk text-heading-md md:text-heading-md uppercase text-lg md:text-xl leading-tight group-hover:text-pink-bright transition-colors duration-300">
                  {event.name}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                  {event.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
