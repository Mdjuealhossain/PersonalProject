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
        minHeight: "100%",
      })}
    >
      <Box width={280}>
        <Sidbar />
      </Box>
      <Stack
        py={4}
        px={8}
        sx={(theme) => ({
          bgcolor: theme.palette.warning.light,
          width: "calc(100% - 280px)",
        })}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default FigLayout;
