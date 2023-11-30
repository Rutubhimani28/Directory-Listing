import React from "react";
import { Autocomplete, Button, Grid, Paper, TextField } from "@mui/material";
import Typed from "react-typed";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
const Banner = () => {
  const top100Films = [
    { label: "kgThe Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <>
      <Grid
        className="banner"
        sx={{
          padding: {
            lg: "100px 0p",
            md: "70px 0px",
            sm: "50px 30px",
            xs: "20px 10px",
          },
        }}
      >
        <Grid
          className="banner-title"
          sx={{ fontSize: { xs: "40px", sm: "45px", md: "56px", lg: "56px" } }}
        >
          Find Nearby&nbsp;
          <Typed
            strings={["Hotels", "restaurants ", "Beauty", "Fitness"]}
            typeSpeed={100}
            backSpeed={100}
            loop={true}
            smartBackspace={true}
            showCursor={false}
            style={{ color: "#fff" }}
          />
          <p>
            All the top locations – from restaurants and clubs, to galleries,
            famous places and more..
          </p>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300, borderRadius: "0" }}
                // value={value}
                getOptionLabel={(option) => option.label}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Ex:food,service,barber,hotel"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <span style={{ fontWeight: "bold" }}>what</span>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                    }}
                    sx={{ backgroundColor: "white", borderRadius: "0" }}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: {
                    xs: "center",
                    sx: "center",
                    md: "start",
                    lg: "start",
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                }}
              >
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  fullWidth
                  sx={{ width: 300, borderRadius: "0" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Your City..."
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            <span style={{ fontWeight: "bold" }}>Where</span>
                            {params.InputProps.startAdornment}
                          </>
                        ),
                      }}
                      sx={{ backgroundColor: "white", borderRadius: "0" }}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  className="search-btn"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  <SearchOutlined />
                </Button>
                <Button
                  variant="contained"
                  className="search-btn"
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  Search Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <p>
            Just looking around? Let us suggest you <br />
            something hot & happening!
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
