import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
    const reviewData = [
        {
            img: <img src={require("../../../images/review1.jpg")} />,
            reviewtext: "3.5 review",
            review: 3.5,
            title: "Bolton music fair  ",
            city: "8  Cities ~ 400 Listing",
        },
        {
            img: <img src={require("../../../images/review2.jpg")} />,
            reviewtext: "1.5 review",
            review: 1.5,
            title: "European coffee expo ",
            city: "6  Cities ~ 300 Listing",
        },
        {
            img: <img src={require("../../../images/review3.jpg")} />,
            reviewtext: "3.5 review",
            review: 3.5,
            title: "Miami seafood show",
            city: "3  Cities ~ 270 Listing",
        },
        {
            img: <img src={require("../../../images/review4.jpg")} />,
            reviewtext: "2 review",
            review: 2,
            title: "Muay Thai Live Show",
            city: "8  Cities ~ 500 Listing",
        },
        {
            img: <img src={require("../../../images/review5.jpg")} />,
            reviewtext: "5 review",
            review: 5,
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
                                        borderRadius: "5px",
                                        backgroundColor: "#fff",
                                        textAlign: "center",
                                    }}
                                >
                                    <Grid>{item.img}</Grid>
                                    <Grid sx={{ fontSize: "20px", paddingTop: "10px", padding: "20px", textAlign: "left" }}>
                                        {item.title}
                                        <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Rating name="half-rating-read" defaultValue={item.review} precision={0.5} readOnly sx={{ fontSize: "18px " }} />
                                            <Typography sx={{ fontSize: "15px " }}>{item.reviewtext}</Typography>
                                        </Grid>
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
