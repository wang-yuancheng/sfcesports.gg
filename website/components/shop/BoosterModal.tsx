"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/home/ImageModal";

export default function BoosterModal({
  booster,
  open,
  onClose,
}: {
  booster: any;
  open: boolean;
  onClose: (open: boolean) => void;
}) {
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Ref to store the scroll position across unmounts
  const scrollPosRef = useRef(0);

  // 1. Persist booster data
  const [displayedBooster, setDisplayedBooster] = useState(booster);

  useEffect(() => {
    if (booster) {
      setDisplayedBooster(booster);
    }
  }, [booster]);

  // 2. Visibility States
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Sync open state from parent
  useEffect(() => {
    if (open) {
      setIsDialogVisible(true);
      setActiveImageIndex(null);
      // Only reset scroll on a fresh open from the parent
      scrollPosRef.current = 0;
    } else {
      setIsDialogVisible(false);
      setActiveImageIndex(null);
    }
  }, [open]);

  // 3. Scroll Restoration Logic
  useLayoutEffect(() => {
    if (isDialogVisible) {
      // We use setTimeout(0) to push this to the end of the event loop.
      // This ensures we set scrollTop AFTER Radix UI has finished its focus management
      // and the browser has finished layout.
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollPosRef.current;
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isDialogVisible]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- TRANSITION LOGIC ---

  const handleImageClick = (index: number) => {
    // Capture the current scroll position right before we unmount
    if (scrollContainerRef.current) {
      scrollPosRef.current = scrollContainerRef.current.scrollTop;
    }

    setIsDialogVisible(false); // Fade out Dialog
    setTimeout(() => {
      setActiveImageIndex(index); // Fade in Image
    }, 200);
  };

  const handleImageClose = () => {
    setActiveImageIndex(null); // Fade out Image
    setTimeout(() => {
      setIsDialogVisible(true); // Fade in Dialog (will trigger scroll restore)
    }, 300);
  };

  const handleFullClose = () => {
    setIsDialogVisible(false);
    setTimeout(() => {
      onClose(false);
    }, 300);
  };

  if (!displayedBooster) return null;

  return (
    <>
      <Dialog
        open={isDialogVisible}
        onOpenChange={(val) => {
          if (!val) handleFullClose();
        }}
      >
        <DialogContent 
          // !overflow-hidden forces the outer dialog shell to NOT scroll.
          // This ensures only our inner div (with the ref) handles scrolling.
          className="max-w-[1200px] w-[95vw] h-[90vh] md:h-auto md:max-h-[90vh] p-0 !overflow-hidden bg-white flex flex-col rounded-xl border-none outline-none"
        >
          {/* We attach the ref here to control scrolling explicitly */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden relative"
          >
            <div className="bg-white px-6 pt-10 pb-4 md:px-10 md:pt-12 md:pb-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-pink-bright font-sans">
                  Current Service Offer
                </span>
              </div>

              <DialogTitle className="font-druk text-3xl md:text-5xl uppercase tracking-wide text-gray-900 leading-[0.9] text-left">
                {displayedBooster.title}
              </DialogTitle>

              <DialogDescription className="sr-only">
                Service details for {displayedBooster.name}
              </DialogDescription>
            </div>

            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-3 md:px-10 md:py-4 flex items-center justify-between shadow-sm">
              {/* Left: Profile Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={displayedBooster.profile}
                    alt={displayedBooster.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 text-base leading-none">
                    {displayedBooster.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        displayedBooster.availability
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      }`}
                    />

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide ${
                        displayedBooster.availability
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {displayedBooster.availability
                        ? "Available for work"
                        : "Not available"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="rounded-full border-gray-200 hover:bg-gray-50 text-gray-900 px-4 md:px-6 text-sm font-semibold h-9"
                >
                  Message
                </Button>
                <Button className="rounded-full bg-gray-900 hover:bg-black text-white px-4 md:px-6 text-sm font-semibold h-9">
                  Make Payment
                </Button>
              </div>
            </div>

            <div className="px-6 py-8 md:px-10 md:py-10 bg-[#FAFAFA] min-h-full">
              <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
                <div className="relative w-full aspect-video md:aspect-[2/1] rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200">
                  <Image
                    src={displayedBooster.cover}
                    alt="Main Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="max-w-[800px] mx-auto w-full py-2">
                  <div className="prose prose-lg text-gray-700 leading-relaxed text-lg text-justify">
                    <p>{displayedBooster.description}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-2" />

                <div className="w-full">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-druk text-lg md:text-xl uppercase text-gray-900">
                      Portfolio
                    </h4>
                    <span className="text-sm text-gray-500 font-medium">
                      {displayedBooster.gallery?.length} Verified Stats
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {displayedBooster.gallery &&
                      displayedBooster.gallery.map((img: any, idx: number) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => handleImageClick(idx)}
                            className="group relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gray-200 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-pink-bright focus:ring-offset-2"
                          >
                            <Image
                              src={img}
                              alt={`Achievement ${idx + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover Overlay hint */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                <div ref={contactRef} className="mt-16 mb-10 w-full">
                  <div className="w-full mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-full mb-8">
                      <div className="h-px bg-gray-300 flex-1 opacity-50" />

                      <div className="mx-8 relative w-20 h-20 rounded-full overflow-hidden border-[4px] border-white shadow-md shrink-0 z-10 bg-gray-50">
                        <Image
                          src={displayedBooster.profile}
                          alt={displayedBooster.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="h-px bg-gray-300 flex-1 opacity-50" />
                    </div>


                    <p className="font-bold tracking-tight text-gray-900 max-w-lg mx-auto mb-8">
                      Discuss your goals, schedule, and budget before booking.
                    </p>

                    <Button
                      onClick={() =>
                        window.open("https://discord.gg/2Sby35W", "_blank")
                      }
                      className="rounded-full bg-black hover:bg-pink-bright transition-colors text-white px-10 h-12 text-base font-bold shadow-xl shadow-gray-200 active:scale-95"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ImageModal
        open={activeImageIndex !== null}
        images={displayedBooster.gallery || []}
        index={activeImageIndex ?? 0}
        onClose={handleImageClose}
      />
    </>
  );
}