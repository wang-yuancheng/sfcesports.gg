import { ContentBlock } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ContentRenderer({
  blocks,
}: {
  blocks: ContentBlock[];
}) {
  return (
    <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-gray-800 ">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="font-druk text-2xl md:text-3xl uppercase mt-6 md:-mb-4 text-black"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3
                key={index}
                className="font-druk text-xl md:text-2xl uppercase mt-4 md:-mb-3"
              >
                {block.text}
              </h3>
            );
          case "subsubheading":
            return (
              <h3
                key={index}
                className="font-druk text-base md:text-lg uppercase mt-4 md:-mb-3"
              >
                {block.text}
              </h3>
            );
          case "linkSubheading":
            return (
              <Link
                key={index}
                href={block.url}
                className="group font-druk text-xl md:text-2xl uppercase mt-4 md:-mb-3 block w-fit hover:text-gray-600 transition-colors"
              >
                {block.text}
                <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            );
          case "paragraph":
            return (
              <p key={index} className="text-gray-600 font-[400] text-justify">
                {block.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-black pl-6 italic my-6 py-2 md:mt-0 bg-gray-50"
              >
                <p className="font-medium text-xl">"{block.text}"</p>
                {block.author && (
                  <footer className="text-sm text-gray-500 mt-2 uppercase tracking-wider font-bold">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );
          case "list":
            return (
              <ul
                key={index}
                className="list-disc pl-6 space-y-2 text-gray-600 font-[400]"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index} className="md:my-4">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-sm text-gray-500 font-medium">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
