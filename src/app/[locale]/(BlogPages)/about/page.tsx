"use client";
import React from "react";
import { Stack } from "@mui/material";
import Colum1 from "src/widgets/About/Colum1";
import Colum2 from "src/widgets/About/Colum2";

const About = () => {
  return (
    <Stack
      justifyContent="center"
      gap={2}
      alignItems="flex-start"
      direction="row"
    >
      <Colum1 />
      <Colum2 />
      <Stack></Stack>
    </Stack>
  );
};

export default About;
