"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Row2 = () => {
  return (
    <Stack sx={{ pt: 4 }} flexDirection="column" alignItems="center">
      <Typography variant="h3">My experience so far</Typography>
      <Stack
        height="100%"
        px={2}
        pt={2}
        flexDirection="column"
        justifyItems="center"
        alignItems="flex-start"
        width="100%"
      >
        <Stack p={1} flexDirection="column" gap={1} width="100%">
          <Box>
            <Typography pl={0.5} variant="h4" display="inline-block">
              MODUS S.A.
            </Typography>
            <Typography display="inline">( 1 yr 9 mos)</Typography>
          </Box>
          <Stack
            px={2}
            py={1.5}
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={1.5}
            width="100%"
          >
            <Stack
              px={2}
              py={1}
              flexDirection="column"
              gap={1}
              width="100%"
              borderRadius={2}
              sx={(theme) => ({
                bgcolor: theme.palette.info.main,
              })}
            >
              <Typography variant="h5">Senior .NET Developer</Typography>
              <Typography variant="caption" sx={{ fontSize: 16 }}>
                MAY 2023 - PRESENT (3 months)
              </Typography>
              <Typography variant="caption" sx={{ fontSize: 16 }}>
                Develops and maintains services handling business logic.
                <Box component="br"></Box>Created both desktop and web
                applications for internal use by the company
              </Typography>
            </Stack>
            <Stack
              width="100%"
              px={2}
              py={1}
              borderRadius={2}
              sx={(theme) => ({ bgcolor: theme.palette.info.main })}
            >
              <Typography variant="h5">
                Full-Stack Software Developer
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box width="100%">
          <Typography variant="h4" display="inline">
            Freelancer
          </Typography>

          <Typography display="inline">(9 mos)</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Row2;
