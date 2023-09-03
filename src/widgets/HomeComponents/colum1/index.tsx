import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Colum = () => {
  return (
    <Grid container item spacing={1} xl={6} sx={{ py: 15, pr: 2 }}>
      <Grid item flexDirection="column" xl={12}>
        <Typography variant="h3">Hi, I'm </Typography>
        <Typography
          display="inline-block"
          sx={(theme) => ({ color: theme.palette.success.dark })}
        >
          Stratis
        </Typography>
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          Welcome to my page
        </Typography>
      </Grid>

      <Grid item xl={12}>
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
      </Grid>
    </Grid>

    // <---iughuh----
    // <Grid container>
    //   <Grid item flexDirection="column" xl>
    //     <Typography variant="h3">Hi, I'm </Typography>
    //     <Typography
    //       display="inline-block"
    //       sx={(theme) => ({ color: theme.palette.success.dark })}
    //     >
    //       Stratis
    //     </Typography>
    //     <Typography
    //       variant="h5"
    //       sx={(theme) => ({
    //         color: theme.palette.text.secondary,
    //         pb: 4,
    //       })}
    //     >
    //       Welcome to my page
    //     </Typography>
    //   </Grid>
    // <Grid item bgcolor="red">
    //   <Stack
    //     flexDirection="column"
    //     justifyContent="center"
    //     alignItems="center"
    //     flex="1 0 0"
    //   >
    //     <Stack flexDirection="row" alignItems="center">
    //       <Typography sx={{ display: "inline-block", pr: 1 }} variant="body2">
    //         I’m a{" "}
    //       </Typography>
    //       <Typography
    //         variant="h6"
    //         fontWeight={700}
    //         sx={(theme) => ({
    //           color: theme.palette.success.dark,
    //         })}
    //       >
    //         Senior Software Developer
    //       </Typography>
    //     </Stack>

    //     <Typography variant="body2">
    //       specialising in web and mobile apps.
    //     </Typography>
    //   </Stack>
    //   <Stack>
    //     <Typography variant="body2">
    //       In my free time, I am either contributing to Open-Source projects or
    //       working on my cars.
    //     </Typography>
    //   </Stack>
    //   <Stack>
    //     <Typography variant="body2">
    //       I love talking about the world, hobbies and especially code.
    //     </Typography>
    //   </Stack>
    // </Grid>
    // </Grid>
  );
};

export default Colum;
