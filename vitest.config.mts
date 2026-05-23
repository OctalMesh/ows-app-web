import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

/**
 * Vitest configuration
 *
 * @see {@link https://vitest.dev/config Vitest documentation}
 * @see {@link https://nextjs.org/docs/app/guides/testing/vitest Next.js
 *      documentation}
 */
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
  },
});
