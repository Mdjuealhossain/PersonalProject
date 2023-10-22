import { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";

import { AboutDetailsProps } from "./Types";

const AboutDetails: FC<AboutDetailsProps> = () => {
  return (
    <Stack py={6} flexDirection="column" gap={1.25} height="100%">
      <Box textAlign="center">
        <Typography variant="h3">About me</Typography>
      </Box>
      <Stack
        flexDirection="column"
        justifyContent="center"
        gap={1.5}
        height="100%"
      >
        <Stack flexDirection="row" alignItems="center">
          <Box>
            <Typography variant="body2" display="inline-block" pr={1}>
              I’m a
            </Typography>
            <Typography
              display="inline-block"
              variant="h6"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.success.main,
              })}
            >
              Senior Software Developer
            </Typography>
            <Typography variant="body2">
              with an addiction to clean and efficient code.
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2">
          I started writing code when I was 15 years old as a hobby and it soon
          turned into my main profession.
        </Typography>
        <Typography variant="body2">
          When I’m not working, I’m most likely enjoying a cup of coffee. ...or
          two.
        </Typography>
        <Typography variant="body2">
          Feel free to email me for business matters or anything else, even
          small talk.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutDetails;
