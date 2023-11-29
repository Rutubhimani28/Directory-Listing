import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import Header from "../../LandingPage/header";
import Footer from "../../LandingPage/footer";
import Requests from "../../../services/Request";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const requestApiData = new Requests();
  const [showPassword, setShowPassword] = useState({
    password: false,
    ConfirmPassword: false,
  });

  const handleClickShowPassword = (field: any) => {
    setShowPassword((prevShowPassword: any) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    userName: yup.string().required("User Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), ""], "Password does not match"),
  });

  const handleSubmit = async (values: any) => {
    try {
      if (
        !values.userName ||
        !values.email ||
        !values.password ||
        !values.confirmPassword
      ) {
        // Handle undefined values
        console.error("Email or password is undefined");
        return;
      }

      const response = await requestApiData.signUpRequest(values);
      // const response = await axios.post(
      //   "http://localhost:5000/api/auth/signup",
      //   values
      // );
      if (response.status === 200) {
        navigate("/login");
        toast.success(response.data.message);
      } else {
        console.error("Signup failed:", response.data);
      }
    } catch (error: any) {
      const errorkey = Object.keys(error.response.data.error)[0];
      toast.error(error.response.data.error[errorkey]);
      console.error("Error during signup:", error);
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
            Register
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
                    <label>userName</label>
                    <Field
                      className="textfiled"
                      name="userName"
                      value={values.userName}
                      as={TextField}
                      onChange={handleChange}
                      error={touched.userName && errors.userName}
                      helperText={touched.userName && errors.userName}
                    />
                  </div>
                  <div className="textfiled-row" style={{ marginBottom: 0 }}>
                    <label>Email</label>
                    <Field
                      className="textfiled"
                      name="email"
                      value={values.email}
                      as={TextField}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </div>
                  <div className="textfiled-row" style={{ marginBottom: 0 }}>
                    <label>Password</label>
                    <Field
                      className="textfiled"
                      name="password"
                      type={showPassword.password ? "text" : "password"}
                      value={values.password}
                      as={TextField}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                handleClickShowPassword("password")
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
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
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
                  Signup
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
