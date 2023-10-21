"use client";
import { Box, Grid, Container } from "@mui/material";

import Colum2 from "src/widgets/HomeComponents/colum2";
import Colum from "src/widgets/HomeComponents/colum1";

export default function Home() {
  return (
    <Box height="100%">
      <Container sx={{ height: "100%" }}>
        <Grid container height="100%">
          <Grid item xs={12} md={6}>
            <Colum />
          </Grid>
          <Grid xs={12} md={6}>
            <Colum2 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
