"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import BlogCard from "src/widgets/Blog/BlogCard";

import BlogHeader from "src/widgets/Blog/BlogHeader";

const Blog = () => {
  return (
    <Stack gap={10}>
      <BlogHeader />
      <BlogCard />
    </Stack>
  );
};

export default Blog;
