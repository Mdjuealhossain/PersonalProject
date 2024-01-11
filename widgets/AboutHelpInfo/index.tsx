import { FC } from "react";
import { Stack, IconButton, CardMedia, Link, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TwitterIcon from "@mui/icons-material/Twitter";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { AboutHelpInfoProps, IconWraperPropsProps } from "./Types";

const IconWraper: FC<IconWraperPropsProps> = ({ children }) => {
  return (
    <IconButton component={Link} href="#" sx={{ boxShadow: 25 }}>
      {children}
    </IconButton>
  );
};

const AboutHelpInfo: FC<AboutHelpInfoProps> = () => {
  return (
    <Stack py={6} flexDirection="column" alignItems="center" gap={4}>
      <Box sx={(theme) => ({ border: `8px solid ${theme.palette.grey[300]}` })}>
        <CardMedia
          sx={{ maxWidth: 277 }}
          component="img"
          height={348}
          image="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/335031868_1823057784744716_3631202048498529098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKgNwnstAwTmHXM9s9a2LGy0KLuRvZkADLQou5G9mQADCQP-vB7s4yyyGJePlXz3ozEOqbF1SXxLU8oxGjGD0q&_nc_ohc=e6pqE1qEgJIAX_Y7EQv&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAV7RG12Dv6xzB4lBjAZ5Li2vrbTjFODn5gnSA2KQcXiw&oe=65397134"
          alt="MJ"
        ></CardMedia>
      </Box>
      <Stack gap={5}>
        <Stack
          px={11}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <IconWraper>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <AddBusinessIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconWraper>
        </Stack>
        <Stack
          px={11}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <IconWraper>
            <StackedLineChartIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <SportsMmaIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <SportsBasketballIcon sx={{ fontSize: 40 }} />
          </IconWraper>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AboutHelpInfo, IconWraper };
