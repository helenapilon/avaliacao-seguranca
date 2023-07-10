import { ThemeProvider } from "styled-components";

export const styles = {
  color: {
    primary: "#046494",
    primary100: "#f2fff8",
    primary500: "#7ad56b",
    secondary: "#f9b21c",
    secondary300: "#facc22",
    secondary700: "#f83600",

    white: "#fff",
    black: "#000",
    grey: "#808080",
    grey100: "#f2f2f2",
    grey300: "#a6a6a6",
    grey400: "#565656",
    grey500: "#363636",
    grey800: "#232129",

    red: "#ff0030",
    blue: "#007bff",

    darkBlue: "#264267",
    blue100: "#253141",
    blue200: "#3C4858",
    blue300: "#45648E",
    blue400: "#8FAACE",
    blue500: "#BBC7DB",
  },

  flag: {
    color: {
      Amarela: "#B3A644",
      Verde: "#23C40B",
      Vermelha: "#BC0000",
    },
  },

  fontFamily: {
    primary: "Arial",
  },

  fontSize: {
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "0.85rem",
    md: "1rem",
    xmd: "1.1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "1.75rem",
    h1: "2.5rem",
  },
};

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={styles}>{children}</ThemeProvider>
);
