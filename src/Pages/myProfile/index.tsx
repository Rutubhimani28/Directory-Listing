import { Grid } from "@mui/material";
import React from "react";

const MyProfile = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <div>tjhrs</div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div>thsrt</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProfile;
