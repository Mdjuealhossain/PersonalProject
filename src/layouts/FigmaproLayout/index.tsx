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
        height: 832,
      })}
    >
      <Box width={280}>
        <Sidbar />
      </Box>
      <Stack
        sx={(theme) => ({
          bgcolor: theme.palette.info.main,
          width: "calc(100% - 280px)",
        })}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default FigLayout;
