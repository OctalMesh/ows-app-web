import { JSX } from "react";

import { useTranslations } from "next-intl";

export default function FaqPage(): JSX.Element {
  const t = useTranslations("common");

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        {t("nav.faq")}
      </p>
      <h1 className="text-5xl uppercase md:text-7xl">{t("nav.faq")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        FAQ page placeholder for common questions and answers.
      </p>
    </section>
  );
}
