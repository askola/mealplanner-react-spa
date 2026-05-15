import clsx from "clsx";
import * as styles from "./Link.css";
import {
  Link as TanstackRouterLink,
  useMatchRoute,
  type LinkProps,
} from "@tanstack/react-router";

export function Link({ to, children }: LinkProps) {
  const matchRoute = useMatchRoute();
  const isActive = Boolean(matchRoute({ to: to }));

  return (
    //<div className={`${styles.link} ${isActive ? styles.active : ""}`}>
    <div className={clsx(styles.link, isActive && styles.active)}>
      <TanstackRouterLink to={to}>{children}</TanstackRouterLink>
    </div>
  );
}
