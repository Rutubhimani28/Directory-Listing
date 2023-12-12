import React, { useCallback, useEffect, useState } from "react";
// import Header from "../header";
// import Footer from "../footer";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Checkbox,
  Modal,
  Button,
  FormLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDropzone } from "react-dropzone";
import MultiFileUpload from "./fileUpload";
import Requests from "../../../services/Request";
import GoogleMap from "./GoogleMap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();
  const requestApiData = new Requests();
  const hours = [
    { day: "Monday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Tuesday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Wednesday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Thrusday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Friday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Staurday", openingHours: "1:00", closingHours: "8:00" },
    { day: "Sunday", openingHours: "1:00", closingHours: "8:00" },
  ];

  const [checked, setChecked] = useState(false);
  const [gallary, setGallary] = useState<any>([]);
  const [uploadFile, setuploadFile] = useState<any>([]);
  const [singleFile, setSingleFile] = useState<File>();
  const [city, setCity] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);
  const [banner, setBanner] = useState<any>([]);
  const [findcity, setFindCity] = useState("");
  const [isGridDisabled, setIsGridDisabled] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(Array(hours.length).fill(false));
  const [userLocation, setUserLocation] = useState<any>({
    lat: null,
    lng: null,
  });
  const [is24HoursOpen, setIs24HoursOpen] = useState(
    Array(hours.length).fill(false)
  );
  const [openingHours, setOpeningHours] = useState(
    Array(hours.length).fill("12:00 am")
  );
  const [closingHours, setClosingHours] = useState(
    Array(hours.length).fill("12:00 pm")
  );
  const handleOpenningHoursChange = (e: any, index: any) => {
    const newOpeningHours: any = [...openingHours];
    newOpeningHours[index] = e.target.value;

    if (e.target.value === "24 Hours Open") {
      setIs24HoursOpen((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    } else {
      setIs24HoursOpen((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
    setOpeningHours(newOpeningHours);
  };
  const handleclosingHoursChange = (e: any, index: any) => {
    const newClosingHours: any = [...closingHours];
    newClosingHours[index] = e.target.value;
    setClosingHours(newClosingHours);
  };

  const handleCheckboxChange = (index: any) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);

    const allUnchecked = newIsChecked.every((value) => !value);
    setIsGridDisabled(allUnchecked);
  };
  const handleCheckeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleMapOpen = () => setMapOpen(true);
  const handleMapClose = () => setMapOpen(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const location = (e: any) => {
    setUserLocation({
      lat: e?.lat(),
      lng: e?.lng(),
    });
    const newLatLng = {
      lat: e?.lat(),
      lng: e?.lng(),
    };
    onMapClicked(newLatLng);
  };
  const handleMapSubmit = () => {
    handleMapClose();
  };
  useEffect(() => {
    console.log("City:", findcity);
  }, [findcity]);

  const onMapClicked = async (newLatLng: any) => {
    const latLng = newLatLng;

    try {
      const locationData = await getLocationData(latLng.lat, latLng.lng);
      const extractedCity = extractCityName(locationData);
      console.log(extractedCity, "LLLLLLLLLLLLLLLLLLLLLLLL");
      setFindCity(extractedCity);
    } catch (error) {
      console.error("Error fetching city:", error);
      setFindCity("City not found");
    }
  };

  const getLocationData = async (latitude: any, longitude: any) => {
    // Use OpenStreetMap Nominatim API for reverse geocoding
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse`,
      {
        params: {
          format: "json",
          lat: latitude,
          lon: longitude,
        },
      }
    );
    console.log(response, "KKKKKKKKKKKKKKKKKKKK");
    return response.data;
  };

  const extractCityName = (locationData: any) => {
    // Extract the city name from the Nominatim response
    return (
      locationData.address?.city ||
      locationData.address?.town ||
      "City not found"
    );
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("files", file);
    });

    // Assuming only one file is allowed for single file upload
    const file = acceptedFiles[0];
    setSingleFile(file);
    singleuploadFile(file);
  }, []);

  const singleuploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await requestApiData.postSingleImages(formData);
      setSingleFile(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file", error);
      // Handle the error as needed
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // multi image upload
  const handleUpload = (files: File[]) => {
    const fileNamesArray: any = files;
    const formData = new FormData();
    formData.append("bsImages", fileNamesArray);
    return fileNamesArray;
  };
  const getFiles = (data: any) => {
    setuploadFile(data.fileUrls);
  };

  const initialValues = {
    title: "",
    address: {
      lat: userLocation.lat,
      lan: userLocation.lng,
    },
    city: "",
    phone: "",
    website: "",
    category: "",
    faqs: [{ faq: "", answer: "" }],
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    title: yup.string().required("Listing Title is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Category is required"),
  });

  const handleSubmit = async (values: any) => {
    const openHours = hours
      .filter((item, index) => isChecked[index])
      .map((item, index) => ({
        day: item.day,
        isChecked: isChecked[index],
        timeFrom: openingHours[index],
        timeTo:
          openingHours[index] === "24 Hours Open" ? "" : closingHours[index],
        isOpenFullDay: openingHours[index] === "24 Hours Open" ? true : false,
      }));
    const payload = {
      title: values.title,
      address: {
        lat: userLocation.lat,
        lan: userLocation.lng,
      },
      // cityName: 1,
      city: values.city,
      phone: values.phone,
      description: values.description,
      website: values.website,
      category: values.category,
      faqs: values.faqs,
      bsVideoUrl: values.video,
      bsImages: uploadFile,
      bsLogo: singleFile,
      businessHours: openHours,
      socialMedia: [
        {
          socMdaName: "instagram",
          url: values.instagram,
        },
        {
          socMdaName: "facebook",
          url: values.facebook,
        },
        {
          socMdaName: "twitter",
          url: values.twitter,
        },
        {
          socMdaName: "linkedin",
          url: values.linkedin,
        },
      ],
    };
    console.log(payload, "payload");
    try {
      const response = await requestApiData.addListingUser(payload);
      if (response) {
        console.log(response.data.success === true);
        toast.success("Listing added successfully!");
        navigate("/my-listing");
      } else {
        toast.error("Failed to add listing. Please try again."); // Display error message if necessary
      }
    } catch (error) {
      console.error("Error adding listing:", error);
      toast.error("An error occurred. Please try again later."); // Display error message
    }
  };
  // city Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCities = await requestApiData.getAllCity();
        setCity(allCities.data.data);
        // Do something with allCities here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // category Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCategories = await requestApiData.getAllCategory();
        setCategory(allCategories.data.data);
        // Do something with allCities here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box width="100%">
      {/* {window.location.pathname === "/add-listing" ? <Header /> : ""} */}
      <div
        style={{
          padding: "60px 0",
        }}
        // className="loginbg"
        className={window.location.pathname === "/add-listing" ? "loginbg" : ""}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                setFieldValue,
              }: any) => (
                <Form>
                  {/* Primary Listing Details */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Primary Listing Details
                    </Typography>
                    <div className="textfiled-row">
                      <label>Listing Title</label>
                      <Field
                        className="textfiled"
                        name="title"
                        placeholder="Listing Title"
                        value={values.title}
                        as={TextField}
                        onChange={handleChange}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && errors.title}
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
                          placeholder="Tagline"
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
                              disabled
                              placeholder="Latitude"
                              className="textfiled"
                              name="lat"
                              value={userLocation.lat}
                              as={TextField}
                              onChange={handleChange}
                              error={touched.lat && Boolean(errors.lat)}
                              helperText={touched.lat && errors.lat}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Longitude</label>
                            <Field
                              disabled
                              placeholder="Longitude"
                              className="textfiled"
                              name="lng"
                              value={userLocation.lng}
                              as={TextField}
                              onChange={handleChange}
                              error={touched.lng && Boolean(errors.lng)}
                              helperText={touched.lng && errors.lng}
                            />
                          </div>
                        </Grid>
                      </Grid>
                      <div className="textfiled-row">
                        <label>City</label>
                        <Autocomplete
                          size="small"
                          onChange={(event, newValue) => {
                            setFieldValue("city", newValue.cityID);
                          }}
                          options={city}
                          // value={city.find(division => division.divisionName === values.divisionName)}
                          getOptionLabel={(city: any) => city?.cityName}
                          style={{ textTransform: "capitalize" }}
                          clearIcon
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              style={{ textTransform: "capitalize" }}
                              placeholder="Select City"
                            />
                          )}
                        />
                      </div>
                      <div className="textfiled-row">
                        <label>Phone</label>
                        <Field
                          className="textfiled"
                          name="phone"
                          value={values.phone}
                          placeholder="Phone"
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
                          placeholder="Website"
                          value={values.website}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.website && Boolean(errors.website)}
                          helperText={touched.website && errors.website}
                        />
                      </div>
                      <div className="textfiled-row">
                        <label>Tags</label>
                        <Field
                          className="textfiled"
                          placeholder="Tags"
                          name="tags"
                          value={values.tags}
                          as={TextField}
                          onChange={handleChange}
                          error={touched.tags && Boolean(errors.tags)}
                          helperText={touched.tags && errors.tags}
                        />
                      </div>
                      <div className="textfiled-row">
                        <label>Description</label>
                        <Field
                          className="textfiled"
                          name="description"
                          value={values.description}
                          placeholder="Description"
                          multiline
                          rows={3}
                          as={TextField}
                          onChange={handleChange}
                          error={
                            touched.description && Boolean(errors.description)
                          }
                          helperText={touched.description && errors.description}
                        />
                      </div>
                    </div>
                  </Box>
                  {/* category */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Category & Services
                    </Typography>
                    <div className="textfiled-row">
                      <label>Category </label>
                      {/* <EditableSelectField
                        className="categorySelect"
                        name="category"
                        fullWidth
                        value={values.category}
                        onChange={(e: any) => {
                          setFieldValue("category", e);
                        }}
                        options={categoryList}
                      /> */}
                      <Autocomplete
                        size="small"
                        onChange={(event, newValue) => {
                          setFieldValue("category", newValue.categoryID);
                        }}
                        options={category}
                        getOptionLabel={(category: any) =>
                          category?.categoryName
                        }
                        style={{ textTransform: "capitalize" }}
                        clearIcon
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            style={{ textTransform: "capitalize" }}
                            placeholder="Select category"
                          />
                        )}
                      />
                      {/* <span style={{ color: "red" }}>
                        <ErrorMessage name="category" />
                      </span> */}
                    </div>
                  </Box>
                  {/* openning hour */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Opening Hours
                    </Typography>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      {hours.map((item, i) => (
                        <Grid item xs={12} md={6}>
                          <div className="textfiled-row">
                            <Grid
                              container
                              rowSpacing={1}
                              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                              <Grid item xs={4}>
                                <div>
                                  {" "}
                                  <Checkbox
                                    {...label}
                                    defaultChecked
                                    checked={isChecked[i]}
                                    onChange={() => handleCheckboxChange(i)}
                                  />
                                  {item.day}
                                </div>
                              </Grid>
                              <Grid item xs={4}>
                                <div>
                                  <Select
                                    style={{ height: " 32px" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    disabled={!isChecked[i]}
                                    fullWidth
                                    defaultValue={"12:00 am"}
                                    value={openingHours[i]}
                                    onChange={(e) =>
                                      handleOpenningHoursChange(e, i)
                                    }
                                  >
                                    <MenuItem value={"12:00 am"}>
                                      12:00 am
                                    </MenuItem>
                                    <MenuItem value={"12:30 am"}>
                                      12:30 am
                                    </MenuItem>
                                    <MenuItem value={"1:00 am"}>
                                      1:00 am
                                    </MenuItem>
                                    <MenuItem value={"1:30 am"}>
                                      1:30 am
                                    </MenuItem>
                                    <MenuItem value={"2:00 am"}>
                                      2:00 am
                                    </MenuItem>
                                    <MenuItem value={"2:30 am"}>
                                      2:30 am
                                    </MenuItem>
                                    <MenuItem value={"3:00 am"}>
                                      3:00 am
                                    </MenuItem>
                                    <MenuItem value={"3:30 am"}>
                                      3:30 am
                                    </MenuItem>
                                    <MenuItem value={"4:00 am"}>
                                      4:00 am
                                    </MenuItem>
                                    <MenuItem value={"4:30 am"}>
                                      4:30 am
                                    </MenuItem>
                                    <MenuItem value={"5:00 am"}>
                                      5:00 am
                                    </MenuItem>
                                    <MenuItem value={"5:30 am"}>
                                      5:30 am
                                    </MenuItem>
                                    <MenuItem value={"6:00 am"}>
                                      6:00 am
                                    </MenuItem>
                                    <MenuItem value={"6:30 am"}>
                                      6:30 am
                                    </MenuItem>
                                    <MenuItem value={"7:00 am"}>
                                      7:00 am
                                    </MenuItem>
                                    <MenuItem value={"7:30 am"}>
                                      7:30 am
                                    </MenuItem>
                                    <MenuItem value={"8:00 am"}>
                                      8:00 am
                                    </MenuItem>
                                    <MenuItem value={"8:30 am"}>
                                      8:30 am
                                    </MenuItem>
                                    <MenuItem value={"9:00 am"}>
                                      9:00 am
                                    </MenuItem>
                                    <MenuItem value={"9:30 am"}>
                                      9:30 am
                                    </MenuItem>
                                    <MenuItem value={"10:00 am"}>
                                      10:00 am
                                    </MenuItem>
                                    <MenuItem value={"10:30 am"}>
                                      10:30 am
                                    </MenuItem>
                                    <MenuItem value={"11:00 am"}>
                                      11:00 am
                                    </MenuItem>
                                    <MenuItem value={"11:30 am"}>
                                      11:30 am
                                    </MenuItem>
                                    <MenuItem value={"24 Hours Open"}>
                                      24 Hours Open
                                    </MenuItem>
                                  </Select>
                                </div>
                              </Grid>
                              <Grid item xs={4}>
                                <div className="textfiled-row">
                                  {!is24HoursOpen[i] && (
                                    <Select
                                      style={{ height: " 32px" }}
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      disabled={
                                        !isChecked[i] ||
                                        openingHours[i] === "24 Hours Open"
                                      }
                                      fullWidth
                                      defaultValue={"12:00 pm"}
                                      value={closingHours[i]}
                                      onChange={(e) =>
                                        handleclosingHoursChange(e, i)
                                      }
                                    >
                                      <MenuItem value={"12:00 pm"}>
                                        12:00 pm
                                      </MenuItem>
                                      <MenuItem value={"12:30 pm"}>
                                        12:30 pm
                                      </MenuItem>
                                      <MenuItem value={"1:00 pm"}>
                                        1:00 pm
                                      </MenuItem>
                                      <MenuItem value={"1:30 pm"}>
                                        1:30 pm
                                      </MenuItem>
                                      <MenuItem value={"2:00 pm"}>
                                        2:00 pm
                                      </MenuItem>
                                      <MenuItem value={"2:30 pm"}>
                                        2:30 pm
                                      </MenuItem>
                                      <MenuItem value={"3:00 pm"}>
                                        3:00 pm
                                      </MenuItem>
                                      <MenuItem value={"3:30 pm"}>
                                        3:30 pm
                                      </MenuItem>
                                      <MenuItem value={"4:00 pm"}>
                                        4:00 pm
                                      </MenuItem>
                                      <MenuItem value={"4:30 pm"}>
                                        4:30 pm
                                      </MenuItem>
                                      <MenuItem value={"5:00 pm"}>
                                        5:00 pm
                                      </MenuItem>
                                      <MenuItem value={"5:30 pm"}>
                                        5:30 pm
                                      </MenuItem>
                                      <MenuItem value={"6:00 pm"}>
                                        6:00 pm
                                      </MenuItem>
                                      <MenuItem value={"6:30 pm"}>
                                        6:30 pm
                                      </MenuItem>
                                      <MenuItem value={"7:00 pm"}>
                                        7:00 pm
                                      </MenuItem>
                                      <MenuItem value={"7:30 pm"}>
                                        7:30 pm
                                      </MenuItem>
                                      <MenuItem value={"8:00 pm"}>
                                        8:00 pm
                                      </MenuItem>
                                      <MenuItem value={"8:30 pm"}>
                                        8:30 pm
                                      </MenuItem>
                                      <MenuItem value={"9:00 pm"}>
                                        9:00 pm
                                      </MenuItem>
                                      <MenuItem value={"9:30 pm"}>
                                        9:30 pm
                                      </MenuItem>
                                      <MenuItem value={"10:00 pm"}>
                                        10:00 pm
                                      </MenuItem>
                                      <MenuItem value={"10:30 pm"}>
                                        10:30 pm
                                      </MenuItem>
                                      <MenuItem value={"11:00 pm"}>
                                        11:00 pm
                                      </MenuItem>
                                      <MenuItem value={"11:30 pm"}>
                                        11:30 pm
                                      </MenuItem>
                                    </Select>
                                  )}
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  {/* social */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Social
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: "0 0 30px 0" }}
                    >
                      We are not responsible for any damages caused by the use
                      of this website, or by posting business listings here.
                      Please use our site at your own discretion and exercise
                      good judgement as well as common sense when advertising
                      business here.
                    </Typography>
                    <div className="textfiled-row">
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Linked in URL</label>
                            <Field
                              className="textfiled"
                              name="linkedin"
                              value={values.linkedin}
                              as={TextField}
                              onChange={handleChange}
                              error={
                                touched.linkedin && Boolean(errors.linkedin)
                              }
                              helperText={touched.linkedin && errors.linkedin}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Facebook URL</label>
                            <Field
                              className="textfiled"
                              name="facebook"
                              value={values.facebook}
                              as={TextField}
                              onChange={handleChange}
                              error={
                                touched.facebook && Boolean(errors.facebook)
                              }
                              helperText={touched.facebook && errors.facebook}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Twitter URL</label>
                            <Field
                              className="textfiled"
                              name="twitter"
                              value={values.twitter}
                              as={TextField}
                              onChange={handleChange}
                              error={touched.twitter && Boolean(errors.twitter)}
                              helperText={touched.twitter && errors.twitter}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="textfiled-row">
                            <label>Instagram URL</label>
                            <Field
                              className="textfiled"
                              name="instagram"
                              value={values.instagram}
                              as={TextField}
                              onChange={handleChange}
                              error={
                                touched.instagram && Boolean(errors.instagram)
                              }
                              helperText={touched.instagram && errors.instagram}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Box>
                  {/* faq */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="textfiled-row">
                      <FieldArray
                        name="faqs"
                        render={({ push, remove }: any) => (
                          <div>
                            {values.faqs.map((faq: any, index: any) => (
                              <div className="textfiled-row" key={index}>
                                <Grid
                                  container
                                  rowSpacing={1}
                                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                  <Grid item xs={2}>
                                    <div>FAQ {index + 1}</div>
                                  </Grid>
                                  <Grid item xs={10}>
                                    <div className="textfiled-row">
                                      <Field
                                        className="textfiled"
                                        name={`faqs[${index}].question`}
                                        as={TextField}
                                        placeholder="FAQ"
                                      />
                                    </div>
                                    <div className="textfiled-row">
                                      <Field
                                        name={`faqs[${index}].answer`}
                                        id="outlined-basic"
                                        variant="outlined"
                                        multiline
                                        as={TextField}
                                        rows={3}
                                        placeholder="Answer"
                                      />
                                    </div>
                                  </Grid>
                                  {/* <Grid item xs={2}>
                                    <Button
                                      type="button"
                                      variant="outlined"
                                      color="error"
                                      onClick={() => remove(index)}
                                    >
                                      <HorizontalRuleIcon />
                                    </Button>
                                  </Grid> */}
                                </Grid>
                              </div>
                            ))}
                            <div style={{ textAlign: "end" }}>
                              <Button
                                variant="outlined"
                                sx={{ color: "#3e98c7", fontWeight: "700" }}
                                onClick={() =>
                                  push({ question: "", answer: "" })
                                }
                              >
                                <AddCircleIcon style={{ marginRight: "" }} />{" "}
                                Add New
                              </Button>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </Box>
                  {/* media */}
                  <Box className="addListingBox">
                    <Typography
                      variant="h5"
                      style={{ padding: "0 0 30px 0", textAlign: "center" }}
                    >
                      Media
                    </Typography>
                    <div className="textfiled-row">
                      <label>Your Business Video(Optional)</label>
                      <Field
                        className="textfiled"
                        name="video"
                        placeholder="ex: https://youtu.be/lY2yjAdbvdQ"
                        value={values.video}
                        as={TextField}
                        onChange={handleChange}
                        error={touched.video && Boolean(errors.video)}
                        helperText={touched.video && errors.video}
                      />
                    </div>
                    <div className="textfiled-row">
                      <label>Images</label>
                      <MultiFileUpload
                        onUpload={handleUpload}
                        files={getFiles}
                      />
                    </div>

                    <div className="textfiled-row">
                      <label>Upload Business Logo</label>
                      <Box
                        {...getRootProps({ className: "dropzone" })}
                        sx={banner.length ? { height: 150 } : {}}
                        style={{
                          border: "2px dashed #41414185",
                          borderRadius: "5px",
                          width: "350px",
                          margin: "10px 0",
                        }}
                      >
                        <input {...getInputProps()} />
                        {singleFile ? (
                          <img
                            className="single-file-image"
                            src={singleFile}
                            width="100px"
                            height="100px"
                          />
                        ) : (
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            py="50px"
                          >
                            <FileUploadIcon />
                            <span>Choose a file or drag and drop it here</span>
                          </Box>
                        )}
                      </Box>
                    </div>
                  </Box>
                  <Box className="addListingBox">
                    <Button
                      fullWidth
                      className="save-btn"
                      size="large"
                      type="submit"
                      variant="contained"
                      // onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </div>

      {/* {window.location.pathname === "/add-listing" ? <Footer /> : ""} */}
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
