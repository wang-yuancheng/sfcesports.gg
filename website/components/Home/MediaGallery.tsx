"use client";

import * as React from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MediaGallery({ media }: { media: StaticImageData[] }) {
  const [activeImage, setActiveImage] = React.useState<number | null>(null);

  return (
    <section>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-druk uppercase">Media</h2>

        <Carousel
          className="w-full"
          opts={{
            dragFree: true,
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent>
            {media.map((m, i) => (
              <CarouselItem key={i} className="pl-4 basis-auto">
                <ImageCard image={m} onOpen={() => setActiveImage(i)} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious />
          </div>
          <div className="hidden md:block">
            <CarouselNext />
          </div>
        </Carousel>

        <ImageModal
          open={activeImage !== null}
          images={media}
          index={activeImage ?? 0}
          onClose={() => setActiveImage(null)}
        />
      </div>
    </section>
  );
}
