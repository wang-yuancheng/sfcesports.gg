"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  LiveContentBack,
  LiveContentFront,
} from "@/components/navigation/LiveContent";

export function LongLiveDisplay() {
  const backVariant = {
    closed: { scale: 0.97, y: 5 },
    open: { scale: 1, y: 65 },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center pb-8 sm:pb-5">
      <div className="flex flex-col items-center max-w-[500px] min-w-[200px] w-full px-4">
        <motion.div
          layout
          animate={{ height: open ? 153 : 58 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.2,
            duration: 0.1,
          }}
          className="relative w-full max-w-[448px] min-w-[200px] h-[58px] my-2"
        >
          {/* Open live display overlay for mobile */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              aria-label="Open live details"
              className="absolute inset-0 z-30 w-full h-full rounded-md cursor-pointer focus:outline-none"
            />
          )}

          {/* back card */}
          <motion.div
            variants={backVariant}
            initial="closed"
            animate={open ? "open" : "closed"}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.2,
              duration: 0.1,
            }}
            className="absolute inset-0 flex items-center justify-center rounded-md shadow-gray-10 px-3 py-3 md:py-2 bg-white w-full h-[58px]"
          >
            <LiveContentBack showVod={open} />
          </motion.div>

          {/* front card */}

          <div className="relative z-10 flex items-center justify-center rounded-md shadow-gray-10 px-3 py-3 md:py-2 bg-white w-full h-[58px]">
            <LiveContentFront showVod={open} />
          </div>

          {/* pill button */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ delay: open ? 0 : 0.4, duration: 0.2 }}
            className="absolute z-20 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
          >
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-1 rounded-full bg-white shadow-md text-[9px] sm:text-[10px]"
            >
              + Load More
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ delay: open ? 0.4 : 0, duration: 0.2 }}
            className="absolute z-20 left-1/2 bottom-0 -translate-x-1/2"
          >
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-1 rounded-full bg-white shadow-md text-[9px] sm:text-[10px]"
            >
              × Close
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function ShortLiveDisplay() {
  const backVariant = {
    initial: { scale: 0.97, y: 5 },
    hover: { scale: 1, y: 60 },
  };

  const hoverHitboxVariant = {
    initial: { height: 52 },   
    hover: { height: 112 },     
  };

  return (
    <motion.div
      className="hidden navbarsm:flex navbarlg:absolute navbarlg:left-1/2 navbarlg:-translate-x-1/2 relative w-fit z-50"
      initial="initial"
      whileHover="hover"
    >
      {/* Invisible hover bridge, grows only when the back card is out */}
      <motion.div
        variants={hoverHitboxVariant}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="absolute top-0 left-0 right-0 bg-transparent z-0"
        aria-hidden="true"
      />

      {/* back card */}
      <motion.div
        variants={backVariant}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="absolute top-0 left-0 flex items-center rounded-md shadow-gray-10 px-3 bg-white min-w-[288px] h-[52px] transform-gpu will-change-transform"
      >
        <LiveContentBack showVod={false} />
      </motion.div>

      {/* front card */}
      <div className="relative z-10 flex items-center rounded-md shadow-gray-10 px-3 bg-white min-w-[288px] h-[52px]">
        <LiveContentFront showVod={false} />
      </div>
    </motion.div>
  );
}
