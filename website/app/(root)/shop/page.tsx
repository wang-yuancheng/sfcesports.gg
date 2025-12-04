import React from "react";
import Image from "next/image";
import shopHero from "@/assets/pictures/tempshop.png";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="section-container flex flex-col items-center py-12 xlg:py-14 xxxlg:py-28">
      <div className="mx-auto max-w-[1000px] px-4 text-center relative">
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 lg:mb-14 leading-[1.1]">
            Skip the grind. <br className="hidden md:block" />
            Reach the top.
          </h1>

          {/* Image Area with Floating Bubbles */}
          <div className="relative w-full flex justify-center items-center mb-10">
            {/* Left Floating Bubble (Rank Achievement) */}
            <div className="absolute -top-4 left-[5%] md:left-[15%] z-20">
              <div className="bg-[#FFB800] text-white px-5 py-2 rounded-2xl rounded-bl-none transform -rotate-12 shadow-xl font-bold text-lg hover:scale-105 transition-transform duration-300 uppercase tracking-wide">
                Conqueror
              </div>
            </div>

            {/* Right Floating Bubble (Points Gained) */}
            <div className="absolute top-0 right-[5%] md:right-[15%] z-20">
              <div className="bg-[#4ADE80] text-white px-5 py-2 rounded-2xl rounded-br-none transform rotate-6 shadow-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
                +125 PTS
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[850px]">
              <Image
                src={shopHero}
                alt="Boosting Services"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't have 12 hours a day to play? Hire our professional esports
            players to help you reach your dream rank.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop/boosting">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-bright transition-all shadow-lg hover:-translate-y-1">
                Start Boosting
              </button>
            </Link>

            <Link href="/shop/boosting/pricing">
              <button className="bg-transparent text-gray-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 hover:text-gray-900 transition-colors">
                View Pricing
              </button>
            </Link>
          </div>
        </section>

        <section className="mt-20 lg:mt-32 mb-16">
          <div className="w-full max-w-[1100px] px-6 lg:px-8 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
              {/* Text Content (Left Side) */}
              <div className="lg:w-1/3 text-left space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Membership
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Enjoy premium benefits including priority access to events,
                  exclusive rewards, and opportunities to be featured in our
                  content.
                </p>
              </div>

              {/* Pricing Cards Container (Right Side) */}
              <div className="lg:w-2/3 w-full flex flex-col md:flex-row justify-center items-center relative pt-10 md:pt-0">
                {/* --- Card 1 ($7) - LEFT --- */}
                <div
                  className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 w-full md:w-[250px] h-[280px]
            flex flex-col justify-between
            relative transition-all duration-300
            md:z-10 transform md:-rotate-[6deg] md:translate-x-6 md:translate-y-4
            hover:z-30 hover:scale-105 hover:shadow-md group cursor-pointer"
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

                  {/* Button */}
                  <button className="w-full py-2 rounded-full bg-gray-100 text-gray-900 font-bold text-sm mt-2 group-hover:bg-black group-hover:text-white transition-colors">
                    Choose Plan
                  </button>
                </div>

                {/* --- Card 2 ($3) - MIDDLE (Pink/Highlighted) --- */}
                <div
                  className="bg-pink-bright p-6 rounded-[32px] shadow-xl w-full md:w-[270px] h-[300px]
            flex flex-col justify-between
            relative transition-all duration-300
            md:z-20 transform md:rotate-[1deg] md:-translate-y-4
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

                  {/* Button (White on Pink) */}
                  <button className="w-full py-3 rounded-full bg-white text-pink-bright font-bold text-sm mt-4 shadow-sm hover:bg-gray-50 transition-colors">
                    Choose Plan
                  </button>
                </div>

                {/* --- Card 3 ($15) - RIGHT --- */}
                <div
                  className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 w-full md:w-[250px] h-[280px]
            flex flex-col justify-between
            relative transition-all duration-300
            md:z-10 transform md:rotate-[6deg] md:-translate-x-4 md:translate-y-4
            hover:z-30 hover:scale-105 hover:shadow-md group cursor-pointer"
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

                  {/* Button */}
                  <button className="w-full py-2 rounded-full bg-gray-100 text-gray-900 font-bold text-sm mt-2 group-hover:bg-black group-hover:text-white transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
