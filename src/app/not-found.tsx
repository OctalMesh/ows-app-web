"use client";

import type { JSX } from "react";

import {
  NOT_FOUND_STATUS_CODE,
  NotFoundErrorScreen,
  getStaticErrorMsg,
  getStaticLocale,
} from "@widgets/error-screen";

import { ThemeProvider } from "@features/theme";

import "@shared/assets/styles";

export default function RootNotFound(): JSX.Element {
  const locale = getStaticLocale();
  const { title, cta } = getStaticErrorMsg(NOT_FOUND_STATUS_CODE, locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NotFoundErrorScreen title={title} cta={cta} />
        </ThemeProvider>
      </body>
    </html>
  );
}
