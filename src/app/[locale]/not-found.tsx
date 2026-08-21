"use client";

import { type JSX, useEffect } from "react";

import {
  NOT_FOUND_STATUS_CODE,
  NotFoundErrorScreen,
  useErrorMsg,
} from "@widgets/error-screen";
import {
  DefaultNavigation,
  PageStatus,
  useNavigationHistory,
} from "@widgets/navigation";

export default function NotFoundPage(): JSX.Element {
  const { setPageStatus } = useNavigationHistory();
  const { title, cta } = useErrorMsg(NOT_FOUND_STATUS_CODE);

  useEffect(() => {
    setPageStatus(PageStatus.ERROR);
  }, [setPageStatus]);

  return (
    <DefaultNavigation>
      <NotFoundErrorScreen title={title} cta={cta} />
    </DefaultNavigation>
  );
}
