import React from "react";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
  const reviewData = [
    {
      img: <img src={require("../../../images/review1.jpg")} />,
      title: "Bolton music fair  ",
      city: "8  Cities ~ 400 Listing",
    },
    {
      img: <img src={require("../../../images/review2.jpg")} />,
      title: "European coffee expo ",
      city: "6  Cities ~ 300 Listing",
    },
    {
      img: <img src={require("../../../images/review3.jpg")} />,
      title: "Miami seafood show",
      city: "3  Cities ~ 270 Listing",
    },
    {
      img: <img src={require("../../../images/review4.jpg")} />,
      title: "Muay Thai Live Show",
      city: "8  Cities ~ 500 Listing",
    },
    {
      img: <img src={require("../../../images/review5.jpg")} />,
      title: "Carolina photo exibition",
      city: "4  Cities ~ 150 Listing",
    },
  ];
  const settings = {
    arrows: false,
    dots: true,
    className: "sample",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Grid sx={{ backgroundColor: "#f5f6f7", padding: "40px 0 80px 0" }}>
        <Container>
          <Grid className="section-heading"> What's happening?</Grid>
          <Slider {...settings}>
            {reviewData.map((item, index) => (
              <Grid key={index} sx={{ padding: "10px" }}>
                <Grid
                  sx={{
                    padding: "10px 10px 20px 10px",
                    backgroundColor: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Grid>{item.img}</Grid>
                  <Grid style={{ fontSize: "20px", paddingTop: "10px" }}>
                    {" "}
                    {item.title}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Slider>
        </Container>
      </Grid>
    </>
  );
};

export default Review;
