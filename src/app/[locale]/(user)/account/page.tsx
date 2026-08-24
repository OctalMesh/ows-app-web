import { JSX } from "react";

import { useTranslations } from "next-intl";

export default function AccountPage(): JSX.Element {
  const t = useTranslations("common");

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        {t("nav.account")}
      </p>
      <h1 className="text-5xl uppercase md:text-7xl">{t("nav.profile")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Personal dashboard placeholder for orders, saved addresses, and account
        preferences.
      </p>
    </section>
  );
}
