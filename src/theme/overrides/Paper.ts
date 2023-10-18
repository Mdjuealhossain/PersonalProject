import { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {}
}

const MuiPaper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      background: theme.palette.warning.light,
    }),
    elevation: ({ theme, ownerState }) => ({
      boxShadow: theme.shadows[0],
    }),
    rounded: ({ theme, ownerState }) => ({}),
    outlined: ({ theme, ownerState }) => ({
      border: `1px solid  ${theme.palette.secondary.light}`,
    }),
  },
};

export default { MuiPaper };
