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
  const viewportRef = useRef<HTMLDivElement>(null);   // the capped container
  const trackRef = useRef<HTMLDivElement>(null);       // the moving track
  const controls = useAnimationControls();

  function start(px: number, sec: number) {
    controls.start({ x: -px, transition: { ease: "linear", duration: sec, repeat: Infinity } });
  }

  const [sets, setSets] = useState(1);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(60);

  // how many copies to fill the visible container, not the whole window
  useEffect(() => {
    const recalc = () => {
      const minW = 36;
      const vw = viewportRef.current?.clientWidth ?? window.innerWidth;
      const copies = Math.ceil(Math.ceil(vw / minW) / srcList.length);
      setSets(copies);
    };
    recalc();

    const ro = new ResizeObserver(recalc);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  // measure one loop width and set speed
  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const node = trackRef.current;
    const compute = () => {
      const half = node.offsetWidth / 2; // width of one logo set
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

  const logos = useMemo(() => Array.from({ length: sets * 2 }, () => srcList).flat(), [sets]);

  return (
    <div className="section-container navbarsm:py-5" ref={viewportRef}>
      <div
        className="flex overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 20%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, black 20%, black 80%, transparent 100%)",
        }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => start(distance, duration)}
      >
        <motion.div
          ref={trackRef}
          className={`flex flex-none ${logoGap} ${logoPad} whitespace-nowrap`}
          initial={{ x: 0 }}
          animate={controls}
        >
          {logos.map(({ src, alt }, i) => (
            <Image key={i} src={src} alt={alt} className={`${logoSize} flex-shrink-0 object-contain`} draggable={false} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
