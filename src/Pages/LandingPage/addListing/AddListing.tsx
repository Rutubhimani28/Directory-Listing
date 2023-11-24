import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Checkbox,
  Modal,
  Button,
  FormLabel,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import PinDropIcon from "@mui/icons-material/PinDrop";
import GoogleMap from "./GoogleMap";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "530px",
  height: "630px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddListing = () => {
  const [checked, setChecked] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<any>({
    lat: null,
    lng: null,
  });
  const handleMapOpen = () => setMapOpen(true);
  const handleMapClose = () => setMapOpen(false);
  const handleCheckeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(!checked);
    console.log(checked);
    setChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const initialValues = {
    listingTitle: "",
    address: {
      lat: "",
      lan: "",
    },
  };
  // -----------  validationSchema
  const validationSchema = yup.object({
    listingTitle: yup.string().required("Listing Title is required"),
    address: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    console.log(values, "values");
  };

  const location = (e: any) => {
    setUserLocation({
      lat: e?.lat(),
      lng: e?.lng(),
    });
    console.log("eeeeeeeeee", e.lat(), e.lng(), userLocation);
  };
  const handleMapSubmit = () => {
    handleMapClose();
  };

  console.log("userLocation", userLocation);
  return (
    <Box width="100%">
      <Header />

      <div
        style={{
          padding: "60px 0",
        }}
        className="loginbg"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={6} sx={{ margin: "0 30px" }}>
            <Box className="addListingBox">
              <Typography
                variant="h5"
                style={{ padding: "0 0 30px 0", textAlign: "center" }}
              >
                Primary Listing Details
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, errors, touched }: any) => (
                  <Form>
                    <div className="textfiled-row">
                      <label>Listing Title</label>
                      <Field
                        className="textfiled"
                        name="listingTitle"
                        value={values.listingTitle}
                        as={TextField}
                        onChange={handleChange}
                        error={
                          touched.listingTitle && Boolean(errors.listingTitle)
                        }
                        helperText={touched.listingTitle && errors.listingTitle}
                      />
                    </div>
                    <Grid sx={{ cursor: "pointer", textAlign: "end" }}>
                      <Checkbox
                        {...label}
                        // checked={checked}
                        checked={checked}
                        onChange={handleCheckeChange}
                      />
                      Does Your Business have a tagline?
                    </Grid>
                    {checked === true ? (
                      <div className="textfiled-row">
                        <label>Tagline</label>
                        <Field
                          className="textfiled"
                          name="Tagline"
                          value={values.Tagline}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.Tagline && Boolean(errors.Tagline)}
                          helperText={touched.Tagline && errors.Tagline}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="textfiled-row">
                      <Grid>
                        <Typography
                          variant="button"
                          fontWeight={600}
                          padding="15px 0"
                        >
                          Address
                        </Typography>
                      </Grid>
                      <Grid sx={{ textAlign: "end" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ color: "#3e98c7", fontWeight: "700" }}
                          onClick={handleMapOpen}
                        >
                          <PinDropIcon style={{ paddingRight: "5px" }} />
                          Drop pin
                        </Button>
                      </Grid>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Latitude</label>
                            <Field
                              className="textfiled"
                              name="latitude"
                              value={userLocation.lat}
                              as={TextField}
                              onChange={handleChange}
                              error={
                                touched.latitude && Boolean(errors.latitude)
                              }
                              helperText={touched.latitude && errors.latitude}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Longitude</label>
                            <Field
                              className="textfiled"
                              name="longitude"
                              value={userLocation.lng}
                              as={TextField}
                              onChange={handleChange}
                              error={
                                touched.longitude && Boolean(errors.longitude)
                              }
                              helperText={touched.longitude && errors.longitude}
                            />
                          </div>
                        </Grid>
                      </Grid>
                      <div className="textfiled-row">
                        <label>City</label>
                        <Field
                          className="textfiled"
                          name="city"
                          value={values.city}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      </div>
                      <div className="textfiled-row">
                        <label>Phone</label>
                        <Field
                          className="textfiled"
                          name="phone"
                          value={values.phone}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                      </div>
                      <div className="textfiled-row">
                        <label>Website</label>
                        <Field
                          className="textfiled"
                          name="website"
                          value={values.website}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.website && Boolean(errors.website)}
                          helperText={touched.website && errors.website}
                        />
                      </div>
                    </div>

                    <Button
                      fullWidth
                      className="save-btn"
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
        </Grid>
      </div>
      <Footer />

      <div>
        <Modal
          open={mapOpen}
          onClose={handleMapClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid grey",
                marginBottom: "20px",
              }}
            >
              <Grid>
                <Typography variant="h6">Google map</Typography>
              </Grid>
              <Grid onClick={handleMapClose}>
                <CloseIcon />
              </Grid>
            </Grid>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleMapSubmit}
            >
              {({ values, handleChange, errors, touched }: any) => (
                <Form>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel>lat</FormLabel>
                      <Field
                        name="lat"
                        label=""
                        size="small"
                        as={TextField}
                        value={userLocation?.lat}
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormLabel>lng</FormLabel>
                      <Field
                        name="lng"
                        label=""
                        size="small"
                        as={TextField}
                        value={userLocation?.lng}
                        disabled
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <GoogleMap
                    location={location}
                    stateLocation={{ lat: "", lng: "" }}
                  />
                  <Grid
                    textAlign="end"
                    sx={{
                      position: "absolute",
                      bottom: "8px",
                      right: "11px",
                      marginBottom: "10px",
                    }}
                  >
                    <Button
                      className="save-btn"
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={handleMapSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default AddListing;
