import { notFound } from "next/navigation";
import Image from "next/image";
import { mediaItems, ContentBlock } from "@/data/media/media";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import Link from "next/link";

export async function generateStaticParams() {
  return mediaItems.map((item) => ({ media: item.slug }));
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-gray-800">
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
              <p key={index} className="text-gray-600 font-[400]">
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
                className="list-disc pl-6 space-y-2 text-gray-600 marker:text-black"
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

export default async function MediaPostPage({
  params,
}: {
  params: Promise<{ media: string }>;
}) {
  const { media: mediaSlug } = await params;
  const item = mediaItems.find((t) => t.slug === mediaSlug);

  if (!item) return notFound();

  return (
    <div className="mb-16 min-h-screen">
      <PageHeaderImage desktopSrc={item.image} />
      <div className="section-container md:mt-6">
        <div className="mx-auto max-w-[800px]">
          {/* Header Info */}
          <div className="mb-6 mt-10 md:mt-12 space-y-4">
            <h1 className="font-druk text-3xl md:text-4xl uppercase leading-[0.9] tracking-tight">
              {item.title}
            </h1>
            <span className="text-sm font-medium text-gray-600 block mb-2">
              Published: {item.date}
            </span>
          </div>

          {/* Content Body */}
          <div className="max-w-none">
            {item.content && item.content.length > 0 ? (
              <ContentRenderer blocks={item.content} />
            ) : (
              <div className="text-gray-500 italic text-lg">
                <p>No details available for this post.</p>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <a
              href="/media"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200">
                ←
              </span>{" "}
              Back to all media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
