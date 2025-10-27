import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// If this import errors, use the require() variant shown below
import scrollbarHide from "tailwind-scrollbar-hide";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – uncomment these two lines if the import above complains
// const scrollbarHide = require("tailwind-scrollbar-hide");
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      xmd: "900px",
      lg: "1024px",
      navbarsm: "1100px",
      xlg: "1280px",
      navbarlg: "1350px",
      xxlg: "1440px",
    },
    extend: {
      fontFamily: {
        helveticaNow: ["var(--font-helvetica-now)", ...fontFamily.sans],
        druk: [
          "Druk Wide Web",
          "Helvetica Now Display",
          "Helvetica",
          "sans-serif",
          "Arial",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        pink: { DEFAULT: "#FFC0D3", light: "#FDEFF4", bright: "#FF5C8D" },
        fadedwhite: { DEFAULT: "#FEFEFE" },
        fadedblack: { DEFAULT: "#101010" },
        plum: { DEFAULT: "#524A4E" },

        background: "hsl(0, 0%, 99.2%)",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        "gray-10": "0 1.5px 3px rgba(0,0,0,0.06), 0 1px 1.5px rgba(0,0,0,0.04)",
      },
    },
  },

  plugins: [
    scrollbarHide,
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": {
          "scrollbar-width": "none",     /* Firefox */
          "-ms-overflow-style": "none",  /* IE/Edge legacy */
        },
      });
    }),
  ],
};

export default config;
