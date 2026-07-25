"use client";

import { useTranslations } from "next-intl";

import { IconArrowLeft } from "@tabler/icons-react";

import { Button } from "@shared/ui/button";

export function BackButton() {
  const t = useTranslations("common");

  function handleBrowserBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign("/");
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="flex h-16 items-center justify-start gap-4 rounded-full px-6 backdrop-blur-xl"
      onClick={handleBrowserBack}
    >
      <IconArrowLeft className="size-5" />
      <span className="text-sm">{t("nav.back")}</span>
    </Button>
  );
}
