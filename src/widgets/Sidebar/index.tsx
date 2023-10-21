import { FC } from "react";
import { Box, Link, Stack, Typography, Paper } from "@mui/material";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import SmsIcon from "@mui/icons-material/Sms";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import InfoIcon from "@mui/icons-material/Info";

import { SideBarProps } from "./Types";

const navData = [
  {
    id: 1,
    title: "Home",
    icon: <HomeRoundedIcon sx={{ fontSize: 30 }} color="action" />,
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

const SideBar: FC<SideBarProps> = () => {
  return (
    <Paper
      square
      sx={(theme) => ({
        width: theme.spacing(37.5),
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      })}
    >
      <Stack justifyContent="space-between" height="100%">
        <Typography
          position="absolute"
          sx={{
            top: { xs: 45 },
            left: { xs: 18, sm: 25, md: 135 },
          }}
          variant="h4"
        >
          GD
        </Typography>

        <Stack
          flexDirection="column"
          pr={{ xs: 1, md: 0 }}
          pt={16}
          alignItems="flex-start"
          gap={2}
          height="calc(100% - 48px)"
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
              >
                <Box sx={{ height: 24, width: 27 }}>{icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  {title}
                </Typography>
              </Link>
            );
          })}
        </Stack>
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
    </Paper>
  );
};

export default SideBar;
