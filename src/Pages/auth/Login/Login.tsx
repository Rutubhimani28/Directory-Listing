import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@mui/material";
// components
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Login = () => {
  const navigate = useNavigate();
  localStorage.setItem("email", "admin@gmail.com");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLogin] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const handleSubmit = (values: any) => {
    if (values.email === "admin@gmail.com" && values.password === "Admin@123") {
      navigate("/");
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
              <label>Email</label>
              <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <label>Password</label>
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
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
    </div>
  );
};

export default Login;
