import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
// components
import { useAuth } from "../../../hooks/auth";
import Header from "../../LandingPage/header";
import Footer from "../../LandingPage/footer";
import Requests from "../../../services/Request";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const requestApiData = new Requests();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLogin] = useState(false);
  const [auth, setAuth] = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      // Handle undefined values
      if (!values.email || !values.password) {
        console.error("Email or password is undefined");
        return;
      }

      const response = await requestApiData.loginRequest({
        emailOrUserName: values.email,
        password: values.password,
      });
      if (response.data.isMailSent === false) {
        // Display an alert if the email is not verified
        alert(response.data.message);
        return;
      }
      console.log(response, "response");

      setAuth({
        user: response.data.userData.userName,
        role: response.data.userData.role,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: response.data.userData.userName,
          role: response.data.userData.role,
        })
      );
      navigate("/dashboard");
      toast.success("Login Successfully.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      console.error("API request failed", error);
      toast.error("An error occurred. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
        <Box className="loginBox">
          <Typography
            variant="h5"
            style={{ padding: "0 0 30px 0", textAlign: "center" }}
          >
            Login
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }: any) => (
              <Form>
                <Stack spacing={3} mb={2}>
                  <div className="textfiled-row">
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
                  <div className="textfiled-row">
                    <label>Password</label>
                    <Field
                      className="textfiled"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      as={TextField}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
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
                  <Link to="/forgot-password">Forgot password?</Link>
                </Stack>
                <Button
                  fullWidth
                  className="save-btn"
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <div style={{ textAlign: "center", margin: "10px 0px" }}>
            Not registered yet?
            <Link to="/register" style={{ color: "blue", marginLeft: "5px" }}>
              Create an Account
            </Link>
          </div>
        </Box>
      </div>

      {/* <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={forgotOpen}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Forgotpassword />
          </Box>
        </Modal>
      </div> */}

      <Footer />
    </Box>
  );
};

export default Login;
