"use client";
import React from "react";
import { Box, Container, Grid } from "@mui/material";

import AboutDetails from "src/widgets/AboutDetails";
import { AboutHelpInfo } from "src/widgets/AboutHelpInfo";
import TopTitle from "src/widgets/TopTitle";

const About = () => {
  return (
    <Box py={{ md: 5 }}>
      <Container>
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <TopTitle title="about me" subtitle="Know Me More" />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} md={6}>
              <AboutHelpInfo />
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutDetails />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
