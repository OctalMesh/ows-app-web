import { createContext } from "react";

import type { ToggleVariantsProps } from "@shared/ui/toggle";

export interface ToggleGroupContextValue extends ToggleVariantsProps {
  spacing?: number;
  orientation?: "horizontal" | "vertical";
}

export const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal",
});
