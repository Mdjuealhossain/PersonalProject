"use client";
import { Stack, Typography, IconButton, Box, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import MailIcon from "@mui/icons-material/Mail";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import Colum2 from "src/widgets/HomeComponents/colum2";
import Colum from "src/widgets/HomeComponents/colum1";

export default function Home() {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      gap={2}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
      <Colum />
      <Colum2 />
    </Box>
  );
}
