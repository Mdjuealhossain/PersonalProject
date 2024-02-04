import { FC } from "react";
import { Grid } from "@mui/material";

import BlogCard from "../BlogCard";

import { BlogCardsProps } from "./Types";

const BlogCards: FC<BlogCardsProps> = () => {
  return (
    <Grid container columnSpacing={6} rowSpacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Free to use"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://www.shutterstock.com/image-photo/graduation-cap-earth-globe-concept-260nw-2349898783.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Easy to Learn"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="First Respose"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://www.shutterstock.com/shutterstock/photos/301088441/display_1500/stock-photo-research-study-report-response-result-action-concept-301088441.jpg"
          alt="leo"
        />
      </Grid>
    </Grid>
  );
};

export default BlogCards;
