import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.md,
  paddingLeft: vars.spacing.md,
  paddingTop: vars.spacing.sm,
  paddingBottom: vars.spacing.sm,
  backgroundColor: vars.color.amber[50],
  justifyContent: "center",
  alignItems: "center",
});

export const h1 = style({
  color: vars.color.neutral[700],
});

export const h2 = style({
  color: vars.color.neutral[600],
});
