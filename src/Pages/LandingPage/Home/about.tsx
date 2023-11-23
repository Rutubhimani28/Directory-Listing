import React from "react";
import Grid from "@mui/material/Grid";
import HotelIcon from "@mui/icons-material/Hotel";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Container } from "@mui/material";
// import AboutImg from "../../../images/about1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const about = [
    {
      img: <HotelIcon />,
      name: "Hotel",
    },
    {
      img: <RiceBowlIcon />,
      name: "Restaurent",
    },
    {
      img: <ShoppingBagIcon />,
      name: "Shopping",
    },
    {
      img: <ContentCutIcon />,
      name: "Beauty & spa",
    },
    {
      img: <LocalHospitalIcon />,
      name: "Hospital",
    },
    {
      img: <EventNoteIcon />,
      name: "Services",
    },
  ];
  const popularData = [
    {
      img: <img src={require("../../../images/about1.jpg")} />,
      text: "France",
      city: "8  Cities ~ 400 Listing",
    },
    {
      img: <img src={require("../../../images/about2.jpg")} />,
      text: "Thailand",
      city: "6  Cities ~ 300 Listing",
    },
    {
      img: <img src={require("../../../images/about3.jpg")} />,
      text: "Turkey",
      city: "3  Cities ~ 270 Listing",
    },
    {
      img: <img src={require("../../../images/about4.jpg")} />,
      text: "Spain",
      city: "8  Cities ~ 500 Listing",
    },
    {
      img: <img src={require("../../../images/about5.jpg")} />,
      text: "Italy",
      city: "4  Cities ~ 150 Listing",
    },
  ];
  const settings = {
    arrows: true,
    className: "sample",
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{ flexGrow: 1, margin: "100px 0px" }}>
        {about.map((item, index) => (
          <Grid item xs={6} sm={6} md={4} lg={2} key={index}>
            <Grid key={index} className="about-box">
              {item.img}
              <h5>{item.name}</h5>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid className="section-heading"> Explore Your Dream Places</Grid>

      <Grid sx={{ padding: "40px 0" }}>
        <Slider {...settings}>
          {popularData.map((imageUrl, index) => (
            <Grid key={index}>
              <Grid>
                <div className="about-img">
                  {imageUrl.img}
                  <Grid className="about-text">
                    <p> {imageUrl.text}</p>
                    <h3>{imageUrl.city}</h3>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Container>
  );
};

export default About;
