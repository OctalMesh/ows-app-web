export const Theme = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];
