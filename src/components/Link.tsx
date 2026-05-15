import type { PropsWithChildren } from "react";
import * as styles from "./Link.css";
import { Link as TanstackRouterLink } from "@tanstack/react-router";

interface LinkProps extends PropsWithChildren {
  to: string;
}

export function Link({ to, children }: LinkProps) {
  return (
    <div className={styles.link}>
      <TanstackRouterLink
        to={to}
        activeProps={{
          className: styles.active,
        }}
        activeOptions={{ exact: true }}
      >
        {children}
      </TanstackRouterLink>
    </div>
  );
}
