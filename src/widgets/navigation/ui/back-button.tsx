"use client";

import { JSX } from "react";

import { useTranslations } from "next-intl";

import { IconArrowLeft } from "@tabler/icons-react";

import { NavPillButton } from "./nav-pill-button";

export interface BackButtonProps {
  fallbackHref?: string;
}

export function BackButton({
  fallbackHref = "/",
}: BackButtonProps): JSX.Element {
  const t = useTranslations("common");

  function handleBrowserBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(fallbackHref);
  }

  return (
    <NavPillButton
      icon={<IconArrowLeft className="size-5" />}
      label={t("nav.back")}
      onClick={handleBrowserBack}
    />
  );
}
