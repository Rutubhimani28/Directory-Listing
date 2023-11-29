import axios from 'axios';
import Api from "./api"

export default class Requests {
    signUpRequest(values) {
        return axios({
            method: 'POST',
            url: `${Api.signupUser}`,
            values
        })
    }

    loginRequest(data) {
        return axios({
            method: 'POST',
            url: `${Api.loginUser}`,
            data
        })
    }

    forgotPassword(data) {
        return axios({
            method: 'POST',
            url: `${Api.forgotPassword}`,
            data
            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }

    resetPassword(data) {
        return axios({
            method: 'POST',
            url: `${Api.resetPassword}`,
            data
            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            // body : JSON.parse()
        })
    }
    addListingUser(data) {
        return axios({
            method: 'POST',
            url: `${Api.addListing}`,
            data
           
        })
    }

}