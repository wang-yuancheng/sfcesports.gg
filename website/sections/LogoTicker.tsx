"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bilibiliLogo from "@/assets/bilibili.webp";
import expressvpnLogo from "@/assets/expressvpn.webp";
import creatorhubLogo from "@/assets/creatorhub.webp";
import neteaseLogo from "@/assets/netease.webp";
import redmagicLogo from "@/assets/redmagic.webp";
import shopeeLogo from "@/assets/shopee.webp";
import kooruiLogo from "@/assets/koorui.webp";
import streamelementsLogo from "@/assets/streamelements.webp";


const srcList = [
  { src: neteaseLogo, alt: "NetEase Logo" },
  { src: creatorhubLogo, alt: "CreatorHub Logo" },
  { src: redmagicLogo, alt: "Redmagic Logo" },
  { src: shopeeLogo, alt: "Shopee Logo" },
  { src: bilibiliLogo, alt: "Bilibili Logo" },
  { src: expressvpnLogo, alt: "ExpressVPN Logo" },
  { src: kooruiLogo, alt: "Koorui Logo" },
  { src: streamelementsLogo, alt: "Streamelements Logo" },

];

// clamp helpers reused below
const logoSize = "h-[clamp(24px,6vw,44px)] w-auto";
const logoGap = "gap-[clamp(15px,10vw,100px)]";
const logoPad = "pr-[clamp(12px,4vw,32px)]";

export default function LogoTicker() {
  const [repeat, setRepeat] = useState(2); // how many times to duplicate srcList

  // Re‑calculate after every resize / zoom
  useEffect(() => {
    function updateRepeats() {
      // worst‑case: logo is 24 px high, ~24 px wide, gap min 12 px ⇒ ~36 px per item
      const minItemWidth = 36;
      const vw = window.innerWidth;
      const minNeeded = Math.ceil(vw / minItemWidth) + 2; // +2 ≈ extra buffer
      const cycles = Math.ceil(minNeeded / srcList.length);
      setRepeat(cycles);
    }
    updateRepeats();
    window.addEventListener("resize", updateRepeats);
    return () => window.removeEventListener("resize", updateRepeats);
  }, []);

  const logos = Array.from({ length: repeat }, () => srcList).flat();

  return (
    <div className="my-3 md:my-8 mx-[clamp(1.5rem,6vw,12rem)]">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className={`flex flex-none ${logoGap} ${logoPad} whitespace-nowrap`}
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {logos.map(({ src, alt }, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              className={`${logoSize} flex-shrink-0 object-contain`}
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
