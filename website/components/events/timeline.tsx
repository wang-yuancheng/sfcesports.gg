"use client";

import React from "react";
import { Events } from "@/lib/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function EventTimeline({ events }: { events: Events[] }) {
  return (
    <div>
      {/* Timeline */}
      <div className="relative mx-auto mt-6 max-w-3xl px-2 sm:px-4 md:px-6">
        {/* vertical rail */}
        <div className="pointer-events-none absolute top-6 bottom-8 w-[3px] bg-pink-bright ml-[23px] [@media(min-width:2930px)]:ml-[26px]" />

        <ul className="space-y-10">
          {events.map((event, idx) => (
            <li key={event.name} className="relative pl-0">
              {/* number badge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center rounded-full border-2 border-black bg-pink-bright text-black font-bold text-lg">
                {idx + 1}
              </div>

              {/* text block and dialog */}
              <div className="group pl-20">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-left w-full"
                      aria-label={`Open details for ${event.name}`}
                    >
                      <p className="font-druk text-heading-md md:text-heading-md uppercase text-lg md:text-xl leading-tight group-hover:text-pink-bright transition-colors duration-300">
                        {event.name}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                        {event.duration}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                        {event.participants} Participants
                      </p>
                    </button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="uppercase">
                        {event.name}
                      </DialogTitle>
                      <DialogDescription>{event.duration}</DialogDescription>
                    </DialogHeader>

                    <div>
                      <p>
                        <span>Participants: </span>
                        {event.participants}
                      </p>
                      <p>{event.description}</p>
                      <p>{event.prizepool}</p>
                      <div>
                        {event.standings?.map((rank, index) => (
                          <div key={index}>
                            <p>
                              {rank.place} {rank.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
