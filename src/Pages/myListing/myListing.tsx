import React from "react";
import "./mylisting.css";
import { Grid, Button } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const myListing = () => {
  const listData = [
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      title: "Chipotle Mexican Grill",
      startFrom: "$220",
      place: "New York, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings4.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
  ];
  return (
    <div>
      <Grid container spacing={5} className="Listing-card">
        {listData.map((item: any) => (
          <div>
            <Grid item xs={4} className="listing-box">
              <img src={item.img} />
              <Grid padding={2}>
                <div className="d-flex justify-contant-between padding-10">
                  <div className="d-flex align-items-center ">
                    <SingleBedIcon className="bookingicon" /> Restaurant
                  </div>
                  <div className="d-flex align-items-center ">
                    <RoomIcon className="bookingicon" /> {item.place}
                  </div>
                </div>
                <h2 className="padding-10">{item.title}</h2>
                <div className="d-flex align-items-center">
                  <BookmarkBorderIcon className="bookingicon" />
                  Open Now
                </div>
                <div className="d-flex justify-contant-between align-items-center padding-10">
                  <div>
                    <StarIcon className="starticon" />
                    <StarIcon className="starticon" />
                    <StarIcon className="starticon" />
                    <StarIcon className="starticon" />
                    <StarIcon className="starticon" />
                  </div>
                  <div>Start From: {item.startFrom}</div>
                </div>
              </Grid>
              <Grid
                style={{ borderTop: "1px solid #eeeeee" }}
                className="d-flex justify-contant-between padding20"
              >
                <Button className="default-btn ">Edit</Button>
                <Button className="default-btn ">Delete</Button>
              </Grid>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default myListing;
