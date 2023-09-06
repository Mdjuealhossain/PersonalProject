"use client";
import React from "react";
import { AppBar, Box, Link, Grid, Stack, Typography } from "@mui/material";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import SmsIcon from "@mui/icons-material/Sms";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import InfoIcon from "@mui/icons-material/Info";

const navData = [
  {
    id: 1,
    title: "Home",
    icon: <HomeRoundedIcon sx={{ fontSize: 30 }} />,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <FolderSharedRoundedIcon />,
    link: "/about",
  },
  {
    id: 3,
    title: "Work",
    icon: <HomeRepairServiceSharpIcon />,
    link: "/work",
  },
  {
    id: 4,
    title: "Blog",
    icon: <SmsIcon />,
    link: "/blog",
  },
  {
    id: 5,
    title: "Notice",
    icon: <AssignmentLateIcon />,
    link: "/notice",
  },
  {
    id: 6,
    title: "About this page",
    icon: <InfoIcon />,
    link: "aboutthispage",
  },
];

const Sidbar = () => {
  return (
    <Stack
      justifyContent="space-between"
      sx={(theme) => ({
        bgcolor: theme.palette.info.dark,
        height: "100%",
      })}
    >
      {/* main */}
      <Typography position="absolute" top={50} left={125} variant="h4">
        GD
      </Typography>
      <Stack
        flexDirection="column"
        sx={{
          pt: 16,
          alignItems: "flex-start",
          gap: 2,
          height: "calc(100% - 48px)",
        }}
      >
        {navData.map((data) => {
          const { id, title, icon, link } = data;
          return (
            <Link
              href={`${link}`}
              display="flex"
              key={id}
              height={48}
              px={2}
              gap={2}
              justifyContent="center"
              alignItems="center"
              sx={(theme) => ({
                color: theme.palette.text.primary,
              })}
            >
              <Box sx={{ height: 24, width: 27 }}>{icon}</Box>
              <Typography variant="h5">{title}</Typography>
            </Link>
          );
        })}
      </Stack>
      {/* //footer */}
      <Stack minHeight={48} justifyContent="center" alignItems="center">
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          2023 © Stratis Dermanoutsos
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Sidbar;
