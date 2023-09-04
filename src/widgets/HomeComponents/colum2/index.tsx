import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";

const Colum2 = () => {
  return (
    <Stack
      sx={{ py: 15 }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      flex="1 0 0"
      alignSelf="stretch"
    >
      <Stack>
        <Typography variant="h3">Want to hire me?</Typography>
      </Stack>
      <Stack flexDirection="column" alignItems="center">
        <Typography
          variant="subtitle1"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          I strive to reply within an hour.
        </Typography>
        <Stack
          flexDirection="row"
          gap={1.25}
          p={2}
          alignItems="center"
          height={62}
        >
          <MailIcon
            sx={(theme) => ({
              height: 30,
              width: 30,
              color: theme.palette.success.dark,
            })}
          />
          <Typography variant="overline">EMAIL</Typography>
        </Stack>
      </Stack>
      <Stack px={2} justifyContent="center" alignItems="center" gap={2}>
        <Box
          sx={(theme) => ({
            width: "171px",
            height: "2px",
            bgcolor: theme.palette.text.secondary,
          })}
        ></Box>
        <Typography variant="h5">or</Typography>
        <Box
          sx={(theme) => ({
            width: "171px",
            height: "2px",
            bgcolor: theme.palette.text.secondary,
          })}
        ></Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
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
          <FacebookRoundedIcon sx={{ height: 30, width: 30 }} />
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
          <AddCircleOutlineRoundedIcon sx={{ height: 30, width: 30 }} />
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
          <CloudUploadRoundedIcon sx={{ height: 30, width: 30 }} />
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
          <SubscriptionsRoundedIcon sx={{ height: 30, width: 30 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Colum2;
