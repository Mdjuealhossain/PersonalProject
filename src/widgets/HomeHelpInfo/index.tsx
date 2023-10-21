import { Box, IconButton, Stack, Typography } from "@mui/material";

import { FC } from "react";

import MailIcon from "@mui/icons-material/Mail";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";

import { HomeHelpInfoProps } from "./Types";

const HomeHelpInfo: FC<HomeHelpInfoProps> = () => {
  return (
    <Stack
      py={{ xs: 3, md: 5, lg: 15 }}
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h3">Want to hire me?</Typography>
      <Stack flexDirection="column" alignItems="center">
        <Typography
          variant="subtitle1"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          I strive to reply within an hour.
        </Typography>
        <Stack flexDirection="row" gap={1.5} p={2} alignItems="center">
          <IconButton
            sx={(theme) => ({
              color: theme.palette.success.dark,
            })}
          >
            <MailIcon />
          </IconButton>
          <Typography variant="overline">EMAIL</Typography>
        </Stack>
      </Stack>
      <Stack
        px={2}
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexDirection="row"
      >
        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.text.secondary,
          })}
          height={{ xs: 2 }}
          width={{ xs: 171, lg: 120, xl: 171 }}
        ></Box>
        <Typography variant="h5">or</Typography>
        <Box
          height={{ xs: 2 }}
          width={{ xs: 171, lg: 120, xl: 171 }}
          sx={(theme) => ({
            bgcolor: theme.palette.text.secondary,
          })}
        ></Box>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        gap={1}
      >
        <IconButton
          sx={(theme) => ({
            p: 2,
            alignItems: "center",
            gap: 1.25,
            bgcolor: theme.palette.info.main,
            color: theme.palette.text.disabled,
          })}
        >
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton
          sx={(theme) => ({
            height: 62,
            p: 2,
            alignItems: "center",
            gap: 1.25,
            borderRadius: 16,
            bgcolor: theme.palette.info.main,
            color: theme.palette.text.disabled,
          })}
        >
          <AddCircleOutlineRoundedIcon />
        </IconButton>
        <IconButton
          sx={(theme) => ({
            height: 62,
            p: 2,
            alignItems: "center",
            gap: 1.25,
            borderRadius: 16,
            bgcolor: theme.palette.info.main,
            color: theme.palette.text.disabled,
          })}
        >
          <CloudUploadRoundedIcon />
        </IconButton>
        <IconButton
          sx={(theme) => ({
            height: 62,
            p: 2,
            alignItems: "center",
            gap: 1.25,
            borderRadius: 16,
            bgcolor: theme.palette.info.main,
            color: theme.palette.text.disabled,
          })}
        >
          <SubscriptionsRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default HomeHelpInfo;
