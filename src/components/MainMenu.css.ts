import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const root = style({
  display: "flex",
  gap: vars.spacing.md,
  paddingLeft: vars.spacing.md,
  paddingTop: vars.spacing.sm,
  paddingBottom: vars.spacing.sm,
  backgroundColor: vars.bgColor.yellow,
});
