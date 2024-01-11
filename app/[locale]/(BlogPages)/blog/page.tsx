"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

import BlogBanner from "widgets/BlogBanner";
import BlogCards from "widgets/BlogCards";
import TopTitle from "widgets/TopTitle";

const Blog = () => {
  return (
    <Box py={{ md: 5 }}>
      <Container>
        <Grid container rowSpacing={2}>
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
