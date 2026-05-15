import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const link = style({
  padding: vars.spacing.md,
  borderRadius: "40%",
});

export const active = style({
  fontWeight: "bold",
  backgroundColor: vars.color.amber[700],
});
