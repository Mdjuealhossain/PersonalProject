"use client";
import { FC } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

import { TopTitleProps } from "./Types";

const TopTitle: FC<TopTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({ color: theme.palette.grey[400], opacity: 0.2 })}
      >
        <Typography variant="h1">{title}</Typography>
      </Stack>
      <Box position="absolute" left={830} top={130}>
        <Typography fontWeight={700} variant="h4">
          {subtitle}
        </Typography>
        <Divider
          sx={(theme) => ({
            borderBottomWidth: 4,
            borderColor: theme.palette.success.light,
          })}
          light
          variant="middle"
          textAlign="center"
        />
      </Box>
    </>
  );
};

export default TopTitle;
