import React from "react";
import EventHero from "@/components/home/EventHero";
import ChevronRight from "@/assets/icons/chevron-right-white.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { events } from "@/data/home/events";

export default function PastEvents() {
  return (
    <section className="section-container pt-14 navbarsm:pb-14 mb-5">
      <div className="w-full mt-0 sm:mt-0 mb-8">
        <p className="uppercase text-4xl font-druk font-medium text-center">
          Featured Events
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:hidden">
        {events.map((evt, i) => (
          <EventHero
            key={i}
            header={evt.header}
            date={evt.date}
            href={evt.href}
            image={evt.image}
          />
        ))}
      </div>

      <div className="hidden md:block">
        <Carousel
          className="w-full"
          opts={{
            dragFree: true,
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent>
            {events.map((evt, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <EventHero
                  header={evt.header}
                  date={evt.date}
                  href={evt.href}
                  image={evt.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="xxxlg:hidden">
            <CarouselPrevious
              variant="ghost"
              className="!absolute left-2 top-1/2 -translate-y-1/2 p-0 h-12 w-12 text-white bg-transparent hover:bg-transparent active:bg-transparent"
            >
              <Image
                src={ChevronRight}
                alt="Chevron Right"
                className="w-[35px] h-[35px] rotate-180"
              />
            </CarouselPrevious>

            <CarouselNext
              variant="ghost"
              className="!absolute right-2 top-1/2 -translate-y-1/2 p-0 h-12 w-12 bg-transparent hover:bg-transparent active:bg-transparent"
            >
              <Image
                src={ChevronRight}
                alt="Chevron Right"
                className="w-[35px] h-[35px]"
              />
            </CarouselNext>
          </div>

          <div className="hidden xxxlg:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
