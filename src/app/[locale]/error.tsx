"use client";

import { type JSX, useEffect } from "react";

import {
  ServerErrorScreen,
  getErrorStatusCode,
  useErrorMsg,
} from "@widgets/error-screen";
import {
  DefaultNavigation,
  PageStatus,
  useNavigationHistory,
} from "@widgets/navigation";

interface ErrorPageProps extends PageProps<"/[locale]"> {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps): JSX.Element {
  const { setPageStatus } = useNavigationHistory();
  const statusCode = getErrorStatusCode(error);
  const { title, cta } = useErrorMsg(statusCode);

  useEffect(() => {
    console.error(error);
    setPageStatus(PageStatus.ERROR);
  }, [error, setPageStatus]);

  return (
    <DefaultNavigation>
      <ServerErrorScreen
        statusCode={statusCode}
        title={title}
        cta={cta}
        action={reset}
      />
    </DefaultNavigation>
  );
}
