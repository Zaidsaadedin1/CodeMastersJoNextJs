import { createTheme } from "@mantine/core";
import { icons } from "@tabler/icons-react";

export const theme = createTheme({
  /** Custom primary color */
  primaryColor: "gray", // Subtle, muted gray for a sophisticated look

  /** Define custom colors */
  colors: {
    brand: [
      "#f5f5f5", // Lightest gray for soft contrasts
      "#e0e0e0", // Soft light gray
      "#b8b8b8", // Medium gray for borders or text
      "#8c8c8c", // Darker gray for text or icons
      "#666666", // Standard gray for general use
      "#333333", // Dark gray for main background or elements
      "#1a1a1a", // Very dark gray for deep backgrounds or hover states
      "#121212", // Near-black for deep shadows and sections
      "#0d0d0d", // Almost black for accents or borders
      "#000000", // Pure black for the darkest shades (used sparingly for contrast)
    ],
  },

  /** Override font settings */
  fontFamily: "Roboto, sans-serif", // Clean, modern sans-serif font

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px", // Large font for headings and titles
  },

  /** Customize radius (rounded corners) */
  radius: {
    sm: "6px", // More rounded for buttons and elements
    md: "10px",
    lg: "14px", // Smooth, elegant rounded corners
  },

  /** Spacing system */
  spacing: {
    xs: "6px", // Tight but comfortable spacing
    sm: "12px",
    md: "20px", // Spacious sections
    lg: "28px", // Wide margins
    xl: "36px", // For larger containers
  },

  /** Dark mode settings */
  defaultGradient: {
    from: "gray", // A soft gray gradient for background transitions
    to: "black", // Subtle transition to black for a deeper effect
    deg: 135, // Subtle angle for the gradient for added depth
  },

  /** Shadow settings */
  shadows: {
    xs: "0px 2px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for lighter elements
    sm: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Light shadow for cards and buttons
    md: "0px 6px 18px rgba(0, 0, 0, 0.25)", // Larger shadow for containers
    lg: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Darker, more prominent shadow for large modals
  },

  /** Additional elegant styling */
  headings: {
    fontFamily: "Playfair Display, serif", // Elegant serif font for headings
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "36px", lineHeight: "1.2" },
      h2: { fontSize: "30px", lineHeight: "1.3" },
      h3: { fontSize: "24px", lineHeight: "1.4" },
      h4: { fontSize: "18px", lineHeight: "1.5" },
      h5: { fontSize: "16px", lineHeight: "1.5" },
      h6: { fontSize: "14px", lineHeight: "1.6" },
    },
  },

components: {
  Text: {
    defaultProps: {
      c: "white",
    },
  },
  Icon: {
    defaultProps: {
      stroke: 1.5,         // You can customize this
      style: { stroke: "white" }, // This ensures stroke color is white
    },
  },
},


});
function rgb(arg0: number, arg1: number, arg2: number): string | undefined {
  throw new Error("Function not implemented.");
}
