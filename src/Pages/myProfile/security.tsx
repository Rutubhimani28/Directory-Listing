import {
  Button,
  Card,
  Grid,
  TextField,
} from "@mui/material";
import {  Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const Security = () => {
  const [showPassword, setShowPassword] = useState({
    CurrentPassword: false,
    NewPassword: false,
    ConfirmPassword: false,
  });

  const handleClickShowPassword = (field: any) => {
    setShowPassword((prevShowPassword: any) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };
  const passwordValidationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is required"),
    newPassword: Yup.string()
      .required("New Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), ""], "Password does not match"),
  });

  const passwordInitialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handlePasswordSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      {" "}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Card style={{ marginTop: "20px" }}>
            <div className="profile-contant">
              <h2>Update Password</h2>
              <Formik
                initialValues={passwordInitialValues}
                validationSchema={passwordValidationSchema}
                onSubmit={handlePasswordSubmit}
              >
                {({ values, handleChange, errors, touched }) => (
                  <Form>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Current Password</label>
                          <TextField
                            className="textfiled"
                            name="currentPassword"
                            placeholder="Current Password"
                            type={
                              showPassword.CurrentPassword ? "text" : "password"
                            }
                            value={values.currentPassword}
                            onChange={handleChange}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      handleClickShowPassword("CurrentPassword")
                                    }
                                    edge="end"
                                  >
                                    {showPassword.CurrentPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.currentPassword &&
                              Boolean(errors.currentPassword)
                            }
                            helperText={
                              touched.currentPassword && errors.currentPassword
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>New Password</label>
                          <TextField
                            className="textfiled"
                            name="newPassword"
                            placeholder="New Password"
                            type={
                              showPassword.NewPassword ? "text" : "password"
                            }
                            value={values.newPassword}
                            onChange={handleChange}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      handleClickShowPassword("NewPassword")
                                    }
                                    edge="end"
                                  >
                                    {showPassword.NewPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.newPassword && Boolean(errors.newPassword)
                            }
                            helperText={
                              touched.newPassword && errors.newPassword
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="textfiled-row">
                          <label>Confirm Password</label>
                          <TextField
                            className="textfiled"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type={
                              showPassword.ConfirmPassword ? "text" : "password"
                            }
                            value={values.confirmPassword}
                            onChange={handleChange}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      handleClickShowPassword("ConfirmPassword")
                                    }
                                    edge="end"
                                  >
                                    {showPassword.ConfirmPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.confirmPassword &&
                              Boolean(errors.confirmPassword)
                            }
                            helperText={
                              touched.confirmPassword && errors.confirmPassword
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: "end" }}>
                        <Button
                          className="save-btn "
                          variant="contained"
                          type="submit"
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </div>
  );
};

export default Security;
