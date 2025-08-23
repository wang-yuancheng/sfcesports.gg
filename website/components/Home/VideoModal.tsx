"use client";

import React, { useEffect } from "react";

type VideoModalProps = {
  open: boolean;
  title: string;
  videoId: string;                 // YouTube video ID
  onClose: () => void;
};

export default function VideoModal({
  open,
  title,
  videoId,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          title={title}
          className="h-full w-full"
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
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
