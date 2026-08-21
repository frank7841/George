// Wedding e-catalogue theme tokens
// Palette derived from the couple's chosen colors: sky blue, grey, royal blue,
// wine red, silver, white, navy blue.

export const colors = {
  navy: "#1B2A4A",
  royalBlue: "#2E4D9E",
  wineRed: "#6B1F2A",
  skyBlue: "#A9CCE3",
  silver: "#C7CDD6",
  grey: "#4A4E57",
  white: "#FFFFFF",
  rose: "#E8B4B8",
  blush: "#F5E6E8",
  coral: "#D4756A",
  gold: "#C9A962",
  cream: "#FDF8F3",
  lavender: "#E6E6FA",
  charcoal: "#2C2C2C",
} as const;

export const fonts = {
  display: "'Cormorant Garamond', serif",
  body: "'Inter', sans-serif",
  script: "'Cormorant Garamond', serif",
} as const;

export const shadows = {
  subtle: "0 2px 8px rgba(0, 0, 0, 0.08)",
  medium: "0 4px 16px rgba(0, 0, 0, 0.12)",
  strong: "0 8px 32px rgba(0, 0, 0, 0.16)",
  elegant: "0 4px 20px rgba(27, 42, 74, 0.15)",
} as const;

export type ThemeColors = typeof colors;
export type ThemeFonts = typeof fonts;
export type ThemeShadows = typeof shadows;

const theme = { colors, fonts, shadows };
export default theme;
