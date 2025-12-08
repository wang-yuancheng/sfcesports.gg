import { notFound } from "next/navigation";
import { mediaItems } from "@/data/media/media";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import ContentRenderer from "@/components/global/ContentRenderer";

export async function generateStaticParams() {
  return mediaItems.map((item) => ({ media: item.slug }));
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
              </span>
              Back to all media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
