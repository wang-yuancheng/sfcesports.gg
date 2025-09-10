"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";
import sfcBanner from "@/assets/pictures/sfcbanner.png";
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

  // cross fade for both mobile and desktop
  const [activeSrc, setActiveSrc] = useState(computedBannerSrc);
  const [prevSrc, setPrevSrc] = useState(computedBannerSrc);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (computedBannerSrc === activeSrc) return;
    setPrevSrc(activeSrc);
    setActiveSrc(computedBannerSrc);
    setLoaded(false);
  }, [computedBannerSrc, activeSrc]);

  const Frame = ({ mobile }: { mobile: boolean }) => (
    <div
      className={[
        mobile ? "block lg:hidden" : "hidden lg:block",
        "relative w-full overflow-hidden rounded-md border border-gray-100 aspect-[2000/300]",
      ].join(" ")}
    >
      <Image
        key={`prev-${(prevSrc as any)?.src ?? "fallback"}`}
        src={prevSrc}
        alt="SFC banner previous"
        fill
        className="object-cover object-center"
        priority
      />
      <Image
        key={`active-${(activeSrc as any)?.src ?? "fallback"}`}
        src={activeSrc}
        alt="SFC banner"
        fill
        className={`object-cover object-center transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
        priority
      />
    </div>
  );

  return (
    <>
      <Frame mobile />
      <Frame mobile={false} />
    </>
  );
}
