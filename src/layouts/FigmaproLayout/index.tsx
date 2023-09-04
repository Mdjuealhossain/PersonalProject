"use client";
import React, { FC } from "react";
import { FigLayoutProps } from "./type";
import { Box, Grid, Stack } from "@mui/material";
import Sidbar from "src/widgets/FigSideBar";

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <Stack
      flexDirection="row"
      sx={(theme) => ({
        color: theme.palette.common.white,
      })}
    >
      <Box sx={{ width: 480 }}>
        <Sidbar />
      </Box>
      <Stack
        width="calc(100% -280px)"
        sx={(theme) => ({
          bgcolor: theme.palette.info.main,
        })}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default FigLayout;
