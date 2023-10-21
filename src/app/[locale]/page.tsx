"use client";
import { Box, Grid, Container } from "@mui/material";

import HomeHelpInfo from "src/widgets/HomeHelpInfo";
import HomeDetails from "src/widgets/HomeDatials";

export default function Home() {
  return (
    <Box height="100%">
      <Container sx={{ height: "100%" }}>
        <Grid container height="100%">
          <Grid item xs={12} md={6}>
            <HomeDetails />
          </Grid>
          <Grid xs={12} md={6}>
            <HomeHelpInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
