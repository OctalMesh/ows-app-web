"use client";

import { type JSX, Suspense, useEffect, useRef } from "react";

import { usePathname } from "@shared/i18n";

interface PathnameObserverProps {
  onChange: (pathname: string) => void;
}

function PathnameListener({ onChange }: PathnameObserverProps): null {
  const pathname = usePathname();
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (pathname) {
      onChangeRef.current(pathname);
    }
  }, [pathname]);

  return null;
}

export function PathnameObserver({
  onChange,
}: PathnameObserverProps): JSX.Element {
  return (
    <Suspense fallback={null}>
      <PathnameListener onChange={onChange} />
    </Suspense>
  );
}
