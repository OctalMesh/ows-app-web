import { ReactNode } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@shared/i18n";
import { cn } from "@shared/lib";

//<editor-fold desc="Fonts" defaultstate="collapsed">
const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
//</editor-fold>

//<editor-fold desc="Metadata" defaultstate="collapsed">
export const metadata: Metadata = {
  metadataBase: new URL("https://octalmesh.com"),
  title: { default: "OctalMesh", template: "%s | OctalMesh" },
  description:
    "Engineering studio specializing in 3D printing and additive manufacturing",
  openGraph: {
    title: "OctalMesh",
    description:
      "Engineering studio specializing in 3D printing and additive manufacturing",
    url: "https://octalmesh.com",
    siteName: "OctalMesh",
  },
  icons: {
    icon: [
      /* Light mode favicons */
      {
        url: "/assets/favicon.ico",
        sizes: "any",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-96.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },

      /* Dark mode favicons */
      {
        url: "/assets/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/favicon-dark-16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/favicon-dark-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/favicon-dark-48.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/favicon-dark-96.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};
//</editor-fold>

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn(
        "font-sans",
        inter.variable,
        spaceGroteskHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
