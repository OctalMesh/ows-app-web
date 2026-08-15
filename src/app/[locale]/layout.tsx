import { ReactNode } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@widgets/footer";

import { ThemeProvider } from "@features/theme";

import { isValidLocale } from "@shared/i18n";
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

      /* Dark mode favicons */
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
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
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
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn(inter.variable, spaceGroteskHeading.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale}>
            <main className="relative min-h-dvh border-b bg-background">
              {children}
            </main>
            <Footer className="mb-23 max-sm:border-b sm:mb-0" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
