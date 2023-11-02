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
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const Social = () => {
  const socialValidationSchema = Yup.object().shape({
    instagram: Yup.string(),
    facebook: Yup.string(),
    twitter: Yup.string(),
    linkedin: Yup.string(),
  });

  const socialInitialValues = {
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  };

  const handleSocialSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={socialInitialValues}
        validationSchema={socialValidationSchema}
        onSubmit={handleSocialSubmit}
      >
        {() => (
          <Form>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={8}>
                <Card>
                  <div className="profile-contant">
                    <h2>Social Network</h2>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Instagram</label>
                          <Field
                            type="text"
                            name="instagram"
                            className="textfiled"
                            placeholder="Enter Instagram Link"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="instagram"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Facebook</label>
                          <Field
                            type="text"
                            name="facebook"
                            className="textfiled"
                            placeholder="Enter Facebook Link"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="facebook"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Twitter</label>
                          <Field
                            type="text"
                            name="twitter"
                            className="textfiled"
                            placeholder="Enter Twitter Link"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="twitter"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Linkedin</label>
                          <Field
                            type="text"
                            name="linkedin"
                            className="textfiled"
                            placeholder="Enter LinkedIn Link"
                            as={TextField}
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="linkedin"
                            component="div"
                            className="error"
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
              <Grid item xs={12} md={4}></Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Social;
