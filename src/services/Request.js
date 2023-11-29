import axios from "axios";
import Api from "./api";

export default class Requests {
    signUpRequest(data) {
        console.log(data, "OOOOOOOOOOOOOOOOOOOO")
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
            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            // body : JSON.parse()
        });
    }
    addListingUser(data) {
        return axios({
            method: "POST",
            url: `${Api.addListing}`,
            data,
        });
    }

    profileImage(data) {
        return axios({
            method: "POST",
            url: `${Api.profileImage}`,
            data,
            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            // body : JSON.parse()
        });
    }
}
