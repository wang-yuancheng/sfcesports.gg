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
import Image from "next/image";
import trophyIcon from "@/assets/icons/trophy.svg";
import calendarClockIcon from "@/assets/icons/calendar-clock.svg";
import usersIcon from "@/assets/icons/users.svg";
import EventDialogLeaderboard from "../leaderboards/leaderboards/EventDialogLeaderboard";

export default function EventTimeline({ events }: { events: Events[] }) {
  return (
    <div>
      {/* Timeline */}
      <div className="relative mx-auto mt-6 max-w-3xl px-2 sm:px-4 md:px-6">
        {/* vertical rail */}
        <div className="pointer-events-none absolute top-14 bottom-14 w-[3px] bg-pink-bright ml-[23px] [@media(min-width:2930px)]:ml-[25px]" />

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

                  <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                      <DialogTitle className="tracking-wide uppercase mb-1 text-lg">
                        {event.name}
                      </DialogTitle>

                      <DialogDescription asChild>
                        <div className="mt-2 space-y-1 text-neutral-700">
                          <p className="flex items-center gap-1">
                            <Image
                              src={calendarClockIcon}
                              alt=""
                              aria-hidden
                              unoptimized
                              className="h-3.5 w-3.5"
                            />
                            <span>{event.duration ?? "TBA"}</span>
                          </p>

                          <p className="flex items-center gap-1">
                            <Image
                              src={usersIcon}
                              alt=""
                              aria-hidden
                              unoptimized
                              className="h-3.5 w-3.5"
                            />
                            <span>
                              {Number(event.participants ?? 0).toLocaleString()}{" "}
                              Participants
                            </span>
                          </p>

                          {event.prizepool && (
                            <p className="flex items-center gap-1">
                              <Image
                                src={trophyIcon}
                                alt=""
                                aria-hidden
                                unoptimized
                                className="h-3.5 w-3.5"
                              />
                              <span>Prize Pool: {event.prizepool}</span>
                            </p>
                          )}
                        </div>
                      </DialogDescription>
                    </DialogHeader>

                    {Array.isArray(event.standings) ? (
                      event.standings.length > 0 ? (
                        <div className="mt-2">
                          <h3 className="mb-1.5 ml-0.5">Podium</h3>
                          <EventDialogLeaderboard rows={event.standings} />
                        </div>
                      ) : (
                        <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-600">
                          Standings are not available.
                        </div>
                      )
                    ) : null}
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
