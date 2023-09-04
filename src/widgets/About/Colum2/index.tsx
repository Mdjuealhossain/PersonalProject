import React from "react";
import { Stack, Typography, IconButton, Box, CardMedia } from "@mui/material";

const colum2 = () => {
  return (
    <Stack
      py={16}
      flexDirection="column"
      alignItems="flex-start"
      gap={1.25}
      height="100%"
      flex="1 0 0"
    >
      <Typography variant="h3">About me</Typography>
      <Stack
        flexDirection="column"
        justifyContent="center"
        gap={1.5}
        height="100%"
      >
        <Stack flexDirection="row" alignItems="center">
          <Box>
            <Typography variant="h6" display="inline-block" pr={1}>
              I’m a{" "}
            </Typography>
            <Typography
              display="inline-block"
              variant="h6"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.success.dark,
              })}
            >
              Senior Software Developer
            </Typography>
            <Typography variant="h6">
              {" "}
              with an addiction to clean and efficient code.
            </Typography>
          </Box>
        </Stack>
        <Typography variant="h6">
          I started writing code when I was 15 years old as a hobby and it soon
          turned into my main profession.
        </Typography>
        <Typography variant="h6">
          When I’m not working, I’m most likely enjoying a cup of coffee. ...or
          two.
        </Typography>
      </Stack>
      <Typography variant="h6">
        Feel free to email me for business matters or anything else, even small
        talk.
      </Typography>
    </Stack>
  );
};

export default colum2;
