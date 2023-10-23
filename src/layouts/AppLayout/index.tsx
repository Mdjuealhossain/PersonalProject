"use client";
import { FC, useContext } from "react";

import { Box, Hidden, IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ColorModeContext } from "src/theme";
import SideBar from "src/widgets/SideBar";
import Header from "src/widgets/Header";

import { AppLayoutProps } from "./type";

const ColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.success.light,
      })}
      justifyContent="center"
      alignItems="center"
      borderRadius="32px 0 0 31px"
    >
      <IconButton onClick={toggleColorMode} sx={{ height: 60, width: 50 }}>
        {mode}
      </IconButton>
    </Box>
  );
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Hidden mdDown>
        <Box position="absolute" right={0} top={400}>
          <ColorMode />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box>
          <Header />
        </Box>
      </Hidden>
      <Stack flexDirection="row" height="100%" mt={{ xs: 8, md: 0 }}>
        <Hidden mdDown>
          <Box width={300}>
            <SideBar />
          </Box>
        </Hidden>
        <Box width={{ md: "calc(100% - 300px)", xs: "100%" }} px={2}>
          {children}
        </Box>
      </Stack>
    </>
  );
};

export default AppLayout;
