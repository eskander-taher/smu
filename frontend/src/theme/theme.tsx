import { createTheme } from "@mui/material";

export const tokens = () => {
  return {
    primary: {
      100: "#ffe766",
      200: "#ffe34d",
      300: "#ffdf33",
      400: "#ffdb19",
      500: "#ffd700",
      600: "#e6c200",
      700: "#ccac00",
      800: "#b39700",
      900: "#998100",
    },

    secondary: {
      50: "#F8F9FA",
      100: "#85898c",
      200: "#717579",
      300: "#5d6166",
      400: "#484e53",
      500: "#343A40",
      600: "#2f343a",
      700: "#2a2e33",
      800: "#24292d",
      900: "#1f2326",
    },
  };
};

const themeSittings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
        light: colors.primary[300],
        dark: colors.primary[800],
      },
      secondary: {
        main: colors.secondary[500],
        light: colors.secondary[300],
        dark: colors.secondary[800],
      },
      text: {
        primary: "#212529",
      },
    },
    typography: {
      fontFamily: ["Readex Pro", " sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 14,
      },
      cardTitle: {
        color: "#FFFFFF",
        fontWeight: 500,
        fontFamily: "Readex Pro",
        fontStyle: "normal",
        fontSize: 34,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  };
};

const theme = createTheme(themeSittings());

export default theme;
