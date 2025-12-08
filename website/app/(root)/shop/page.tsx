import React from "react";
import Image from "next/image";
import shopHero from "@/assets/pictures/shophero.png";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="section-container flex flex-col items-center py-12 lg:py-20 xl:py-28 overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 mx-auto text-center relative">
        {/* --- HERO SECTION --- */}
        <section className="mb-20 lg:mb-32">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 lg:mb-14 leading-[1.1]">
            Skip the grind. <br />
            Reach the top.
          </h1>

          {/* Image Area */}
          <div className="relative w-full flex justify-center items-center mb-10 px-4">
            <div className="relative w-full max-w-[850px]">
              {/* Left Floating Bubble (Conqueror) */}
              <div className="absolute -top-5 left-[5%] xs:-top-5 xs:left-[0%] md:-top-4 lg:-top-4 md:left-0 z-20 transition-all duration-300">
                <div
                  className="bg-pink-bright text-white
                  text-[10px] xs:text-xs sm:text-sm lg:text-base 
                  px-3 py-1 xs:px-4 xs:py-1.5 md:px-6 md:py-2 
                  rounded-xl rounded-bl-none md:rounded-2xl md:rounded-bl-none 
                  transform -rotate-12 shadow-lg md:shadow-xl 
                  font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Conqueror
                </div>
              </div>

              {/* Right Floating Bubble (+125 PTS) */}
              <div className="absolute -top-5 right-[4%] xs:-top-5 xs:-right-[2%] md:-top-6 md:right-[0%] z-20 transition-all duration-300">
                <div
                  className="bg-pink-bright text-white
                  text-[10px] xs:text-xs sm:text-sm lg:text-base 
                  px-3 py-1 xs:px-4 xs:py-1.5 md:px-6 md:py-2 
                  rounded-xl rounded-br-none md:rounded-2xl md:rounded-br-none 
                  transform rotate-12 shadow-lg md:shadow-xl 
                  font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  +125 PTS
                </div>
              </div>

              {/* Main Image */}
              <Image
                src={shopHero}
                alt="Boosting Services"
                width={850}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            Don't have 12 hours a day to play? Hire our professional esports
            players to help you reach your dream rank.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop/boosting">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-bright transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                Start Boosting
              </button>
            </Link>

            <Link href="/shop/boosting/pricing">
              <button className="bg-transparent text-gray-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 hover:text-gray-900 transition-colors w-full sm:w-auto">
                View Pricing
              </button>
            </Link>
          </div>
        </section>

        {/* --- MEMBERSHIP SECTION --- */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content (Left) */}
            <div className="lg:w-1/3 text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Membership
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Enjoy premium benefits including priority access to events,
                exclusive rewards, and opportunities to be featured in our
                content.
              </p>
            </div>

            {/* Pricing Cards (Right) */}
            <div className="lg:w-2/3 w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 md:h-[400px]">
              {/* Card 1 ($7) */}
              <div
                className="bg-white p-6 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-100 w-full max-w-[300px] md:w-[260px] min-h-[260px] md:h-[280px]
                flex flex-col justify-between relative transition-all duration-300
                md:z-10 md:transform md:-rotate-[6deg] md:translate-x-8 md:translate-y-6
                hover:z-30 hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <div>
                  <h3 className="text-gray-900 font-bold text-lg text-left">
                    Pro
                  </h3>
                  <div className="flex items-start mt-1">
                    <span className="text-5xl font-bold tracking-tight text-gray-900 leading-none">
                      $7
                    </span>
                    <span className="text-2xl font-bold text-gray-900 mt-1">
                      .00
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium text-left mt-2">
                    The perfect balance.
                  </p>
                </div>
                <button className="w-full py-2 rounded-full bg-gray-100 text-gray-900 font-bold text-sm mt-4 group-hover:bg-black group-hover:text-white transition-colors">
                  Choose Plan
                </button>
              </div>

              {/* Card 2 ($3) - Highlighted */}
              <div
                className="bg-pink-bright p-6 rounded-[24px] md:rounded-[32px] shadow-xl w-full max-w-[320px] md:w-[280px] min-h-[280px] md:h-[320px]
                flex flex-col justify-between relative transition-all duration-300
                z-20 md:transform md:rotate-[0deg] md:-translate-y-4
                hover:scale-105 group cursor-pointer"
              >
                <div className="absolute top-5 right-5 bg-white text-pink-bright text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg text-left">
                    Starter
                  </h3>
                  <div className="flex items-start mt-1 text-white">
                    <span className="text-6xl font-bold tracking-tight leading-none">
                      $3
                    </span>
                    <span className="text-2xl font-bold mt-1">.00</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium text-left mt-2">
                    Most popular choice.
                  </p>
                </div>
                <button className="w-full py-3 rounded-full bg-white text-pink-bright font-bold text-sm mt-4 shadow-sm hover:bg-gray-50 transition-colors">
                  Choose Plan
                </button>
              </div>

              {/* Card 3 ($15) */}
              <div
                className="bg-white p-6 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-100 w-full max-w-[300px] md:w-[260px] min-h-[260px] md:h-[280px]
                flex flex-col justify-between relative transition-all duration-300
                md:z-10 md:transform md:rotate-[6deg] md:-translate-x-8 md:translate-y-6
                hover:z-30 hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <div>
                  <h3 className="text-gray-900 font-bold text-lg text-left">
                    Elite
                  </h3>
                  <div className="flex items-start mt-1">
                    <span className="text-5xl font-bold tracking-tight text-gray-900 leading-none">
                      $15
                    </span>
                    <span className="text-2xl font-bold text-gray-900 mt-1">
                      .00
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium text-left mt-2">
                    All access pass.
                  </p>
                </div>
                <button className="w-full py-2 rounded-full bg-gray-100 text-gray-900 font-bold text-sm mt-4 group-hover:bg-black group-hover:text-white transition-colors">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
