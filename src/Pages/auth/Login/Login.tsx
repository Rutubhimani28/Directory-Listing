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
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
// components
import { useAuth } from "../../../hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  // localStorage.setItem("email", "admin@gmail.com");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLogin] = useState(false);
  const [auth, setAuth] = useAuth();
  console.log(auth, "PPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
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
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          user: response.data.userData.userName,
          role: response.data.userData.role,
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
    <div>
      {" "}
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
              <Link to="/reset-password">Forgot password?</Link>
            </Stack>
            <Button
              fullWidth
              className="save-btn"
              size="large"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              {/* {isLoading ? <CircularProgress size={24} /> : "Login"} */}
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
