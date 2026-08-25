"use client";

import type { JSX } from "react";

import {
  NOT_FOUND_STATUS_CODE,
  NotFoundErrorScreen,
  getStaticErrorMsg,
  getStaticLocale,
} from "@widgets/error-screen";

import { ThemeProvider } from "@features/theme";

import { inter, octalFont } from "@shared/config/fonts";
import "@shared/styles";

export default function RootNotFound(): JSX.Element {
  const locale = getStaticLocale();
  const { title, cta } = getStaticErrorMsg(NOT_FOUND_STATUS_CODE, locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${octalFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <NotFoundErrorScreen title={title} cta={cta} />
        </ThemeProvider>
      </body>
    </html>
  );
}
