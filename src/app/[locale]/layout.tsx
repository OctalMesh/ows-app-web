import type { JSX } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { Footer } from "@widgets/footer";
import { NavigationHistoryProvider } from "@widgets/navigation";

import { ThemeProvider } from "@features/theme";

import "@shared/assets/styles";
import { inter, octalFont } from "@shared/config";
import { routing } from "@shared/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations({
    locale: locale,
    namespace: "metadata",
  });

  return {
    metadataBase: new URL("https://octalmesh.com"),
    manifest: `/${locale}/manifest.webmanifest`,
    title: { default: t("title"), template: t("template") },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://octalmesh.com",
      siteName: t("site_name"),
    },
    icons: {
      icon: [
        //<editor-fold desc="Light mode favicons" defaultstate="collapsed">
        {
          url: "/favicon.ico",
          sizes: "any",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicon-16.png",
          sizes: "16x16",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicon-32.png",
          sizes: "32x32",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicon-48.png",
          sizes: "48x48",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicon-96.png",
          sizes: "96x96",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        //</editor-fold>

        //<editor-fold desc="Dark mode favicons" defaultstate="collapsed">
        {
          url: "/favicon-dark.ico",
          sizes: "any",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/favicon-dark-16.png",
          sizes: "16x16",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/favicon-dark-32.png",
          sizes: "32x32",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/favicon-dark-48.png",
          sizes: "48x48",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/favicon-dark-96.png",
          sizes: "96x96",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
        //</editor-fold>
      ],
      apple: [
        //<editor-fold desc="Apple touch icons" defaultstate="collapsed">
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        //</editor-fold>
      ],
    },
  };
}

export function generateStaticParams(): Array<{ locale: Locale }> {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = LayoutProps<"/[locale]">;

export default async function LocaleLayout({
  children,
}: LocaleLayoutProps): Promise<JSX.Element> {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${octalFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            <NavigationHistoryProvider>
              <main className="relative min-h-svh border-b bg-background">
                {children}
              </main>

              <Footer className="mb-23 max-sm:border-b sm:mb-0" />
            </NavigationHistoryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
