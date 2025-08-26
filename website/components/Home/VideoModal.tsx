"use client";

import React, { useEffect, useState } from "react";

type VideoModalProps = {
  open: boolean;
  title: string;
  videoId: string;
  onClose: () => void;
};

export default function VideoModal({
  open,
  title,
  videoId,
  onClose,
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true); // add modal to DOM
      setIframeReady(false); // reset iframe fade

      let firstFrameId = 0;
      let secondFrameId = 0;

      firstFrameId = requestAnimationFrame(() => {
        secondFrameId = requestAnimationFrame(() => setVisible(true));
      });

      return () => {
        cancelAnimationFrame(firstFrameId);
        cancelAnimationFrame(secondFrameId);
      };
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <div
      className={[
        "fixed inset-0 z-[100] flex items-center justify-center bg-pink-light/70 p-4 backdrop-blur-sm transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{ willChange: "opacity" }}
    >
      <div
        className={[
          "relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden",
          "bg-black shadow-2xl ring-1 ring-white/10",
          "transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{ willChange: "opacity" }}
      >
        <iframe
          title={title}
          className={[
            "absolute inset-0 h-full w-full z-0",
            "transition-opacity duration-300",
            iframeReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="eager"
          onLoad={() => setIframeReady(true)}
        />
        <div
          className={[
            "absolute inset-0 z-10 pointer-events-none bg-black transition-opacity duration-300",
            iframeReady ? "opacity-0" : "opacity-100",
          ].join(" ")}
          style={{ willChange: "opacity" }}
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
