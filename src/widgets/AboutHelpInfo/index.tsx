import { FC } from "react";
import { Stack, IconButton, CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TwitterIcon from "@mui/icons-material/Twitter";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { AboutHelpInfoProps, IconWraperPropsProps } from "./Types";

const IconWraper: FC<IconWraperPropsProps> = ({ children }: any) => {
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

const AboutHelpInfo: FC<AboutHelpInfoProps> = () => {
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
        <IconWraper>
          <GitHubIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
        <IconWraper>
          <AddBusinessIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
        <IconWraper>
          <TwitterIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
        <IconWraper>
          <StackedLineChartIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
        <IconWraper>
          <SportsMmaIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
        <IconWraper>
          <SportsBasketballIcon sx={{ height: 30, width: 30 }} />
        </IconWraper>
      </Stack>
    </Stack>
  );
};

export { AboutHelpInfo, IconWraper };
