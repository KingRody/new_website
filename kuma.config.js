import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    primary: "#ff0000",
    secondary: "#00ff00",
    bodyBg: "rgba(0, 16, 20, 1)",
  },
  fonts: {
    body: "Manrope, sans-serif",
    heading: "Manrope, sans-serif",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  components: {
    Text: {
      variants: {
        large: {
          fontSize: "1.2rem",
        },
      },
    },
  },
});

export default theme;
