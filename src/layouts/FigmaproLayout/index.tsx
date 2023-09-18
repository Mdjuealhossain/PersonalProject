"use client";
import React, { FC } from "react";
import { FigLayoutProps } from "./type";
import { Box, Grid, Stack } from "@mui/material";
import Sidbar from "src/widgets/FigSideBar";

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ flexDirection: "row", display: "flex", minHeight: "100%" }}>
      <Grid container maxWidth={380}>
        <Grid item xs={12}>
          <Sidbar />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          item
          py={4}
          px={8}
          sx={(theme) => ({
            bgcolor: theme.palette.warning.light,
            minWidth: "calc(100% - 380px)",
          })}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FigLayout;
