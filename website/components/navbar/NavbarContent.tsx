import React from "react";
import Image from "next/image";
import shibeLogo from "@/assets/icons/shibe-color.webp";
import pubgmLogo from "@/assets/logos/pubgm.svg";
import novaLogo from "@/assets/logos/nova.webp";
import { ChevronRight } from "lucide-react";

export function NavbarContentFront({ showVod }: { showVod: boolean }) {
  return (
    <a href="/live" className="block w-full group">
      <div className="w-full flex justify-between items-center pl-2">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <Image
            src={pubgmLogo}
            alt="PUBGM Logo"
            width={35}
            draggable={false}
            className="object-contain"
          />
          <div>
            {/* status text that flips on hover */}
            <div className="font-[600] text-sm leading-tight">SCC S2</div>

            <StatusLine showVod={showVod} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <ChevronRight className="w-[25px] h-[25px] text-gray-600 hover:text-gray-400 transition-colors" />
        </div>
      </div>
    </a>
  );
}

export function NavbarContentBack({ showVod }: { showVod: boolean }) {
  return (
    <a href="/live" className="block w-full group">
      <div className="w-full flex justify-between items-center px-2">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <Image
            src={pubgmLogo}
            alt="PUBGM Logo"
            width={35}
            draggable={false}
            className="object-contain"
          />
          <div>
            <div className="font-[600] text-sm leading-tight">SFC vs NOVA</div>
            <StatusLine showVod={showVod} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <Image
            src={shibeLogo}
            alt="Shibe Logo"
            width={35}
            draggable={false}
            className="object-contain"
          />
          <Image
            src={novaLogo}
            alt="Nova Logo"
            width={35}
            draggable={false}
            className="object-contain"
          />
        </div>
      </div>
    </a>
  );
}
function StatusLine({ showVod }: { showVod: boolean }) {
  return (
    <div className="relative block leading-tight">
      {/* default line */}
      <div
        className={`
          font-[400] text-xs text-gray-700
          transition-opacity duration-300      
          ${showVod
            ? "opacity-0 pointer-events-none"       
            : "opacity-100 group-hover:opacity-0 group-hover:duration-0"}
        `}
      >
        Tournament has ended
      </div>

      {/* VOD prompt overlays the same spot */}
      <div
        className={`
          absolute inset-0 font-[400] text-xs text-gray-700
          transition-opacity duration-300
          ${showVod
            ? "opacity-100"                        
            : "opacity-0 group-hover:opacity-100 group-hover:duration-0"} 
        `}
      >
        Click to view VODs
      </div>
    </div>
  );
}

