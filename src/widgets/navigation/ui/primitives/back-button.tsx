"use client";

import type { JSX } from "react";
import { Suspense } from "react";

import { useTranslations } from "next-intl";

import { IconArrowLeft } from "@tabler/icons-react";

import { useRouter } from "@shared/i18n";

import { useNavigationHistory } from "../../model";
import { NavPillButton } from "./nav-pill-button";

export interface BackButtonProps {
  fallbackHref?: string;
}

function BackButtonContent({
  fallbackHref = "/",
}: BackButtonProps): JSX.Element {
  const t = useTranslations("common");
  const router = useRouter();
  const { canGoBack, goBack } = useNavigationHistory();

  function handleBack(): void {
    if (canGoBack) {
      goBack();
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }

  return (
    <NavPillButton
      icon={<IconArrowLeft className="size-5" />}
      label={t("nav.back")}
      onClick={handleBack}
    />
  );
}

function BackButtonFallback(): JSX.Element {
  const t = useTranslations("common");

  return (
    <NavPillButton
      icon={<IconArrowLeft className="size-5" />}
      label={t("nav.back")}
      disabled
    />
  );
}

export function BackButton(props: BackButtonProps): JSX.Element {
  return (
    <Suspense fallback={<BackButtonFallback />}>
      <BackButtonContent {...props} />
    </Suspense>
  );
}
