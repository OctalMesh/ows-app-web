import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("common");

  return (
    <div className="flex min-h-dvh items-center justify-center px-10">
      <h1 className="text-center font-brand text-7xl uppercase">
        {t("brand")}
      </h1>
    </div>
  );
}
