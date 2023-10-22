import { PaletteOptions } from "./";

export default {
  primary: {
    dark: "#42a5f5",
    main: "#90caf9",
    light: "#e3f2fd",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  secondary: {
    dark: "#ab47bc",
    main: "#ce93d8",
    light: "#f3e5f5",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  error: {
    dark: "#d32f2f",
    main: "#f44336",
    light: "#e57373",
    contrastText: "#fff",
  },
  warning: {
    dark: "#f57c00",
    main: "#ffa726",
    light: "#ffb74d",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  info: {
    dark: "#0288d1",
    main: "#04f",
    light: "rgba(255,255,255,.1)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  success: {
    dark: "#1b5e20",
    main: "#2e7d32",
    light: "#4caf50",
    contrastText: "#fff",
  },
  grey: {
    50: "#fafafa",
    100: "#424242",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  action: {
    active: "#fff",
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledOpacity: 0.38,
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
  background: {
    default: "#212121",
    paper: "#1A1A1A",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  shadows: {
    transparentOne: "rgba(0,0,0,0.5)",
    transparentTwo: "rgba(0,0,0,0.14)",
    transparentThree: "rgba(0,0,0,0.12)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
} as PaletteOptions;
