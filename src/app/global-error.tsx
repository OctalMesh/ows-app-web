"use client";

import type { JSX } from "react";

import { Inter, Space_Grotesk } from "next/font/google";

import {
  ServerErrorScreen,
  getErrorStatusCode,
  getStaticErrorMsg,
  getStaticLocale,
} from "@widgets/error-screen";

import { ThemeProvider } from "@features/theme";

import "@shared/assets/styles";
import { cn } from "@shared/lib";

//<editor-fold desc="Fonts" defaultstate="collapsed">

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

//</editor-fold>

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps): JSX.Element {
  const statusCode = getErrorStatusCode(error);
  const locale = getStaticLocale();
  const { title, cta } = getStaticErrorMsg(statusCode, locale);

  return (
    <html
      className={cn(inter.variable, spaceGroteskHeading.variable)}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ServerErrorScreen
            statusCode={statusCode}
            title={title}
            cta={cta}
            action={reset}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
