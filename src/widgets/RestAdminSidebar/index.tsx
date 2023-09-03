import { AppBar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import dark from "src/theme/palette/dark";

const ResAdmineSidebar = () => {
  return (
    <AppBar
      sx={(theme) => ({
        bgcolor: theme.palette.info.contrastText,
        p: 10,
      })}
    >
      <Box sx={{ display: "flex" }}>
        <IconButton sx={{ height: 30, width: 50, color: dark.info?.dark }}>
          <AccountBalanceIcon></AccountBalanceIcon>
        </IconButton>
        <Typography variant="h5" color={dark.info?.dark}>
          BCDM
        </Typography>
      </Box>
    </AppBar>
  );
};

export default ResAdmineSidebar;
