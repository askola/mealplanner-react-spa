import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  spacing: { sm: "0.5em", md: "1em", lg: "2em" },
  color: {
    amber: {
      50: "#fef7e7",
      100: "#fdedc4",
      200: "#fbdca0",
      300: "#f6c982",
      400: "#ecaf52",
      500: "#d99427",
      600: "#c0820f",
      700: "#a76d0e",
      800: "#7d520c",
      900: "#4d320b",
    },
    neutral: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
    },
  },
});
