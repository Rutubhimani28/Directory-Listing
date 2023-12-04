

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Header from "../../LandingPage/header";
import Footer from "../../LandingPage/footer";
import Requests from "../../../services/Request";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const requestApiData = new Requests();
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    ConfirmPassword: false,
  });

  const handleClickShowPassword = (field: any) => {
    setShowPassword((prevShowPassword: any) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
    resetPswdToken: token || "",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    newPassword: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("newPassword"), ""], "Password does not match"),
  });

  const handleSubmit = async (values: any) => {
    try {
      if (!values.resetPswdToken || !values.newPassword) {
        // Handle undefined values
        console.error("New Password is undefined");
        return;
      }
      const result = await requestApiData.resetPassword({
        resetPswdToken: values.resetPswdToken,
        newPassword: values.newPassword,
      });
      if (result && result.status === 200) {
        toast.success("Password updated successfully.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("An error occurred. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
    }
  };

  return (
    <Box width="100%">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          padding: "90px 0",
        }}
        className="loginbg"
      >
        <Box className="loginBox">
          <Typography
            variant="h5"
            style={{ padding: "0 0 30px 0", textAlign: "center" }}
          >
            Reset Password
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <Stack spacing={3} mb={2}>
                  <div className="textfiled-row" style={{ marginBottom: 0 }}>
                    <label>Password</label>
                    {/* <Field
                      className="textfiled"
                      name="newPassword"
                      type={showPassword.password ? "text" : "password"}
                      value={values.newPassword}
                      as={TextField}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                handleClickShowPassword("newPassword")
                              }
                              edge="end"
                            >
                              {showPassword.password ? (
                                <RemoveRedEyeIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={touched.newPassword && Boolean(errors.newPassword)}
                      helperText={touched.newPassword && errors.newPassword}
                    /> */}
                    <Field
                      className="textfiled"
                      name="newPassword"
                      type={showPassword.newPassword ? "text" : "password"}
                      value={values.newPassword}
                      as={TextField}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                handleClickShowPassword("newPassword")
                              }
                              edge="end"
                            >
                              {showPassword.newPassword ? (
                                <RemoveRedEyeIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={touched.newPassword && Boolean(errors.newPassword)}
                      helperText={touched.newPassword && errors.newPassword}
                    />
                  </div>
                  <div className="textfiled-row" style={{ marginBottom: 0 }}>
                    <label>Confirm Password</label>
                    <Field
                      className="textfiled"
                      name="confirmPassword"
                      type={showPassword.ConfirmPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      as={TextField}
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
                                <RemoveRedEyeIcon />
                              ) : (
                                <VisibilityOffIcon />
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
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <FormControlLabel
                    control={<Checkbox name="remember" />}
                    label="Remember me"
                  />
                </Stack>
                <Button
                  className="save-btn"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>

      <Footer />
    </Box>
  );
};

export default Signup;
