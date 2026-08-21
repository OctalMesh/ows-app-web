export const KNOWN_ERROR_CODES = [
  "400",
  "401",
  "403",
  "404",
  "429",
  "500",
  "502",
  "503",
] as const;

export type KnownErrorCode = (typeof KNOWN_ERROR_CODES)[number];

export interface ErrorMessage {
  title: string;
  description: string;
  cta: string;
}

export function resolveErrorKey(
  statusCode: number,
): KnownErrorCode | "default" {
  const code = String(statusCode);
  return (KNOWN_ERROR_CODES as readonly string[]).includes(code)
    ? (code as KnownErrorCode)
    : "default";
}
