import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import ResumeCard from "../ResumeCard";

import { ExperienceProps } from "./Types";

const Experience: FC<ExperienceProps> = () => {
  return (
    <Stack gap={4}>
      <Typography variant="h5">My Experience</Typography>
      <ResumeCard
        passyr="2018-19"
        depertment="Jr. UI UX Designer"
        school="Any Project"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2019-2020"
        depertment="Jr. Product Designer"
        school="Any Project"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2020 - 2021"
        depertment="Product Designer"
        school="Theme Master"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
    </Stack>
  );
};

export default Experience;
