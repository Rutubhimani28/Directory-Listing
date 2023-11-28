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
  Modal,
  Box,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
// components
import Register from "../register/RegisterForm";
import { useAuth } from "../../../hooks/auth";
import Forgotpassword from "../forgotpassword/Forgotpassword";
import Header from "../../LandingPage/header";
import Login from "./login";
import Footer from "../../LandingPage/footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const Index = (props: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const [forgotOpen, setForgotOpen] = useState(false);
  const handleOpen = () => {
    setForgotOpen(true);
  };
  const handleClose = () => {
    setForgotOpen(false);
  };

  function CustomTabPanel(props: any) {
    const { children, tabValue, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={tabValue !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {tabValue === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    tabValue: PropTypes.number.isRequired,
  };

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  // -----------  validationSchema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    // setIsLoading(true);
    try {
      if (!values.email || !values.password) {
        // Handle undefined values
        console.error("Email or password is undefined");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          emailOrUserName: values.email,
          password: values.password,
        }
      );
      console.log(response, "LLLLLLLLLLLLLLLLL");
      setAuth({
        user: response.data.userData.userName,
        role: response.data.userData.role,
        token: response.data.authToken,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          user: response.data.userData.userName,
          role: response.data.userData.role,
          token: response.data.authToken,
        })
      );
      if (response.status === 200) {
        navigate("/dashboard");
      }
      // ... (rest of the code)
    } catch (error) {
      console.error("API request failed", error);
    } finally {
      // setIsLoading(false);
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
          <Box>
            <Tabs
              className="loginTab"
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel tabValue={tabValue} index={0}>
            <Login />
          </CustomTabPanel>
          <CustomTabPanel tabValue={tabValue} index={1}>
            <Register />
          </CustomTabPanel>
        </Box>
      </div>
      <div>
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
      </div>
      <Footer />
    </Box>
  );
};

export default Index;
