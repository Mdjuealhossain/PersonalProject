"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconWraper } from "src/widgets/About/Colum1";

interface Props {
  Icon: JSX.Element;
}

const AboutPage: FC<Props> = ({ Icon }) => {
  return (
    <Stack
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      flex="1 00"
      sx={() => ({
        py: 4,
        px: 8,
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
          bgcolor: theme.palette.info.main,
        })}
      >
        <Typography
          variant="h2"
          sx={(theme) => ({ color: theme.palette.success.dark })}
        >
          Sponsor me on GitHub
        </Typography>
      </Box>
    </Stack>
  );
};

export default AboutPage;
