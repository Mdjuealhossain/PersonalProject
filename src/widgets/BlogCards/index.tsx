import { FC } from "react";
import { Stack } from "@mui/material";

import BlogCard from "../BlogCard";

import { BlogCardsProps } from "./Types";

const BlogCards: FC<BlogCardsProps> = () => {
  return (
    <Stack flexDirection="row" gap={4}>
      <BlogCard
        title="Free to use"
        des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        img="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/323216917_849017493050726_3721557920749209294_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEg_ZuDfeIZyNvIkur8oJxa-R-XXFY9otj5H5dcVj2i2F-q_E15Th8XGkIuYHY_M647hRz0lqxtUUKOg1e94LNt&_nc_ohc=XROlqZw2yj8AX_hQLN-&_nc_oc=AQkJbbgDbHeb9oyIiwG_-CnBPxfoHKOsi6TK67mGgSH3nq2D5XiT_wYcV3hDqIJERnA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAXYO5XMGd5niUDcfJ2D7Y1GekQRHSR8cQAg9YxGF7YYA&oe=64FE3683"
        alt="leo"
      />
      <BlogCard
        title="Easy to Learn"
        des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        img="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/323216917_849017493050726_3721557920749209294_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEg_ZuDfeIZyNvIkur8oJxa-R-XXFY9otj5H5dcVj2i2F-q_E15Th8XGkIuYHY_M647hRz0lqxtUUKOg1e94LNt&_nc_ohc=XROlqZw2yj8AX_hQLN-&_nc_oc=AQkJbbgDbHeb9oyIiwG_-CnBPxfoHKOsi6TK67mGgSH3nq2D5XiT_wYcV3hDqIJERnA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAXYO5XMGd5niUDcfJ2D7Y1GekQRHSR8cQAg9YxGF7YYA&oe=64FE3683"
        alt="leo"
      />
      <BlogCard
        title="First Respose"
        des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        img="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/323216917_849017493050726_3721557920749209294_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEg_ZuDfeIZyNvIkur8oJxa-R-XXFY9otj5H5dcVj2i2F-q_E15Th8XGkIuYHY_M647hRz0lqxtUUKOg1e94LNt&_nc_ohc=XROlqZw2yj8AX_hQLN-&_nc_oc=AQkJbbgDbHeb9oyIiwG_-CnBPxfoHKOsi6TK67mGgSH3nq2D5XiT_wYcV3hDqIJERnA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAXYO5XMGd5niUDcfJ2D7Y1GekQRHSR8cQAg9YxGF7YYA&oe=64FE3683"
        alt="leo"
      />
    </Stack>
  );
};

export default BlogCards;
