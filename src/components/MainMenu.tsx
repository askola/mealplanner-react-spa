import type { PropsWithChildren } from "react";
import { root } from "./MainMenu.css";

export function MainMenu({ children }: PropsWithChildren) {
  return <nav className={root}>{children}</nav>;
}
