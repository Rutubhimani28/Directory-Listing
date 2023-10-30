/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./mylisting.css";
import { Grid, Button, Card, Pagination } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
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
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      title: "Chipotle Mexican Grill",
      startFrom: "$220",
      place: "New York, USA",
      compare: "Compare to last week",
    },

    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
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

    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      compare: "Compare to yesterday",
    },
    {
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      compare: "Compare to last week",
    },
  ];

  const images = [
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings7.jpg",
      label: "image1",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      label: "image2",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings4.jpg",
      label: "image3",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      label: "image4",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      label: "image5",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      label: "image6",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      label: "image7",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slickNext: true,
    slickPrevious: true,
    swipe: true,
  };

  const itemsPerPage = 3;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListData = listData.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h3 className="heading">my listing</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {currentListData.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <Card className="listing-box ">
              {/* <div style={{width:"967px"}}>
              <Slider {...settings}>
                {images.map((itemss: any) => (
                  <div key={itemss.label}>
                    <img
                      src={itemss.photo}
                      alt={itemss.label}
                      style={{
                        // borderRadius: "15px",
                        display: "block",
                        overflow: "hidden",
                        width: "50%"
                      }}
                    />
                  </div>
                ))}
              </Slider>
              </div> */}

              <img src={item.img} />
              <Grid padding={2}>
                <div className="d-flex justify-contant-between padding-10">
                  <div className="d-flex align-items-center">
                    <SingleBedIcon className="bookingicon" /> Restaurant
                  </div>
                  <div className="d-flex align-items-center">
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
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(listData.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        className="pagination-list"
      />
    </div>
  );
};

export default myListing;
