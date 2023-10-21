"use client";
import React from "react";
import { Stack, Box, Container, Grid } from "@mui/material";

import AboutDetails from "src/widgets/AboutDetails";
import { AboutHelpInfo } from "src/widgets/AboutHelpInfo";

const About = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AboutHelpInfo />
          </Grid>
          <Grid item xs={6}>
            <AboutDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
