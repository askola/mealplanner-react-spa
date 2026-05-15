import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const root = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: vars.spacing.lg,
});
