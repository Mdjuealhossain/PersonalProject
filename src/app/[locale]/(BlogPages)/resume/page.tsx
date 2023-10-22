import { Box, Container, Grid } from "@mui/material";

import Education from "src/widgets/Education";
import Experience from "src/widgets/Experience";
import MySkills from "src/widgets/MySkills";
import TopTitle from "src/widgets/TopTitle";

const Resume = () => {
  return (
    <Box pt={8}>
      <Container>
        <Grid container columnSpacing={6} rowSpacing={5}>
          <Grid item xs={12}>
            <TopTitle title="summary" subtitle="Resume" />
          </Grid>
          <Grid item xs={6}>
            <Education />
          </Grid>
          <Grid item xs={6}>
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
