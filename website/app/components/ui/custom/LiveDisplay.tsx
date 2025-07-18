"use client";

export function LongLiveDisplay() {
  return (
    <div className="flex justify-center">
      <div className="navbarsm:hidden gap-2 rounded-md shadow-sm px-3 py-3 md:py-2 bg-white min-w-[300px] w-[448px] h-[58px]">
        <div className="flex items-center justify-center h-full">
          Live Display
        </div>
      </div>
    </div>
  );
}

export function ShortLiveDisplay() {
  return (
    <div className="hidden navbarsm:flex navbarlg:absolute navbarlg:left-1/2 navbarlg:-translate-x-1/2">
      <div className="flex gap-2 items-center justify-center rounded-md group shadow-sm px-3 py-3 md:py-2 bg-white min-w-[288px] min-h-[52px]">
        <div>LIVE DISPLAY TOP</div>
      </div>
    </div>
  );
}
