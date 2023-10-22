import { FC, useState, useContext } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";

import { ColorModeContext } from "src/theme";
import SideBar from "../SideBar";

import { HeaderProps } from "./Types";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  return (
    <Box>
      <Container>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Stack flex={1}>
              <Avatar
                src="https://avatars.githubusercontent.com/u/123495777?s=400&u=0e510f3b9b75f6c7ed4a37632f165e341f4d14d8&v=4"
                alt="JL"
              ></Avatar>
            </Stack>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton onClick={toggleColorMode}>{mode}</IconButton>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)} elevation={0}>
              <SideBar onClose={() => setOpen(false)} />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Header;
