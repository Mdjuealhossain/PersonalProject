import React from "react";
import { Stack, Typography, IconButton, Box, CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TwitterIcon from "@mui/icons-material/Twitter";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const Icon = ({ children }: any) => {
  return (
    <IconButton
      sx={(theme) => ({
        height: 62,
        p: 2,
        gap: 1.25,
        alignItems: "center",
        borderRadius: 2,
        bgcolor: theme.palette.info.main,
      })}
    >
      {children}
    </IconButton>
  );
};

const Colum1 = () => {
  return (
    <Stack
      py={15}
      flexDirection="column"
      alignItems="center"
      gap={2}
      flex="1 0 0"
    >
      <CardMedia
        sx={{ width: 251.86 }}
        component="img"
        height={348}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewf8oJknc1B9smvJPPBoqbX8ofPMJx2o7xw&usqp=CAU"
        alt="encrypted-tbn0"
      ></CardMedia>
      <Stack
        px={11}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        alignContent="center"
      >
        <Icon>
          <GitHubIcon sx={{ height: 30, width: 30 }} />
        </Icon>
        <Icon>
          <AddBusinessIcon sx={{ height: 30, width: 30 }} />
        </Icon>
        <Icon>
          <TwitterIcon sx={{ height: 30, width: 30 }} />
        </Icon>
        <Icon>
          <StackedLineChartIcon sx={{ height: 30, width: 30 }} />
        </Icon>
        <Icon>
          <SportsMmaIcon sx={{ height: 30, width: 30 }} />
        </Icon>
        <Icon>
          <SportsBasketballIcon sx={{ height: 30, width: 30 }} />
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Colum1;
