"use client";

import type { JSX } from "react";

import { useTranslations } from "next-intl";

import { IconArrowLeft } from "@tabler/icons-react";

import { useRouter } from "@shared/i18n";
import { useNavigationHistory } from "@shared/navigation";

import { NavPillButton } from "./nav-pill-button";

export interface BackButtonProps {
  fallbackHref?: string;
}

export function BackButton({
  fallbackHref = "/",
}: BackButtonProps): JSX.Element {
  const t = useTranslations("common");
  const router = useRouter();
  const { canGoBack } = useNavigationHistory();

  function handleBack() {
    if (canGoBack) {
      router.back();
      return;
    }

    void router.push(fallbackHref);
  }

  return (
    <NavPillButton
      icon={<IconArrowLeft className="size-5" />}
      label={t("nav.back")}
      onClick={handleBack}
    />
  );
}
