import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Stack,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// components
import { useFormik } from "formik";
import * as yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// ----------------------------------------------------------------------

export default function Forgotpassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleClickShowPassword = (field: any) => {
    setShowPassword((prevShowPassword: any) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };
  const [isLoading, setIsLogin] = useState(false);

  const initialValues = {
    token: "",
    password: "",
    confirmPassword: "",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup
      .string()
      .required("confirmPassword is required")
      .oneOf([yup.ref("password"), ""], "Password does not match"),
  });

  const Adddata = async (values: any) => {
    // setIsLogin(true);
    // const data = { ...values, token };

    // const result = await apiput('/api/auth/forgotPassword', data);
    // if (result && result.status === 200) {
    //   alert('password updated successfully');
    //   navigate('/login');
    // }
    // setIsLogin(false);
    console.log(values);
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
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} mb={2}>
          <label>Password</label>
          <TextField
            name="password"
            type={showPassword.password ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleClickShowPassword("password")}
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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <label>Confirm Password</label>
          <TextField
            name="confirmPassword"
            type={showPassword?.confirmPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleClickShowPassword("confirmPassword")}
                    edge="end"
                  >
                    {showPassword?.confirmPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
    </>
  );
}
