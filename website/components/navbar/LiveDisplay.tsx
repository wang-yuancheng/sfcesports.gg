"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function LongLiveDisplay() {
  const backVariant = {
    closed: { scale: 0.97, y: 5 },
    open: { scale: 1, y: 65 },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center pb-8 sm:pb-5 sm:hidden">
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
            className="absolute inset-0 flex items-center justify-center rounded-md shadow-grey-10 px-3 py-3 md:py-2 bg-white w-full h-[58px]"
          >
            <motion.div className="">LIVE DISPLAY BACK</motion.div>
          </motion.div>

          {/* front card */}
          <div className="relative z-10 flex items-center justify-center rounded-md shadow-grey-10 px-3 py-3 md:py-2 bg-white w-full h-[58px]">
            LIVE DISPLAY FRONT
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

  return (
    <motion.div
      className="hidden navbarsm:flex navbarlg:absolute navbarlg:left-1/2 navbarlg:-translate-x-1/2 relative w-fit"
      initial="initial"
      whileHover="hover"
    >
      {/* back card */}
      <motion.div
        variants={backVariant}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 flex items-center justify-center rounded-md shadow-grey-10 px-3 py-3 md:py-2 bg-white min-w-[288px] min-h-[52px]"
      >
        LIVE DISPLAY BACK
      </motion.div>

      {/* front card */}
      <div className="relative z-10 flex items-center justify-center rounded-md shadow-grey-10 px-3 py-3 md:py-2 bg-white min-w-[288px] min-h-[52px]">
        LIVE DISPLAY FRONT
      </div>
    </motion.div>
  );
}
