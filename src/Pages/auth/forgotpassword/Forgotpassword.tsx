import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Stack,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
// components
import { useFormik } from "formik";
import * as yup from "yup";

import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../LandingPage/header";
import Footer from "../../LandingPage/footer";
import axios from "axios";
import Requests from "../../../services/Request";
import { toast } from "react-toastify";
// ----------------------------------------------------------------------

const ForgotPassword = () => {
  const navigate = useNavigate();
  const requestApiData = new Requests();
  const [isLoading, setIsLogin] = useState(false);

  const initialValues = {
    email: "",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const Adddata = async (values: any) => {
    try {
      const result = await requestApiData.forgotPassword(values);

      if (result && result.status === 200) {
        toast.success(result.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        // alert(result.data.message);
        // navigate("/reset-password");
      } else {
        alert("Please provide a valid Email");
      }
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      toast.error("An error occurred. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
    }
  };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      Adddata(values);
    },
  });

  return (
    <Box width="100%">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          padding: "112px 0",
        }}
        className="loginbg"
      >
        <Box className="loginBox">
          <Typography
            variant="h5"
            style={{ padding: "0 0 30px 0", textAlign: "center" }}
          >
            Forgot Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3} mb={2}>
              <label>Email</label>
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
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
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={!!isLoading}
            >
              {isLoading ? <CircularProgress /> : "Forget Password"}
            </Button>
          </form>
        </Box>
      </div>
      <Footer />
    </Box>
  );
};
export default ForgotPassword;
