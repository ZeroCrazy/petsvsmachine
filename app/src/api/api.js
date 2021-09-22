import axios from "axios";

const config = {
    url: process.env.VUE_APP_URL_API,
    try: 3,
    timeout: 1000 * 60,
}

const getHeaders = () => {
    const headers = {
        "x-token": localStorage.getItem("idToken")
    }
    return headers;
}

export const request = (method, path, data = null) => {
    const url = config.url + path;
    switch (method) {
        case 'get':
            return axios.get(url, { headers: getHeaders(), timeout: config.timeout });
        case 'post':
            return axios.post(url, data, { headers: getHeaders(), timeout: config.timeout });
        case 'put':
            return axios.put(url, data, { headers: getHeaders(), timeout: config.timeout });
        case 'delete':
            return axios.delete(url, data, { headers: getHeaders(), timeout: config.timeout });
        default:
            return null;
    }
}


