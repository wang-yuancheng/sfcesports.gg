import { notFound } from "next/navigation";
import React from "react";
import { policies } from "@/data/policies/policies";

export async function generateStaticParams() {
  return policies.map((policy) => ({ policy: policy.id }));
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ policy: string }>;
}) {
  const { policy: policyId } = await params;
  const policy = policies.find((p) => p.id === policyId);

  if (!policy) return notFound();

  return (
    <div className="mb-16">
      <div className="mx-auto max-w-[1000px] px-[clamp(1rem,4vw,4rem)]">
        <div className="w-full max-w-2xl mx-auto pt-3 md:pt-10 lg:pt-12">
          {/* Header Section */}
          <div className="flex flex-col gap-2 mb-8 border-b border-gray-100 pb-6">
            <span className="text-sm font-[400] text-gray-400 tracking-widest">
              Last Updated: 9/12/2025
            </span>
            <h1 className="font-druk text-2xl md:text-3xl uppercase mt-2 leading-tight">
              {policy.title}
            </h1>
          </div>

          {/* Content Body */}
          <div className="text-lg text-gray-700 leading-relaxed font-[400] whitespace-pre-wrap">
            {policy.content}
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <a
              href="/policies"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200">
                ←
              </span>
              Back to Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
