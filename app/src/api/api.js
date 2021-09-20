import axios from "axios";

const config = {
    url: process.env.VUE_APP_URL_API,
    try: 3,
    timeout: 1000 * 60,
}

const getHeaders = () => {
    const headers = {
        "x-token": sessionStorage.getItem("token")
    }
    return headers;
}

export const request = (method, path, data = null) => {
    const url = config.url + path;
    return axios[method](url, data, { headers: getHeaders(), timeout: config.timeout });
}


