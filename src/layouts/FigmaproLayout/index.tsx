"use client";
import React, { FC } from "react";
import { FigLayoutProps } from "./type";
import { Box, Grid, Stack } from "@mui/material";
import Sidbar from "src/widgets/FigSideBar";

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <Stack flexDirection="row" height="100%">
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
            maxWidth: "calc(100% - 380px)",
          })}
        >
          {children}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FigLayout;
