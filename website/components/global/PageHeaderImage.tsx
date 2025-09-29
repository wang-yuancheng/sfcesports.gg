import Image from "next/image";
import React from "react";
import { PageHeaderImageProps } from "@/lib/types";

export default function PageHeaderImage({
  mobileSrc,
  desktopSrc,
  aspectRatio = "aspect-[1920/850]",
}: PageHeaderImageProps) {
  return (
    <>
      {/* Mobile banner */}
      <div className="block md:hidden w-full overflow-hidden border border-gray-100 aspect-[780/780]">
        <div className="relative w-full h-full">
          <Image
            src={mobileSrc ?? desktopSrc}
            alt="banner"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Desktop banner */}
      <div className="hidden md:block section-container navbarsm:mt-6">
        <div className={`relative w-full overflow-hidden rounded-lg border border-gray-100 ${aspectRatio}`}>
          <Image
            src={desktopSrc}
            alt="banner"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
