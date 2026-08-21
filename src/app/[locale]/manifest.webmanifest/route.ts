import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function GET(
  _: Request,
  { params }: Props,
): Promise<NextResponse> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "manifest",
  });

  const manifest = {
    lang: locale,
    name: t("name"),
    short_name: t("short_name"),
    description: t("description"),
    categories: ["shopping", "business", "utilities"],
    start_url: "/",
    scope: "/",
    id: "/",
    background_color: "#ffffff",
    theme_color: "#242424",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "window-controls-overlay"],
    orientation: "any",
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
        purpose: "any",
      },
    ],
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
