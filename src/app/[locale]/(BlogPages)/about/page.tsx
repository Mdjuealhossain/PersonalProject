"use client";
import React from "react";
import { Stack, Box, Container } from "@mui/material";

import AboutDetails from "src/widgets/AboutDetails";
import { AboutHelpInfo } from "src/widgets/AboutHelpInfo";

const About = () => {
  return (
    <Box>
      <Container>
        <Stack
          justifyContent="center"
          gap={2}
          alignItems="flex-start"
          direction="row"
          height="100%"
        >
          <AboutHelpInfo />
          <AboutDetails />
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
