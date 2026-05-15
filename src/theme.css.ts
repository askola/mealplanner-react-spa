import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  spacing: { sm: "0.5em", md: "1em" },
  bgColor: { yellow: "#f6c982c2", darkYellow: "#a76d0ec2" },
});
