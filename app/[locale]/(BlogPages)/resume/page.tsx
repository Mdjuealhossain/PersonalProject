import { Box, Container, Grid } from "@mui/material";

import Education from "widgets/Education";
import Experience from "widgets/Experience";
import MySkills from "widgets/MySkills";
import TopTitle from "widgets/TopTitle";

const Resume = () => {
  return (
    <Box py={{ md: 5 }}>
      <Container>
        <Grid
          container
          columnSpacing={{ md: 6, xs: 0 }}
          rowSpacing={{ xs: 8, md: 0 }}
        >
          <Grid item xs={12}>
            <TopTitle title="summary" subtitle="Resume" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Education />
          </Grid>
          <Grid item xs={12} md={6}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <MySkills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;
