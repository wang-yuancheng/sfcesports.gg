"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";
import sfcBanner from "@/assets/pictures/sfcbanner.webp";
import type { GameCategories } from "@/lib/types";

type Props = {
  selectedGame: string;
  gameCategories: GameCategories[];
};

export default function TeamBanner({ selectedGame, gameCategories }: Props) {
  const selectedCategory = useMemo(
    () =>
      gameCategories.find((g) => g.value === selectedGame) as
        | (GameCategories & { bannerSrc?: StaticImageData })
        | undefined,
    [selectedGame, gameCategories]
  );
  const computedBannerSrc =
    selectedGame === "all"
      ? sfcBanner
      : selectedCategory?.bannerSrc ??
        selectedCategory?.backgroundSrc ??
        sfcBanner;

  const [activeBannerSrc, setActiveBannerSrc] = useState(computedBannerSrc);
  const [prevBannerSrc, setPrevBannerSrc] = useState(computedBannerSrc);
  const [bannerLoaded, setBannerLoaded] = useState(true);

  useEffect(() => {
    if (computedBannerSrc === activeBannerSrc) return;
    setPrevBannerSrc(activeBannerSrc);
    setActiveBannerSrc(computedBannerSrc);
    setBannerLoaded(false);
  }, [computedBannerSrc, activeBannerSrc]);

  return (
    <>
      {/* mobile banner */}
      <div className="block lg:hidden relative w-full overflow-hidden rounded-md border border-gray-100 aspect-[2000/300]">
        <Image
          key={`m-prev-${(prevBannerSrc as any)?.src ?? "fallback"}`}
          src={prevBannerSrc}
          alt="SFC banner previous"
          fill
          className="object-cover object-center"
          priority
        />
        <Image
          key={`m-active-${(activeBannerSrc as any)?.src ?? "fallback"}`}
          src={activeBannerSrc}
          alt="SFC banner"
          fill
          className={`object-cover object-center transition-opacity duration-300 ${
            bannerLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setBannerLoaded(true)}
          priority
        />
      </div>

      {/* desktop banner */}
      <div
        className=
          "hidden lg:block relative w-full overflow-hidden rounded-md border border-gray-100 aspect-[2000/300]">
        <Image
          key={`prev-${(prevBannerSrc as any)?.src ?? "fallback"}`}
          src={prevBannerSrc}
          alt="SFC banner previous"
          fill
          className="object-cover object-center"
          priority
        />
        <Image
          key={`active-${(activeBannerSrc as any)?.src ?? "fallback"}`}
          src={activeBannerSrc}
          alt="SFC banner"
          fill
          className={`object-cover object-center transition-opacity duration-300 ${
            bannerLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setBannerLoaded(true)}
          priority
        />
      </div>
    </>
  );
}
