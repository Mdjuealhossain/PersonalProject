import { Theme, Components } from "@mui/material/styles";

const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      width: "auto",
    }),
    positionFixed: ({ theme, ownerState }) => ({
      left: 0,
      right: 1252,
    }),
    colorInherit: ({ theme, ownerState }) => ({
      background: theme.palette.info.dark,
    }),
  },
};

const MuiToolbar: Components<Theme>["MuiToolbar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      width: "auto",
    }),
  },
};

export default { MuiAppBar, MuiToolbar };
