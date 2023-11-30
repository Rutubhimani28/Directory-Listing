import axios from "axios";
import Api from "./api";

const Token = localStorage.getItem("user");
const authToken = JSON.parse(Token)?.token;

export default class Requests {
  signUpRequest(data) {
    return axios({
      method: "POST",
      url: `${Api.signupUser}`,
      data: data,
    });
  }

  loginRequest(data) {
    return axios({
      method: "POST",
      url: `${Api.loginUser}`,
      data,
    });
  }

  forgotPassword(data) {
    return axios({
      method: "POST",
      url: `${Api.forgotPassword}`,
      data,
      // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
    });
  }

  resetPassword(data) {
    return axios({
      method: "POST",
      url: `${Api.resetPassword}`,
      data,
    });
  }
  addListingUser(data) {
    return axios({
      method: "POST",
      url: `${Api.addListing}`,
      data,
      headers: { Authorization: `Bearer ${authToken}` },
    });
  }
  profileImage(data) {
    return axios({
      method: "POST",
      url: `${Api.profileImage}`,
      data,
      headers: { Authorization: `Bearer ${authToken}` },
      // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
      // body : JSON.parse()
    });
  }
}
