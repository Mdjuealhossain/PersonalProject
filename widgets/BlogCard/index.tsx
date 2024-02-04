import { FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";

import { BlogCardProps } from "./type";

const BlogCard: FC<BlogCardProps> = ({ title, des, img, alt }) => {
  return (
    <Card
      sx={(theme) => ({
        p: 4,
        transform: 15,
      })}
    >
      <Stack alignItems="center" pb={3}>
        <CardMedia
          sx={(theme) => ({
            borderRadius: "50%",
            width: 120,
            border: 2,
            borderColor: theme.palette.action.hover,
          })}
          height={120}
          component="img"
          image={img}
          alt={alt}
        ></CardMedia>
      </Stack>
      <CardContent>
        <Box textAlign="center">
          <Typography variant="h5" pb={3} sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
          {des && <Typography>{des}</Typography>}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
