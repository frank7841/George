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
} as const;

export const fonts = {
  display: "'Cormorant Garamond', serif",
  body: "'Inter', sans-serif",
  script: "'Cormorant Garamond', serif",
} as const;

export type ThemeColors = typeof colors;
export type ThemeFonts = typeof fonts;

const theme = { colors, fonts };
export default theme;
