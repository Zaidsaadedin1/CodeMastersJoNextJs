import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Custom primary color */
  primaryColor: "gray",
  primaryShade: { light: 6, dark: 8 },

  /** Define custom colors */
  colors: {
    brand: [
      "#f5f5f5",
      "#e0e0e0",
      "#b8b8b8",
      "#8c8c8c",
      "#666666",
      "#333333",
      "#1a1a1a",
      "#121212",
      "#0d0d0d",
      "#000000",
    ],
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
  },

  /** Font sizes */
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
  },

  /** Border radius */
  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
  },

  /** Spacing system */
  spacing: {
    xs: "6px",
    sm: "12px",
    md: "20px",
    lg: "28px",
    xl: "36px",
  },

  /** Gradient settings */
  defaultGradient: {
    from: "gray",
    to: "black",
    deg: 135,
  },

  /** Shadow settings */
  shadows: {
    xs: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    sm: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    md: "0px 6px 18px rgba(0, 0, 0, 0.25)",
    lg: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  },

  /** Typography */
  fontFamily: "Oswald, sans-serif",
  headings: {
    fontFamily: "Oswald, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "2.5rem", lineHeight: "1.2" },
      h2: { fontSize: "2rem", lineHeight: "1.3" },
      h3: { fontSize: "1.5rem", lineHeight: "1.4" },
    },
  },
});
