import { notFound } from "next/navigation";
import Image from "next/image";
import { mediaItems } from "@/data/media/media";
import PageHeaderImage from "@/components/global/PageHeaderImage";

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
      <div className="section-container md:mt-6">
        <div className="mx-auto max-w-[800px]">
          {/* Header Info */}
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600">
              Published: {item.date}
            </span>
            <h1 className="mt-2 font-druk text-3xl md:mt-3 md:text-[40px] uppercase leading-tight">
              {item.title}
            </h1>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-8">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content Body */}
          <div className="max-w-none text-xl">
            {item.content ? (
              <p>{item.content}</p>
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <a
              href="/media"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              ← Back to all news
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
