"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function ImageModal({
  open,
  images,
  index,
  onClose,
}: {
  open: boolean;
  images: StaticImageData[];
  index: number;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(index);
  const [box, setBox] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  // drag-to-switch (mouse + touch), without triggering close
  const startXRef = useRef<number | null>(null);
  const movedRef = useRef(false);

  useEffect(() => {
    if (open) setCurrent(index);
  }, [open, index]);

  useEffect(() => {
    if (open) {
      setMounted(true);
      let a = 0, b = 0;
      a = requestAnimationFrame(() => {
        b = requestAnimationFrame(() => setVisible(true));
      });
      return () => { cancelAnimationFrame(a); cancelAnimationFrame(b); };
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted]); // eslint-disable-line

  // size box to image ratio (no bars)
  useEffect(() => {
    if (!mounted) return;
    const compute = () => {
      const img = images[current] as StaticImageData;
      const iw = (img?.width as number) || 1920;
      const ih = (img?.height as number) || 1080;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const maxW = Math.min(vw * 0.95, 1400);
      const maxH = vh * 0.9;

      const ratio = iw / ih;
      let w = maxW;
      let h = w / ratio;
      if (h > maxH) { h = maxH; w = h * ratio; }
      setBox({ w: Math.round(w), h: Math.round(h) });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [mounted, current, images]);

  if (!mounted) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const active = images[current];
  const alt =
    typeof active === "object" && "src" in active
      ? String((active as StaticImageData).src).split("/").pop()?.split(".")[0] || "Media image"
      : "Media image";

  // Backdrop click should close only if not dragged
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (movedRef.current) return; // ignore if we just dragged
    onClose();
  };

  // Pointer-based swipe to prev/next
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
    movedRef.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current == null) return;
    const dx = e.clientX - startXRef.current;
    if (!movedRef.current && Math.abs(dx) > 6) movedRef.current = true;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current == null) return;
    const dx = e.clientX - startXRef.current;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch {}
    startXRef.current = null;

    if (Math.abs(dx) >= 40) {
      if (dx > 0) prev(); else next();
    }
    // keep moved=true through click phase, then reset
    if (movedRef.current) setTimeout(() => (movedRef.current = false), 0);
  };

  return (
    <div
      className={[
        "fixed inset-0 z-[100] flex items-center justify-center bg-pink-light/70 p-4 backdrop-blur-sm transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onBackdropClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ willChange: "opacity", touchAction: "none" }}
    >
      <div
        className={[
          "relative rounded-xl overflow-hidden",
          "bg-black shadow-2xl ring-1 ring-white/10",
          "transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        role="document"
        onClick={(e) => e.stopPropagation()} // clicks inside shouldn't bubble to backdrop
        style={{
          width: box.w || "auto",
          height: box.h || "auto",
          maxWidth: "95vw",
          maxHeight: "90vh",
          willChange: "opacity",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={active}
            alt={alt}
            fill
            sizes="95vw"
            className="object-contain"
            placeholder={"blurDataURL" in (active as any) ? "blur" : undefined}
            priority
          />
        </div>

        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ×
        </button>
      </div>
    </div>
  );
}
