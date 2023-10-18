"use client";
import React, { FC } from "react";
import { FigLayoutProps } from "./type";
import { Box, Grid, Stack } from "@mui/material";
import Sidbar from "src/widgets/FigSideBar";

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <Stack height="100%">
      <Grid container>
        <Grid item xs={3} maxWidth={380} height="100%">
          <Sidbar />
        </Grid>

        <Grid
          xs={9}
          item
          py={4}
          px={{ lg: 8, xs: 1 }}
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
