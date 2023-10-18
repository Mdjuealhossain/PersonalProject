"use client";
import React from "react";
import { Stack } from "@mui/material";
import Colum2 from "src/widgets/About/Colum2";
import { Colum1 } from "src/widgets/About/Colum1";

const About = () => {
  return (
    <Stack
      justifyContent="center"
      gap={2}
      alignItems="flex-start"
      direction="row"
      height="100%"
    >
      <Colum1 />
      <Colum2 />
    </Stack>
  );
};

export default About;
