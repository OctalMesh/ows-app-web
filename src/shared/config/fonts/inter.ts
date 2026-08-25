import localFont from "next/font/local";

export const inter = localFont({
  variable: "--font-sans",
  display: "swap",
  src: "../../assets/fonts/Inter-Variable.woff2",
  weight: "100 900",
  style: "normal",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});
