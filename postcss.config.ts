import type { Config } from "postcss-load-config";

/**
 * Postcss configuration
 *
 * @see {@link https://tailwindcss.com/docs/installation/using-postcss Tailwind
 *      CSS documentation}
 */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
} satisfies Config;
