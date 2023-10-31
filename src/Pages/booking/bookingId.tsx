import { Grid } from "@mui/material";
import React from "react";

const bookingId = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={5}>
          <div className="single-card">
            <div className="single-card-logo">edit</div>
            <h4>information</h4>
            <div className="single-card-content">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="single user"
              />
              <div className="single-card-content-info">
                <h1>Jane Doe</h1>
                <div>
                  <span>Email:</span>
                  <span>janedoe@gmail.com</span>
                </div>
                <div>
                  <span>Phone:</span>
                  <span>+1 2345 67 89</span>
                </div>
                <div>
                  <span>Address:</span>
                  <span>Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div>
                  <span>Country:</span>
                  <span>USA</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div>2</div>
        </Grid>
        <Grid item xs={12}>
          <div>3</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default bookingId;
