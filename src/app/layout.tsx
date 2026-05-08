import { ReactNode } from "react";

import "@shared/assets/styles";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
