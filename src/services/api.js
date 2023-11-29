import { baseUrl } from "../constant";

export default {
  loginUser: `${baseUrl}api/auth/login`,
  signupUser: `${baseUrl}signUpRequest`,
  forgotPassword: `${baseUrl}api/auth/forgotPassword`,
  resetPassword: `${baseUrl}api/auth/resetForgottenPassword`,
  profileImage: `${baseUrl}api/user/saveProfileImage`,
};
