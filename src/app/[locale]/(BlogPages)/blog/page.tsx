"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import BlogCard from "src/widgets/Blog/BlogCard";

import BlogHeader from "src/widgets/Blog/BlogHeader";

const Blog = () => {
  return (
    <Box>
      <Container>
        <Stack gap={10}>
          <BlogHeader />
          <BlogCard />
        </Stack>
      </Container>
    </Box>
  );
};

export default Blog;
