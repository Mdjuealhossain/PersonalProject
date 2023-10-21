"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import WorkHelpInfo from "src/widgets/WorkHelpInfo";
import WorkDetails from "src/widgets/WorkDetails/page";

const Work = () => {
  return (
    <Box>
      <Container>
        <Stack height="100%" sx={{ py: 8, px: 4 }}>
          <WorkHelpInfo></WorkHelpInfo>
          <WorkDetails></WorkDetails>
        </Stack>
      </Container>
    </Box>
  );
};

export default Work;
