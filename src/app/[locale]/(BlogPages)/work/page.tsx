"use client";
import { Stack } from "@mui/material";
import React from "react";
import Row1 from "src/widgets/Work/Row1";
import Row2 from "src/widgets/Work/Row2/page";

const Work = () => {
  return (
    <Stack height="100%" sx={{ py: 8, px: 4 }}>
      <Row1></Row1>
      <Row2></Row2>
    </Stack>
  );
};

export default Work;
