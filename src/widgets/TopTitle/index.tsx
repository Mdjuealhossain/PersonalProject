"use client";
import { FC } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

import { TopTitleProps } from "./Types";

const TopTitle: FC<TopTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <Stack textAlign="center">
        <Box sx={(theme) => ({ color: theme.palette.grey[400], opacity: 0.2 })}>
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box position="absolute" alignSelf="center" pt={7}>
          <Typography fontWeight={700} lineHeight={1.5} variant="h4">
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
      </Stack>
    </>
  );
};

export default TopTitle;
