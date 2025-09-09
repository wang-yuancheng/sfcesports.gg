// Usage

// const isMobile = useMediaQuery("sm") // uses a named breakpoint from your config
// const isLarge = useMediaQuery({ min: 1024 }) // custom size
// const isCustom = useMediaQuery("(min-width: 768px) and (max-width: 1023px)") // full media query string
// It returns a boolean:
// true if the screen size matches the query
// false if it doesn’t

// const isSmAndUp = useMediaQuery("sm")

// return (
//   <>
//     {isSmAndUp && <div>This shows only on sm and up</div>}
//   </>
// )

// OR

// return (
//   <div className={isSmAndUp ? "block" : "hidden"}>
//     Same idea, but driven by JS state
//   </div>
// )

"use client";
import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";
import { BreakpointName, MediaInput } from "@/lib/types"

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
  const [matches, setMatches] = useState<boolean>(
    () =>
      typeof window === "undefined"
        ? false // if undefined, then query does not match window size
        : window.matchMedia(query).matches // if window is defined, then return true if window matches query else return false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = () => setMatches(mql.matches);
    listener(); // sync immediately
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
