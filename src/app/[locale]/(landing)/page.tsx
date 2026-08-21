import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("common");

  return (
    <h1 className="text-center font-brand text-7xl uppercase">{t("brand")}</h1>
  );
}
