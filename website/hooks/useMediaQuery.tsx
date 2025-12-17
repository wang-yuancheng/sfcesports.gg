"use client";
import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";
import { BreakpointName, MediaInput } from "@/lib/types";

function buildQuery(input: MediaInput): string {
  // If input is a full media query string
  if (typeof input === "string") {
    // If it matches a key in BREAKPOINTS, treat it as a named breakpoint
    if (input in BREAKPOINTS) {
      const bp = BREAKPOINTS[input as BreakpointName];
      return `(max-width: ${bp}px)`;
    }
    return input; // custom full string like "(min-width: 768px)"
  }

  // If input is an object with min/max
  if (typeof input === "object") {
    const parts: string[] = [];
    if (typeof input.min === "number")
      parts.push(`(min-width: ${input.min}px)`);
    if (typeof input.max === "number")
      parts.push(`(max-width: ${input.max}px)`);
    return parts.join(" and ");
  }

  return "(min-width: 0px)"; // fallback
}

export function useMediaQuery(input: MediaInput): boolean {
  const query = buildQuery(input);
  
  // FIX: Always initialize to false first to match the Server-Side Render.
  // This prevents the "Text content does not match" / "Hydration failed" errors.
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    
    // Set the actual value immediately once on the client
    setMatches(mql.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}