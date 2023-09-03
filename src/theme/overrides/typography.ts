import { Theme, Components } from "@mui/material/styles";

const MuiTypography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
    caption: ({ theme, ownerState }) => ({
      fontSize: "12px",
      lineHeight: "14.06px",
    }),
    h4: ({ theme, ownerState }) => ({
      fontWeight: 500,
    }),
    h5: ({ theme, ownerState }) => ({
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28.13px",
    }),
    h3: ({ theme, ownerState }) => ({}),
    body2: ({ theme, ownerState }) => ({
      lineHeight: "28.13px",
    }),
  },
};

export default { MuiTypography };
