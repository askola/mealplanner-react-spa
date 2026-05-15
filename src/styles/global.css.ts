import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", { boxSizing: "border-box" });
globalStyle("body, h1, h2, h3, h4, p, ul, ol, li, figure, blockquote, dl, dd", {
  margin: 0,
});
globalStyle("html", { textSizeAdjust: "100%" });
globalStyle("body", {
  minHeight: "100vh",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  color: "#111",
  background: "#fafafa",
});

globalStyle("a", {
  textDecoration: "none",
  color: "#000",
});
