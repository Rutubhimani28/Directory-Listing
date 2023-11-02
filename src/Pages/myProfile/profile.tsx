import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Input,
  Box,
  TextField,
  OutlinedInput,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";

const Profile = () => {
  const avtar = require("../../images/profile.jpg");

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const validationSchema = Yup.object().shape({
    fastName: Yup.string().required("Fast Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string(),
    aboutYou: Yup.string(),
  });

  const initialValues = {
    fastName: "",
    lastName: "",
    email: "admin@gmail.com",
    phone: "",
    address: "",
    aboutYou: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {" "}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={4}>
                <div>
                  <Card className="profile-card">
                    <div>
                      <img
                        src={previewImage ? previewImage : avtar}
                        alt="Profile Preview"
                        className="avtar-img"
                      />

                      <div style={{ margin: "10px" }}>
                        <label
                          htmlFor="profileImage"
                          style={{ fontWeight: "bold" }}
                        >
                          {" "}
                          Upload A Picture{" "}
                        </label>
                        <div>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={handleImageChange}
                          />
                          <label htmlFor="profileImage">
                            <Button
                              style={{ margin: "10px 0" }}
                              component="span"
                              variant="outlined"
                              color="primary"
                            >
                              Upload
                            </Button>
                            <Button
                              variant="outlined"
                              color="error"
                              style={{
                                display: "inline",
                                fontSize: "15px",
                                marginLeft: "10px",
                              }}
                              onClick={() => setPreviewImage(null)}
                            >
                              Clear
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="plan-details">
                      <p>Your Current Plan</p>
                      <h2 className="plan-title">Platinum Package</h2>
                      <p>Next Payment: 1/11/2024</p>
                      <button
                        className="sendBtn"
                        style={{ display: "inline", fontSize: "15px" }}
                      >
                        Change
                      </button>
                    </div>
                  </Card>
                  <Card style={{ marginTop: "20px" }}>
                    <div className="profile-contant">
                      <h2>Your Profile</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form Ipsum available.
                      </p>
                    </div>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card>
                  <div className="profile-contant">
                    <h2>About You</h2>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12} md={6}>
                        <div className="textfiled-row">
                          <label>Fast Name</label>
                          <Field
                            type="text"
                            name="fastName"
                            className="textfiled"
                            placeholder="Enter Fast Name"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="fastName"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div className="textfiled-row">
                          <label>Last Name</label>
                          <Field
                            type="text"
                            name="lastName"
                            className="textfiled"
                            placeholder="Enter Last Name"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Email</label>
                          <Field
                            type="text"
                            name="email"
                            className="textfiled"
                            placeholder="admin@gmail.com"
                            as={TextField}
                            variant="outlined"
                            disabled
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Phone</label>
                          <Field
                            type="text"
                            name="phone"
                            className="textfiled"
                            placeholder="Enter Phone"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Address</label>
                          <Field
                            name="address"
                            className="textfiled"
                            placeholder="I am a web designer."
                            as={TextField}
                            multiline
                            rows={3}
                            variant="outlined"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>About You</label>
                          <Field
                            name="aboutYou"
                            className="textfiled"
                            placeholder="I am a web designer."
                            as={TextField}
                            multiline
                            rows={3}
                            variant="outlined"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: "end" }}>
                        <Button
                          className="save-btn"
                          variant="contained"
                          type="submit"
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
