"use client";
import Image from "next/image";
import shibeLogoColor from "@/assets/icons/shibe-pinkbright.svg";
import shibeLogoBlack from "@/assets/icons/shibe-black.svg";

export default function LogoFade() {
  return (
    <div className="relative w-10 h-10 group">
      {/* Colored logo (visible by default) */}
      <Image
        src={shibeLogoColor}
        alt="Shibe Logo"
        fill
        priority
        draggable={false}
        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Black logo (visible on hover) */}
      <Image
        src={shibeLogoBlack}
        alt="Shibe Logo"
        fill
        priority
        draggable={false}
        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
