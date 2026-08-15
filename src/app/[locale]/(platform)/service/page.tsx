import { useTranslations } from "next-intl";

export default function ServicePage() {
  const t = useTranslations("common");

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-6xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        {t("nav.constructor")}
      </p>
      <h1 className="text-5xl uppercase md:text-7xl">{t("nav.printing")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Custom print flow placeholder for file upload, requirements, and order
        status.
      </p>
    </section>
  );
}
