import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/**
 * Vitest configuration
 *
 * @see {@link https://vitest.dev/config Vitest documentation}
 * @see {@link https://nextjs.org/docs/app/guides/testing/vitest Next.js
 *      documentation}
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    passWithNoTests: true,
  },
});
