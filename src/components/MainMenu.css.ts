import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const root = style({
  display: "flex",
  gap: vars.spacing.md,
  paddingInlineStart: vars.spacing.md,
  paddingBlock: vars.spacing.sm,
  backgroundColor: vars.color.amber[300],
});
