// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// // @mui
// import {
//   Stack,
//   Button,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Box,
//   Typography,
// } from "@mui/material";
// // components
// import { useFormik } from "formik";
// import * as yup from "yup";
// import CircularProgress from "@mui/material/CircularProgress";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import Footer from "../../LandingPage/footer";
// import Header from "../../LandingPage/header";
// import axios from "axios";
// // ----------------------------------------------------------------------

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const { token } = useParams();
//   console.log(token, "KKKKKKKKKKKKKKKKKKKKKK");
//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     confirmPassword: false,
//   });
//   const handleClickShowPassword = (field: any) => {
//     setShowPassword((prevShowPassword: any) => ({
//       ...prevShowPassword,
//       [field]: !prevShowPassword[field],
//     }));
//   };
//   const [isLoading, setIsLogin] = useState(false);

//   const initialValues = {
//     token: token || "",
//     newPassword: "",
//     confirmPassword: "",
//   };

//   const validationSchema = yup.object({
//     newPassword: yup
//       .string()
//       .required("Password is required")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
//         "Must Contain minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//       ),
//     confirmPassword: yup
//       .string()
//       .required("confirmPassword is required")
//       .oneOf([yup.ref("newPassword"), ""], "Password does not match"),
//   });

//   const Adddata = async (values: any) => {
//     try {
//       setIsLogin(true);
//       const result = await axios.post(
//         "http://localhost:5000/api/auth/resetForgottenPassword",
//         values
//       );
//       console.log(result, "KKKKKKKKKKKKK");
//       if (result && result.status === 200) {
//         alert("Password updated successfully");
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Error resetting password:", error);
//       alert("An error occurred. Please try again.");
//     } finally {
//       setIsLogin(false);
//     }
//   };

//   // formik
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values: any) => {
//       console.log(values, "values");
//       Adddata(values);
//     },
//   });

//   return (
//     <Box width="100%">
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           // alignItems: "center",
//           padding: "90px 0",
//         }}
//         className="loginbg"
//       >
//         <Box className="loginBox">
//           <Typography
//             variant="h5"
//             style={{ padding: "0 0 30px 0", textAlign: "center" }}
//           >
//             Reset Password
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Stack spacing={3} mb={2}>
//               <label>newPassword</label>
//               <TextField
//                 name="password"
//                 type={showPassword.password ? "text" : "password"}
//                 value={values.newPassword}
//                 onChange={handleChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => handleClickShowPassword("password")}
//                         edge="end"
//                       >
//                         {showPassword.password ? (
//                           <RemoveRedEyeIcon />
//                         ) : (
//                           <VisibilityOffIcon />
//                         )}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 error={touched.newPassword && Boolean(errors.newPassword)}
//                 helperText={touched.newPassword && errors.newPassword}
//               />
//               <label>Confirm Password</label>
//               <TextField
//                 name="confirmPassword"
//                 type={showPassword?.confirmPassword ? "text" : "password"}
//                 value={values.confirmPassword}
//                 onChange={handleChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() =>
//                           handleClickShowPassword("confirmPassword")
//                         }
//                         edge="end"
//                       >
//                         {showPassword?.confirmPassword ? (
//                           <RemoveRedEyeIcon />
//                         ) : (
//                           <VisibilityOffIcon />
//                         )}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 error={
//                   touched.confirmPassword && Boolean(errors.confirmPassword)
//                 }
//                 helperText={touched.confirmPassword && errors.confirmPassword}
//               />
//             </Stack>
//             <Stack
//               direction="row"
//               alignItems="center"
//               justifyContent="space-between"
//               sx={{ my: 2 }}
//             >
//               <FormControlLabel
//                 control={<Checkbox name="remember" />}
//                 label="Remember me"
//               />
//             </Stack>
//             <Button
//               fullWidth
//               size="large"
//               type="submit"
//               variant="contained"
//               disabled={!!isLoading}
//             >
//               {isLoading ? <CircularProgress /> : "Reset Password"}
//             </Button>
//           </form>
//         </Box>
//       </div>
//       <Footer />
//     </Box>
//   );
// };
// export default ResetPassword;

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const Signup = () => {
  const navigate = useNavigate();
  const { token } = useParams();
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
    console.log(values, "valuesss");
    try {
      if (!values.resetPswdToken || !values.newPassword) {
        // Handle undefined values
        console.error("New Password is undefined");
        return;
      }
      const result = await axios.post(
        "http://localhost:5000/api/auth/resetForgottenPassword",
        // values
        {
          resetPswdToken: values.resetPswdToken,
          newPassword: values.newPassword,
        }
      );
      console.log(result, "resultKKKKKKKKKKKKK");
      if (result && result.status === 200) {
        alert("Password updated successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred. Please try again.");
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
