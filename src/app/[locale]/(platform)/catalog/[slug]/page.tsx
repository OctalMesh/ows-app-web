import { useTranslations } from "next-intl";

export default function CatalogPage() {
  const t = useTranslations("common");

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-6xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        {t("nav.catalog")}
      </p>
      <h1 className="text-5xl uppercase md:text-7xl">{t("nav.shop")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Catalog entry point for categories, materials, and curated product
        collections.
      </p>
    </section>
  );
}
