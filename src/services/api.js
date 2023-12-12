import { baseUrl } from "../constant";

export default {
  loginUser: `${baseUrl}api/auth/login`,
  signupUser: `${baseUrl}api/auth/signup`,
  forgotPassword: `${baseUrl}api/auth/forgotPassword`,
  resetPassword: `${baseUrl}api/auth/resetForgottenPassword`,
  profileImage: `${baseUrl}api/user/saveProfileImage`,
  addListing: `${baseUrl}api/listing/add`,
  getCity: `${baseUrl}api/city/allCity`,
  getCategory: `${baseUrl}api/category/allCategory`,
  getMyListing: `${baseUrl}api/listing/myListing`,
  multiImages: `${baseUrl}api/upload/multiple`,
  singleImage: `${baseUrl}api/upload/single`,
};
