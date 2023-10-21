"use client";
import { FC, useContext } from "react";

import { Box, IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ColorModeContext } from "src/theme";
import Sidbar from "src/widgets/FigSideBar";

import { FigLayoutProps } from "./type";

const ColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  return (
    <Box
      position="absolute"
      right={0}
      top="50%"
      width={60}
      height={50}
      sx={(theme) => ({
        bgcolor: theme.palette.success.light,
        display: { xs: "none", lg: "flex" },
      })}
      justifyContent="center"
      alignItems="center"
      borderRadius="32px 0 0 32px"
    >
      <IconButton onClick={toggleColorMode}>{mode}</IconButton>
    </Box>
  );
};

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <>
      <ColorMode />
      <Stack flexDirection="row" height="100%">
        <Box width={300}>
          <Sidbar />
        </Box>
        <Box width="calc(100% - 300px)">{children}</Box>
      </Stack>
    </>
  );
};

export default FigLayout;
