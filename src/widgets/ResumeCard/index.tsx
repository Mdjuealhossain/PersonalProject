"use client";
import { FC } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

import { ResumeCardProps } from "./Types";

const ResumeCard: FC<ResumeCardProps> = ({
  passyr,
  depertment,
  school,
  description,
}) => {
  return (
    <Paper elevation={2}>
      <Stack gap={2} p={3}>
        <Stack
          justifyContent="center"
          alignItems="center"
          p={0.5}
          maxWidth={105}
          sx={(theme) => ({
            bgcolor: theme.palette.success.light,
            borderRadius: 2,
          })}
        >
          <Typography>{passyr}</Typography>
        </Stack>
        <Box>
          <Typography variant="h5">{depertment}</Typography>
          <Typography color="red" variant="caption">
            {school}
          </Typography>
        </Box>
        <Typography color="text.secondary">{description}</Typography>
      </Stack>
    </Paper>
  );
};

export default ResumeCard;
