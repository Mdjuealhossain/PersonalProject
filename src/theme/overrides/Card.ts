import { Theme, Components } from "@mui/material/styles";

const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ":hover": {
        transform: "translateY(-1px)",
        boxShadow: theme.shadows[1],
      },
    }),
  },
};

const MuiCardActionArea: Components<Theme>["MuiCardActionArea"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardActions: Components<Theme>["MuiCardActions"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardMedia: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default {
  MuiCard,
  MuiCardActionArea,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiCardMedia,
};
