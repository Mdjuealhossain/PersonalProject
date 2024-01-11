import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import ResumeCard from "../ResumeCard";

import { EducationProps } from "./Types";

const Education: FC<EducationProps> = () => {
  return (
    <Stack gap={4}>
      <Typography variant="h5">My Education</Typography>
      <ResumeCard
        passyr="2016-2017"
        depertment="Science"
        school="Uttar Shahbajpure G.I"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2017-2020"
        depertment="Electical Engneer"
        school="Barishal PolyTechnic Institute"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2020 - 2021"
        depertment="Computer Science"
        school="Theme Master IT Comp"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
    </Stack>
  );
};

export default Education;
