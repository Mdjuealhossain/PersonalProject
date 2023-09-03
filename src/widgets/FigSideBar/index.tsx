"use client";
import React from "react";
import { AppBar, Box, CardMedia, Stack, Typography } from "@mui/material";
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
  },
  {
    id: 2,
    title: "About",
    icon: <FolderSharedRoundedIcon />,
  },
  {
    id: 3,
    title: "Work",
    icon: <HomeRepairServiceSharpIcon />,
  },
  {
    id: 4,
    title: "Blog",
    icon: <SmsIcon />,
  },
  {
    id: 5,
    title: "Notice",
    icon: <AssignmentLateIcon />,
  },
  {
    id: 6,
    title: "About this page",
    icon: <InfoIcon />,
  },
];

const Sidbar = () => {
  return (
    <AppBar color="inherit" position="static">
      <Stack sx={{ p: 2, gap: 2 }}>
        <Stack pb={32} gap="16px">
          <Stack justifyContent="center" alignItems="center" height={110}>
            <Typography variant="h4">SD</Typography>
          </Stack>
          {navData.map((data) => {
            const { id, title, icon } = data;
            return (
              <Stack
                key={id}
                height={48}
                pr={2}
                pl={2}
                gap={2}
                flexDirection="row"
                alignItems="center"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                <Stack>{icon}</Stack>
                <Typography variant="h5">{title}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        component="footer"
        height={48}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          2023 © Stratis Dermanoutsos
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Sidbar;
