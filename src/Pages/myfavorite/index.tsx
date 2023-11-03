import { Button, Card, Grid, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import VideocamIcon from "@mui/icons-material/Videocam";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useState } from "react";
// import { use } from "react-router-dom";

const Favorite = () => {
  const rows = [
    {
      id: 1,
      img: "https://lion-coders.com/demo/html/listagram/images/single-listing/gallery-6.jpg",
      bussiness: "Hotel",
      title: "Four Seasons Resort",
      address: "4210 Khale Street, Florence, USA",
      view: "325",
    },
    {
      id: 2,
      img: "https://lion-coders.com/demo/html/listagram/images/single-listing/restaurant-2.jpg",
      bussiness: "Restaurent",
      title: "La Quo Vadis",
      address: "42 Albemarle st. Mayfair,London",
      view: "450",
    },
    {
      id: 3,
      img: "https://lion-coders.com/demo/html/listagram/images/category/event/muay.jpg",
      bussiness: "Movie",
      title: "Muay Thai Live Show",
      address: "1690 Brown Avenue,Barline",
      view: "620",
    },
    {
      id: 4,
      img: "https://lion-coders.com/demo/html/listagram/images/category/event/3.jpg",
      bussiness: "Music",
      title: "Bolton music fair",
      address: "20 Hogh Street, Bolton, France",
      view: "380",
    },
  ];
  const [favoriteList, setFavoriteList] = useState(rows);
  const handleDelete = (id: any) => {
    const updatedList = favoriteList.filter((item: any) => item.id !== id);
    setFavoriteList(updatedList);
    console.log("hello", updatedList);
  };

  return (
    <div>
      <>
        <h3 className="heading">Favourite Listings</h3>
        {favoriteList.map((row: any, i: any) => (
          <Card className="table-card" key={i}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <div className="favrite-box">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={row.img} alt={row.title} />
                    </div>
                    <div className="booking-user-details ">
                      <h5 className="d-flex align-items-center">
                        <span>
                          {row.bussiness === "Hotel" ? (
                            <RestaurantMenuIcon className="hotel-icon" />
                          ) : row.bussiness === "Music" ? (
                            <MusicNoteIcon className="hotel-icon music-icon" />
                          ) : row.bussiness === "Movie" ? (
                            <VideocamIcon className="hotel-icon movie-icon" />
                          ) : row.bussiness === "Restaurent" ? (
                            <RestaurantMenuIcon className="hotel-icon restorant-icon" />
                          ) : (
                            <AddBusinessIcon className="hotel-icon other-icon" />
                          )}
                        </span>
                        <span style={{ color: "#777" }}> {row.bussiness}</span>
                      </h5>
                      <h3 className="fav-title"> {row.title}</h3>
                      <p className="favourite-address">
                        <LocationOnIcon /> {row.address}
                      </p>
                      <div className="d-flex  rating">
                        <span>
                          <Rating
                            size="small"
                            name="half-rating"
                            defaultValue={2.5}
                            precision={0.5}
                          />
                        </span>
                        <span className="fav-view">View: {row.view}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid>
                  <Button
                    className="save-btn"
                    variant="contained"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        ))}
      </>
    </div>
  );
};

export default Favorite;
