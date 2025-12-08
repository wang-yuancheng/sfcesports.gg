"use client";

import React from "react";
import Link from "next/link";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Image from "next/image";
import { policies } from "@/data/policies/policies";

export default function TermsAndPolicies() {
  return (
    <div className="mb-16">
      <div className="mx-auto max-w-[1000px] px-[clamp(1rem,4vw,4rem)]">
        <div className="w-full max-w-2xl mx-auto pt-3 md:pt-10 lg:pt-12">
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-[400] text-gray-400 tracking-widest">
              Last Updated: 9/12/2025
            </span>
            <h1 className="font-druk text-2xl md:text-3xl uppercase mt-2">
              Terms and Policies
            </h1>
          </div>

          {/* List */}
          <div className="flex flex-col w-full divide-y divide-gray-100">
            {policies.map((policy) => (
              <Link
                key={policy.id}
                href={`/policies/${policy.id}`}
                className="group relative block"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-3 md:-inset-x-4 inset-y-0 rounded-xl transition-colors group-hover:bg-gray-100"
                />

                <div className="relative flex items-center justify-between py-3">
                  <span className="text-lg font-[400]">{policy.title}</span>
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <Image
                      src={ChevronRight}
                      alt="Chevron Right"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
