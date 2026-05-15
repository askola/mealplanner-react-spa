import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const link = style({
  padding: vars.spacing.md,
});

export const active = style({
  fontWeight: "bold",
});
