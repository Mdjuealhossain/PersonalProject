import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Colum = () => {
  return (
    <Stack
      sx={{ py: 15, pr: 2 }}
      justifyContent="space-between"
      height="100%"
      flex="1 0 0"
    >
      <Stack flexDirection="column" pb={3.6} gap={1.25} alignItems="flex-start">
        <Box>
          <Typography variant="h3" display="inline">
            Hi, I'm{" "}
          </Typography>
          <Typography
            display="inline"
            variant="h3"
            sx={(theme) => ({ color: theme.palette.success.dark })}
          >
            MD.Jueal
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          Welcome to my page
        </Typography>
      </Stack>

      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
        height="100%"
        flex="1 0 0"
      >
        <Stack flexDirection="column">
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ display: "inline-block", pr: 1 }} variant="body2">
              I’m a{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.success.dark,
              })}
            >
              Senior Software Developer
            </Typography>
          </Stack>

          <Typography variant="body2">
            specialising in web and mobile apps.
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">
            In my free time, I am either contributing to Open-Source projects or
            working on my cars.
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">
            I love talking about the world, hobbies and especially code.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Colum;
