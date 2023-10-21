"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

import BlogBanner from "src/widgets/BlogBanner";
import BlogCards from "src/widgets/BlogCards";

const Blog = () => {
  return (
    <Box>
      <Container>
        <Stack gap={10}>
          <BlogBanner />
          <BlogCards />
        </Stack>
      </Container>
    </Box>
  );
};

export default Blog;
