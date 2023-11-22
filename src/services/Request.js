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

    forgotPassword() {
        return axios({
            method: 'POST',
            url: `${Api.forgotPassword}`,

            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }

    resetPassword() {
        return axios({
            method: 'POST',
            url: `${Api.resetPassword}`,

            // headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            // body : JSON.parse()
        })
    }

}