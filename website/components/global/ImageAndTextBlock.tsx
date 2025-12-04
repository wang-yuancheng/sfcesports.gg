import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageAndTextBlockProps = {
  picture: StaticImageData;
  title: string;
  text: string;
  imageSide?: "left" | "right";
};

export default function ImageAndTextBlock({
  picture,
  title,
  text,
  imageSide = "left",
}: ImageAndTextBlockProps) {
  const rowDirection =
    imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col ${rowDirection} gap-5`}>
      {/* --- Image Side --- */}
      <div className="w-full md:w-1/2 md:rounded-lg relative">
        <div className="relative md:rounded-lg bg-gray-100 overflow-hidden h-[300px] md:h-full">
          <Image
            src={picture}
            alt=""
            fill
            className="object-cover object-center rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* --- Text Side --- */}
      <div className="w-full md:w-1/2 text-left">
        <div className="border-gray-100 px-5 md:bg-white md:rounded-lg md:minh-full md:p-12 lg:p-16 flex items-center pt-4 md:shadow-sm md:border md:aspect-square ">
          <div className="w-full block">
            <h2 className="font-druk font-[500] uppercase text-xl md:text-2xl lg:text-3xl navbarlg:text-4xl leading-tight mb-3 md:mb-4 text-pink-bright text-center md:text-left">
              {title}
            </h2>
            <p className="text-gray-600 font-[400] text-justify lg:text-lg">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
