"use client";

import type { JSX } from "react";

import {
  ServerErrorScreen,
  getErrorStatusCode,
  getStaticErrorMsg,
  getStaticLocale,
} from "@widgets/error-screen";

import { ThemeProvider } from "@features/theme";

import { inter, octalFont } from "@shared/config/fonts";
import "@shared/styles";

interface GlobalErrorProps extends PageProps<"/[locale]"> {
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
      lang={locale}
      className={`${inter.variable} ${octalFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
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
