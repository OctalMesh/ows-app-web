import localFont from "next/font/local";

export const octalFont = localFont({
  variable: "--font-brand",
  display: "swap",
  src: "../../assets/fonts/OctalFont-Titan-Variable.woff2",
  weight: "100 900",
  style: "normal",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
});
