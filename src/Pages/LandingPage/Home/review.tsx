import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
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
            icon: <SportsSoccerIcon />,
            name: "movies",
            time: "9:00 am",
            moblieNo: "+843-600-2040",
            website: "www.laresorta.com",
            location: "4210 Khale Street,Florence,USA",
        },
        {
            img: <img src={require("../../../images/review2.jpg")} />,
            reviewtext: "1.5 review",
            review: 1.5,
            title: "European coffee expo ",
            icon: <SoupKitchenIcon />,
            name: "Eat & Drink",
            time: "10:00 am",
            moblieNo: "+605-344-1198",
            website: "www.cafemezzo.com",
            location: "2721 Andy Street,ELLSWORTH,USA",
        },
        {
            img: <img src={require("../../../images/review3.jpg")} />,
            reviewtext: "3.5 review",
            review: 3.5,
            title: "Miami seafood show",
            icon: <CoffeeIcon />,
            name: "Eat & Drink",
            time: "8:00 am",
            moblieNo: "+44 20 7336 8898",
            website: "www.burgerandlobster.com",
            location: "1301 Avenue, Brooklyn, NY 11230",
        },
        {
            img: <img src={require("../../../images/review4.jpg")} />,
            reviewtext: "2 review",
            review: 2,
            title: "Muay Thai Live Show",
            icon: <MusicNoteIcon />,
            name: "music",
            time: "11:00 am",
            moblieNo: "+44 20 7336 8898",
            website: "www.burgerandlobster.com",
            location: "1301 Avenue, Brooklyn, NY 11230",
        },
        {
            img: <img src={require("../../../images/review5.jpg")} />,
            reviewtext: "5 review",
            review: 5,
            title: "Carolina photo exibition",
            icon: <CameraAltIcon />,
            name: "Photography",
            time: "9:00 am",
            moblieNo: "+44 20 7336 8898",
            website: "www.burgerandlobster.com",
            location: "1301 Avenue, Brooklyn, NY 11230",
        },
    ];
    const settings = {
        arrows: false,
        dots: true,
        className: "sample",
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <>
            <Grid sx={{ backgroundColor: "#f5f6f7", padding: "40px 0 80px 0" }}>
                <Container>
                    <Grid className="section-heading"> Customer Review</Grid>
                    <Slider {...settings}>
                        {reviewData.map((item, index) => (
                            <Grid key={index} sx={{ padding: "10px" }}>
                                <Grid
                                    sx={{
                                        borderRadius: "10px",
                                        backgroundColor: "#fff",
                                        textAlign: "left",
                                    }}
                                >
                                    <Grid>{item.img}</Grid>
                                    <Grid sx={{ fontSize: "20px", paddingTop: "10px", padding: "20px", textAlign: "left" }}>
                                        {item.title}
                                        <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                            <Rating name="half-rating-read" defaultValue={item.review} precision={0.5} readOnly sx={{ fontSize: "20px " }} />
                                            <Typography sx={{ fontSize: "15px " }}>{item.reviewtext}</Typography>
                                        </Grid>
                                        <Grid className="review-text">
                                            <li><PlaceIcon />{item.location}</li>
                                            <li><CallIcon />{item.moblieNo}</li>
                                            <li><PublicIcon />{item.website}</li>
                                        </Grid>
                                        <Grid sx={{ border: "1px solid #ededed", margin: "20px 12px" }}></Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Grid className="review-icon"><li>{item.icon}{item.name}</li></Grid>
                                            <Grid sx={{ display: "flex", alignItems: "center" }}>
                                                <AccessTimeIcon sx={{ fontSize: "18px", marginRight: "8px", marginBottom: "2px" }} />
                                                <Typography sx={{ color: "#3e98c7", fontSize: "14px", display: "flex", alignItems: "center" }}>{item.time}</Typography>
                                            </Grid>
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
