import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ThinIta.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Hairline.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-HairlineI.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-LightIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtLt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtLtIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-RegIta.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-MedIta.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-BoldIta.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtBdIta.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-BlackIta.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow/HelveticaNowDisplay-ExtBlkIta.woff2",
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
      path: "../public/fonts/DrukWideWeb/DrukWideWebMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DrukWideWeb/DrukWideWebBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "block",
  variable: "--font-druk",
});
