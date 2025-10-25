import { useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import { StaticImageData } from "next/image";

export default function MediaGallery({ media }: { media: StaticImageData[] }) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-druk uppercase">Media</h2>
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none">
          <div className="flex gap-4">
            {media.map((m, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className="snap-start shrink-0"
              >
                <ImageCard image={m} onOpen={() => {}} />
              </div>
            ))}
          </div>
        </div>

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
