import React from "react";
import Header from "./header";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const AddListing = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Grid
        sx={{
          backgroundColor: "#EFF3F6",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // height: "100vh",
          padding: "30px 0",
        }}
      >
        <Card sx={{ padding: "20px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              PRIMARY LISTING DETAILS
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Listing Title
            </Typography>
            <TextField id="outlined-basic" variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default AddListing;
