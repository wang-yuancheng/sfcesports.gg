"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import errorPhoto from "@/assets/pictures/something-went-wrong.webp";

export default function Page() {
  const searchParams = useSearchParams();
  const error = (searchParams.get("error") ?? "").trim();

  return (
    <div className="min-h-svh w-full bg-gray-50">
      <div className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-white shadow-sm md:grid md:grid-cols-2">
          <div className="w-full bg-gray-100">
            <Image
              src={errorPhoto}
              alt="Something went wrong"
              priority
              className="h-auto w-full object-cover md:h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-5 md:p-7">
            {/* Desktop content */}
            <div className="hidden space-y-2 md:block">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Error
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Something went wrong
              </h1>
              <p className="text-sm leading-6 text-gray-600">
                Please try again. If this keeps happening, share the error code
                with support.
              </p>
            </div>

            {/* Error code (mobile + desktop) */}
            <div className="rounded-xl border bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-700">Error code</p>
              <p className="mt-1 break-words font-mono text-xs text-gray-700">
                {error || "Unspecified error"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex">
              <a
                href="/"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20 md:w-auto"
              >
                Back to home
              </a>

              {/* Desktop-only reload */}
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="ml-2 hidden items-center justify-center rounded-xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 md:inline-flex"
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
