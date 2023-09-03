"use client";
import React, { FC } from "react";
import { FigLayoutProps } from "./type";
import { Grid } from "@mui/material";
import Sidbar from "src/widgets/FigSideBar";

const FigLayout: FC<FigLayoutProps> = ({ children }) => {
  return (
    <body>
      <Grid
        container
        display="flex"
        flexDirection="row"
        sx={(theme) => ({
          color: theme.palette.common.white,
        })}
      >
        <Grid item xl={2.3}>
          <Sidbar />
        </Grid>
        <Grid
          xl={9.7}
          item
          sx={(theme) => ({
            bgcolor: theme.palette.info.main,
          })}
        >
          {children}
        </Grid>
      </Grid>
    </body>
  );
};

export default FigLayout;
