import PageHeaderImage from "@/components/global/PageHeaderImage";
import React from "react";
import sfcbanner from "@/assets/pictures/shibefanclubaboutbanner.jpg";
import ImageAndTextBlock from "@/components/global/ImageAndTextBlock";

export default function Company() {
  return (
    <div className="mb-16 min-h-screen">
      <PageHeaderImage desktopSrc={sfcbanner} />
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-20">
            <section className="flex flex-col gap-8 text-center max-w-4xl mx-auto mt-16">
              <h1 className="text-2xl xs:text-4xl sm:text-5xl lg:text-6xl font-druk uppercase text-pink-bright leading-tight font-[600]">
                ShibeFanClub
              </h1>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-[400]">
                <p>
                  ShibeFanClub is a premier gaming and entertainment
                  organization based in Singapore.
                </p>
                <p>
                  Founded in 2021, we rapidly evolved into a recognized force in
                  PUBG Mobile's regional esports scene. Over the past few years,
                  SFC has built a reputation not just for competitive
                  excellence, but for fostering one of the most active and
                  dedicated gaming communities in the region.
                </p>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap justify-center items-start -mx-4">
                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px] md:text-[33px]">
                    3M+
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    Watch Hours
                  </p>
                </div>

                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px] md:text-[33px]">
                    375k+
                  </p>
                  <p className="text-gray-600 font-[400] text-center">Fans</p>
                </div>

                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px] md:text-[33px]">
                    100M+
                  </p>
                  <p className="text-gray-600 font-[400] text-center">Views</p>
                </div>

                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px] md:text-[33px]">
                    $1000+
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    Prizes Given Away
                  </p>
                </div>

                <div className="block mb-6 md:mb-8 lg:mb-12 mt-3 px-4 w-1/2 md:w-1/3 lg:w-1/5 text-center">
                  <p className="uppercase font-druk font-[500] leading-tight text-[23px] md:text-[33px]">
                    $4000+
                  </p>
                  <p className="text-gray-600 font-[400] text-center">
                    Prize Money Won
                  </p>
                </div>
              </div>
            </section>

            <section className="-mt-6 md:-mt-8 lg:-mt-12 space-y-7 mb-4">
              <ImageAndTextBlock
                imageSide="left"
                picture={sfcbanner}
                title="We Win"
                text="Our competitive division stands at the forefront of the regional scene. We have firmly established ourselves as one of the top performing PUBG Mobile organizations in Singapore. Through rigorous training and strategic adaptability, our rosters have consistently secured podium finishes against some of Asia’s most established organizations. We shall and will continue to prove that with dedication and strategy, we can conquer the toughest lobbies in the region."
              />
              <ImageAndTextBlock
                imageSide="right"
                picture={sfcbanner}
                title="We Create"
                text="For over 12 years, we have been telling stories through video, bridging the gap between players and fans by producing high-quality educational guides, competitive highlights, and documentaries that capture the journey of our players and the spirit of our community."
              />
              <ImageAndTextBlock
                imageSide="left"
                picture={sfcbanner}
                title="We Host"
                text="We believe esports belongs to everyone. That is why we are dedicated to hosting the region's most engaging community tournaments. From our signature Shibe’s Community Cup to our massive 1v1 events with hundreds of participants, we provide a professional stage with casting and prizes, giving aspiring talent the spotlight they deserve."
              />
            </section>
            <section className="border-gray-200 pb-8">
              <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-druk uppercase text-gray-900 leading-tight">
                  Be Part of the{" "}
                  <span className="text-pink-bright">Legacy</span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                  <a
                    href="https://discord.gg/2Sby35W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 pt-[13px] pb-[11px] bg-pink-bright text-white font-druk uppercase text-base hover:bg-pink-600 transition-colors duration-200 tracking-wide rounded-sm"
                  >
                    Join the Community
                  </a>
                  <a
                    href="mailto:tankifighter@gmail.com"
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-druk uppercase text-base hover:bg-gray-900 hover:text-white transition-colors duration-200 tracking-wide rounded-sm"
                  >
                    Partner With&nbsp;Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
