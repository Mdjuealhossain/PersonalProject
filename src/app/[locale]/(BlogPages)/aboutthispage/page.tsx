"use client";
import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TwitterIcon from "@mui/icons-material/Twitter";

import { IconWraper } from "src/widgets/AboutHelpInfo";

const AboutPage = () => {
  return (
    <Box height="100%" py={{ xs: 3, md: 5, lg: 15 }}>
      <Container sx={{ height: "100%" }}>
        <Stack
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          flex="1 00"
          sx={() => ({
            py: 4,
            px: 2,
          })}
        >
          <Typography width="100%" variant="h3" sx={{ textAlign: "center" }}>
            About this page
          </Typography>
          <Stack
            px={4}
            flexDirection="column"
            alignItems="center"
            gap={2}
            justifyContent="center"
          >
            <Typography variant="h5">
              This page was designed and built by me.
            </Typography>
            <Typography variant="h5">
              I always enjoy constructive feedback, positive or negative, and
              improving my products based on that. This is no exception, so feel
              free to use the links bellow.
            </Typography>
            <Typography variant="h5">
              The idea is to keep it as minimal as possible without missing on
              content.
            </Typography>
          </Stack>
          <Stack
            minWidth="100%"
            paddingX={8}
            justifyContent="center"
            alignItems="center"
            gap={1.25}
            flexDirection="row"
          >
            <IconWraper>
              <GitHubIcon sx={{ height: 30, width: 30 }} />
            </IconWraper>
            <IconWraper>
              <TwitterIcon sx={{ height: 30, width: 30 }} />
            </IconWraper>
            <IconWraper>
              <SportsBasketballIcon sx={{ height: 30, width: 30 }} />
            </IconWraper>
          </Stack>
          <Box
            sx={(theme) => ({
              maxWidth: 348,
              p: 2,
              alignItems: "center",
              gap: 10,
              borderRadius: 2,
              bgcolor: theme.palette.grey[100],
            })}
          >
            <Typography variant="h2">Sponsor me on GitHub</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;
