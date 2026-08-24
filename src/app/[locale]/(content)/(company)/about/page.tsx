import { JSX } from "react";

import { useTranslations } from "next-intl";

export default function AboutPage(): JSX.Element {
  const t = useTranslations("common");

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        {t("nav.about")}
      </p>
      <h1 className="text-5xl uppercase md:text-7xl">Octal Mesh</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        About page placeholder for brand story, manufacturing capabilities, and
        production values.
      </p>
    </section>
  );
}
