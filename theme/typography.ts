import { TypographyVariants as TypographyVariantsOption } from "@mui/material/styles";
import { Roboto, Merriweather } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export interface TypographyVariants extends TypographyVariantsOption {}

export default {
  fontFamily: `${roboto.style.fontFamily}, ${merriweather.style.fontFamily}`,
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    ...roboto.style,
    fontWeight: 600,
    fontSize: "8.2rem",
    lineHeight: 1.3,
    textTransform: "uppercase",
  },

  h2: {
    fontFamily: "cursive",
    fontWeight: 600,
    fontSize: "3.5rem",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
  },
  h3: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "48px",
    lineHeight: "normal",
    letterSpacing: "0em",
  },
  h4: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "2.125rem",
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  h5: {
    ...roboto.style,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1.334,
    letterSpacing: "0.0075em",
  },
  h6: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "normal",
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  body2: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "24px",
  },
  button: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
  caption: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    ...roboto.style,
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "14.06px",
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
} as TypographyVariants;
