"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function BoosterModal({
  booster,
  open,
  onClose,
}: {
  booster: any;
  open: boolean;
  onClose: (open: boolean) => void;
}) {
  // 1. Create a reference to the Contact Section
  const contactRef = useRef<HTMLDivElement>(null);

  // 2. Scroll function
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!booster) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[1200px] w-[95vw] h-[90vh] md:h-auto md:max-h-[90vh] p-0 overflow-hidden bg-white flex flex-col rounded-xl border-none outline-none">
        {/* Scrollable Container - Everything lives inside here */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
          {/* 1. SERVICE TITLE SECTION (Scrolls away) */}
          <div className="bg-white px-6 pt-10 pb-2 md:px-10 md:pt-12 md:pb-4">
            <DialogTitle className="font-druk text-3xl md:text-5xl uppercase tracking-wide text-gray-900 leading-[0.9] text-center md:text-left">
              {booster.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Service details for {booster.name}
            </DialogDescription>
          </div>

          {/* 2. STICKY HEADER (Name & Actions) */}
          <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-gray-100 px-6 py-3 md:px-10 md:py-4 flex items-center justify-between shadow-sm">
            {/* Left: Profile Info */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                <Image
                  src={booster.profile}
                  alt={booster.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-base leading-none">
                  {booster.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-600 text-[10px] font-bold uppercase tracking-wide">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
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

          {/* 3. SCROLLABLE BODY CONTENT */}
          <div className="px-6 py-8 md:px-10 md:py-10 bg-[#FAFAFA] min-h-full">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
              {/* Main Cover Image */}
              <div className="relative w-full aspect-video md:aspect-[2/1] rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200">
                <Image
                  src={booster.cover}
                  alt="Main Cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Custom Description */}
              <div className="max-w-[800px] mx-auto w-full py-2">
                <div className="prose prose-lg text-gray-700 leading-relaxed text-lg">
                  <p>{booster.description}</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 my-2" />

              {/* Achievements Gallery */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-druk text-lg md:text-xl uppercase text-gray-900">
                    Achievements
                  </h4>
                  <span className="text-sm text-gray-500 font-medium">
                    {booster.gallery?.length} shots
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {booster.gallery &&
                    booster.gallery.map((img: any, idx: number) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="group relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-200 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-zoom-in">
                          <Image
                            src={img}
                            alt={`Achievement ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* 4. CONTACT SECTION (MODIFIED) */}
              <div ref={contactRef} className="mt-16 mb-10 w-full">
                <div className="w-full mx-auto flex flex-col items-center text-center">
                  {/* The "Divider" Row */}
                  <div className="flex items-center justify-center w-full mb-8">
                    {/* Left Line - Stretches fully */}
                    <div className="h-px bg-gray-300 flex-1 opacity-50" />

                    {/* Center Avatar - Smaller (w-16 h-16) */}
                    <div className="mx-8 relative w-20 h-20 rounded-full overflow-hidden border-[4px] border-white shadow-md shrink-0 z-10 bg-gray-50">
                      <Image
                        src={booster.profile}
                        alt={booster.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right Line - Stretches fully */}
                    <div className="h-px bg-gray-300 flex-1 opacity-50" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl uppercase tracking-wide text-gray-900 mb-3">
                    Let's work together
                  </h3>

                  {/* Statement - Smaller text */}
                  <p className="font-bold tracking-tight text-gray-900 max-w-lg mx-auto mb-8">
                    Discuss your goals, schedule, and budget before booking.
                  </p>

                  {/* Button */}
                  <Button
                    onClick={() =>
                      window.open("https://discord.gg/2Sby35W", "_blank")
                    }
                    className="rounded-full bg-black hover:bg-pink-bright transition-colors text-white px-10 h-12 text-base font-bold shadow-xl shadow-gray-200 active:scale-95"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
