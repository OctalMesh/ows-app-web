"use client";

import { JSX, ReactNode } from "react";

import { Link } from "@shared/i18n";
import { cn } from "@shared/lib";

export interface NavPrimaryItemProps {
  active: boolean;
  ariaLabel: string;
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export function NavPrimaryItem({
  active,
  ariaLabel,
  icon,
  label,
  href,
  onClick,
}: NavPrimaryItemProps): JSX.Element {
  const className = cn(
    "flex h-14 min-w-0 items-center gap-2 overflow-hidden rounded-full",
    "transition-[flex-grow,background-color,color,padding] duration-300 ease-out",
    active
      ? "justify-start bg-foreground px-5 text-background"
      : "justify-center text-foreground",
  );
  const style = { flexGrow: active ? 1.5 : 1, flexBasis: 0 };

  const content = (
    <>
      <span className="inline-flex shrink-0">{icon}</span>
      {active ? (
        <span className="w-full min-w-0 truncate text-center text-sm">
          {label}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        style={style}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      style={style}
      className={className}
    >
      {content}
    </button>
  );
}
