import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ThinIta.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Hairline.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-HairlineI.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-LightIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtLt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtLtIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-RegIta.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-MedIta.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-BoldIta.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtBdIta.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-BlackIta.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./HelveticaNow/HelveticaNowDisplay-ExtBlkIta.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "block",
  variable: "--font-helvetica",
});

export const druk = localFont({
  src: [
    {
      path: "./DrukWideWeb/DrukWideMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DrukWideWeb/DrukWideBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "block",
  variable: "--font-druk",
});
