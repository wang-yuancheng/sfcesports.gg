"use client";
import Image from "next/image";

export default function LogoFade() {
  return (
    <div className="relative w-10 h-10 group">
      {/* Colored logo (visible by default) */}
      <Image
        src="/logo-color.webp"
        alt="Logo Color"
        fill
        priority
        draggable={false}
        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Black logo (visible on hover) */}
      <Image
        src="/logo-black.svg"
        alt="Logo Black"
        fill
        priority
        draggable={false}
        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
