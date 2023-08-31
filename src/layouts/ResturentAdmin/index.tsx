import { FC } from "react";
import { ResturentAdminProps } from "./Type";
import ResAdmineSidebar from "src/widgets/RestAdminSidebar";
import { Grid } from "@mui/material";

const ResturentAdmin: FC<ResturentAdminProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid lg={3}>
        <ResAdmineSidebar></ResAdmineSidebar>
      </Grid>
      <Grid lg={9}>{children}</Grid>
    </Grid>
  );
};

export default ResturentAdmin;
