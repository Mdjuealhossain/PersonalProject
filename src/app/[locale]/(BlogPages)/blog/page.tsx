"use client";
import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";

import BlogBanner from "src/widgets/BlogBanner";
import BlogCards from "src/widgets/BlogCards";
import TopTitle from "src/widgets/TopTitle";

const Blog = () => {
  return (
    <Box pt={8}>
      <Container>
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <TopTitle title="blog details" subtitle="Blogs" />
          </Grid>
          <Grid item xs={12}>
            <BlogBanner />
          </Grid>
          <Grid item xs={12}>
            <BlogCards />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
