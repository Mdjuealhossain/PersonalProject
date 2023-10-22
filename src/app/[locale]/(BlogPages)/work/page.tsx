"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import WorkHelpInfo from "src/widgets/WorkHelpInfo";
import WorkDetails from "src/widgets/WorkDetails/page";
import TopTitle from "src/widgets/TopTitle";

const Work = () => {
  return (
    <Box pt={8}>
      <Container>
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <TopTitle title="services" subtitle="What I Do ?" />
          </Grid>
          <Grid item xs={6}>
            <WorkHelpInfo />
          </Grid>
          <Grid item xs={6}>
            <WorkDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
