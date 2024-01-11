"use client";
import { Box, Grid, Container } from "@mui/material";

import HomeHelpInfo from "widgets/HomeHelpInfo";
import HomeDetails from "widgets/HomeDatials";

export default function Home() {
  return (
    <Box height="100%">
      <Container sx={{ height: "100%" }}>
        <Grid container height="100%">
          <Grid item xs={12} md={6}>
            <HomeDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeHelpInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
