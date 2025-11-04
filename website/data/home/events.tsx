import React from "react";
import sccs1Banner from "@/assets/pictures/sccs1.webp";
import sccs2Banner from "@/assets/pictures/sccs2.webp";
import tdmTourBanner from "@/assets/pictures/1v1s4.webp";
import { EventHeroContent } from "@/lib/types";

export const events: EventHeroContent[] = [
  {
    header: (
      <p>
        SFC X NOVA <span className="whitespace-nowrap">Tournament</span>
      </p>
    ),
    date: "15 Mar 2024",
    image: sccs2Banner,
    href: "sfcxnova",
  },
  {
    header: (
      <p>
        Shibe&apos;s Community Cup{" "}
        <span className="whitespace-nowrap">Season 2</span>
      </p>
    ),
    date: "13 Nov 2023",
    image: sccs2Banner,
    href: "sccs2",
  },
  {
    header: (
      <p>
        Shibe&apos;s 1v1 Tour{" "}
        <span className="whitespace-nowrap">Season 5</span>
      </p>
    ),
    date: "1 Jun 2023",
    image: sccs2Banner,
    href: "1v1s5",
  },
  {
    header: (
      <p>
        Shibe&apos;s 1v1 Tour{" "}
        <span className="whitespace-nowrap">Season 4</span>
      </p>
    ),
    date: "1 Jun 2022",
    image: tdmTourBanner,
    href: "1v1s4",
  },
  {
    header: (
      <p>
        Shibe&apos;s 1v1 Tour{" "}
        <span className="whitespace-nowrap">Season 3</span>
      </p>
    ),
    date: "24 Nov 2021",
    image: tdmTourBanner,
    href: "1v1s3",
  },
  {
    header: (
      <p>
        Shibe&apos;s Community Cup{" "}
        <span className="whitespace-nowrap">Season 1</span>
      </p>
    ),
    date: "23 Aug 2021",
    image: sccs1Banner,
    href: "sccs1",
  },
];
