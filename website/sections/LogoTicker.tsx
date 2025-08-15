"use client";

import { useEffect, useLayoutEffect, useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

import bilibiliLogo from "@/assets/logos/bilibili.webp";
import expressvpnLogo from "@/assets/logos/expressvpn.webp";
import creatorhubLogo from "@/assets/logos/creatorhub.webp";
import neteaseLogo from "@/assets/logos/netease.webp";
import redmagicLogo from "@/assets/logos/redmagic.webp";
import shopeeLogo from "@/assets/logos/shopee.webp";
import kooruiLogo from "@/assets/logos/koorui.webp";
import streamelementsLogo from "@/assets/logos/streamelements.webp";

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

const logoSize = "h-[clamp(24px,6vw,44px)] w-auto";
const logoGap = "gap-[clamp(15px,10vw,100px)]";
const logoPad = "pr-[clamp(15px,10vw,100px)]";
const SPEED = 40; // px per second

export default function LogoTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  function start(px: number, sec: number) {
    controls.start({
      x: -px,
      transition: { ease: "linear", duration: sec, repeat: Infinity },
    });
  }

  const [sets, setSets] = useState(1);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(60);

  /* how many copies to fill viewport */
  useEffect(() => {
    const recalc = () => {
      const minW = 36;
      const vw = window.innerWidth;
      const copies = Math.ceil(Math.ceil(vw / minW) / srcList.length);
      setSets(copies);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  /* measure width, derive speed */
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const compute = () => {
      const half = node.offsetWidth / 2;
      setDistance(half);
      const sec = half / SPEED;
      setDuration(sec);
      start(half, sec);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(node);
    return () => ro.disconnect();
  }, [sets]);

  const logos = useMemo(
    () => Array.from({ length: sets * 2 }, () => srcList).flat(),
    [sets]
  );

  /* wrapper uses padding instead of margin so the padding area receives hover */
  return (
    <div
      className="my-6 py-6 md:py-8 px-[clamp(1.5rem,6vw,12rem)]"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => start(distance, duration)}
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          ref={containerRef}
          className={`flex flex-none ${logoGap} ${logoPad} whitespace-nowrap`}
          initial={{ x: 0 }}
          animate={controls}
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
