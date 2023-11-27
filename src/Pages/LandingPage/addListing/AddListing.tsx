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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "530px",
  height: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddListing = () => {
  const [checked, setChecked] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({});
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
    password: "",
  };
  // -----------  validationSchema
  const validationSchema = yup.object({
    listingTitle: yup.string().required("Listing Title is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    console.log(values, "values");
  };

  const location = (e: any) => {
    console.log("eeeeeeeeee", e.lat(), e.lng());
    setUserLocation({
      lat: e?.lat(),
      lng: e?.lng(),
    });
  };
  return (
    <Box width="100%">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "90px 0",
        }}
        className="loginbg"
      >
        <Box className="loginBox" style={{ width: "40%" }}>
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
                    error={touched.listingTitle && Boolean(errors.listingTitle)}
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
                          value={values.latitude}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.latitude && Boolean(errors.latitude)}
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
                          value={values.longitude}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.longitude && Boolean(errors.longitude)}
                          helperText={touched.longitude && errors.longitude}
                        />
                      </div>
                    </Grid>
                  </Grid>
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
            <Grid item xs={12} sm={12} md={6}>
              <FormLabel>lat</FormLabel>
              <TextField
                name="lat"
                label=""
                size="small"
                // value={userLocation.lat}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormLabel>lng</FormLabel>
              <TextField
                name="lng"
                label=""
                size="small"
                // value={userLocation.lng}
                disabled
                fullWidth
              />
            </Grid>
            {/* <GoogleMap
              location={location}
              stateLocation={{ lat: "", lng: "" }}
            /> */}
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default AddListing;
