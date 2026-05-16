import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { DEFAULT_LOCALE } from "@shared/i18n";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: DEFAULT_LOCALE,
    namespace: "manifest",
  });

  return {
    name: t("name"),
    short_name: t("short_name"),
    description: t("description"),
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#242424",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
