export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  navbarsm: 1100,
  navbarlg: 1350,
  "2xl": 1536,
} as const;

export type BreakpointMap = typeof BREAKPOINTS;

export const COUNTRY_CODES = [
  { code: "SG", dial_code: "+65", name: "Singapore" },
  { code: "US", dial_code: "+1", name: "United States" },
  { code: "GB", dial_code: "+44", name: "United Kingdom" },
  { code: "MY", dial_code: "+60", name: "Malaysia" },
  { code: "ID", dial_code: "+62", name: "Indonesia" },
  { code: "PH", dial_code: "+63", name: "Philippines" },
  { code: "TH", dial_code: "+66", name: "Thailand" },
  { code: "VN", dial_code: "+84", name: "Vietnam" },
  { code: "CN", dial_code: "+86", name: "China" },
  { code: "IN", dial_code: "+91", name: "India" },
  { code: "AU", dial_code: "+61", name: "Australia" },
  { code: "JP", dial_code: "+81", name: "Japan" },
  { code: "KR", dial_code: "+82", name: "South Korea" },
  { code: "HK", dial_code: "+852", name: "Hong Kong" },
  { code: "TW", dial_code: "+886", name: "Taiwan" },
].sort((a, b) => a.name.localeCompare(b.name));
