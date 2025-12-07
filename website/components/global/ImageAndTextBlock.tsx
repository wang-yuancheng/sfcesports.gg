import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageAndTextBlockProps = {
  image: StaticImageData;
  title: string;
  text: string;
  imageSide?: "left" | "right";
};

export default function ImageAndTextBlock({
  image,
  title,
  text,
  imageSide = "left",
}: ImageAndTextBlockProps) {
  const rowDirection =
    imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col ${rowDirection} gap-5`}>
      <div className="w-full md:w-1/2 md:rounded-lg relative">
        <div className="relative md:rounded-lg bg-gray-100 overflow-hidden h-[400px] md:h-full">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-left">
        <div className="border-gray-100 px-5 md:bg-white md:rounded-lg md:min-h-full md:p-12 lg:p-16 flex items-center pt-4 md:shadow-sm md:border md:aspect-square">
          <div className="w-full block">
            <h2 className="font-druk font-[500] uppercase text-xl md:text-xl xmd:text-2xl xlg:text-3xl navbarlg:text-4xl leading-tight mb-3 md:mb-4 text-center md:text-left">
              {title}
            </h2>
            <p className="text-gray-600 font-[400] text-justify md:text-xs xmd:text-sm lg:text-base xlg:text-lg">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
