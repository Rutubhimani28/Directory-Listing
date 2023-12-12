import axios from "axios";
import Api from "./api";

const Token = localStorage.getItem("user");
const authToken = JSON.parse(Token)?.token;

export default class Requests {
  singleImage(formData) {
    throw new Error("Method not implemented.");
  }
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
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
  profileImage(data) {
    return axios({
      method: "POST",
      url: `${Api.profileImage}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
      // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
      // body : JSON.parse()
    });
  }
  getAllCity(data) {
    return axios({
      method: "GET",
      url: `${Api.getCity}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
  getAllCategory(data) {
    return axios({
      method: "GET",
      url: `${Api.getCategory}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
  getAllMyListing(data) {
    return axios({
      method: "GET",
      url: `${Api.getMyListing}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
  postMultiImages(data) {
    return axios({
      method: "POST",
      url: `${Api.multiImages}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
  postSingleImages(data) {
    return axios({
      method: "POST",
      url: `${Api.singleImage}`,
      data,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token
          }`,
      },
    });
  }
}
