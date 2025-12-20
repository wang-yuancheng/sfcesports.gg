"use client";
import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";
import { BreakpointName, MediaInput } from "@/lib/types";

function buildQuery(input: MediaInput): string {
  if (typeof input === "string") {
    if (input in BREAKPOINTS) {
      const bp = BREAKPOINTS[input as BreakpointName];
      return `(max-width: ${bp}px)`;
    }
    return input;
  }

  if (typeof input === "object") {
    const parts: string[] = [];
    if (typeof input.min === "number")
      parts.push(`(min-width: ${input.min}px)`);
    if (typeof input.max === "number")
      parts.push(`(max-width: ${input.max}px)`);
    return parts.join(" and ");
  }

  return "(min-width: 0px)";
}

export function useMediaQuery(input: MediaInput): boolean {
  const query = buildQuery(input);

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
