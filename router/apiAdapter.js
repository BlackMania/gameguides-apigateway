const axios = require('axios');

module.exports = (baseURL, customHeader) => {
    return axios.create({
        baseURL: baseURL,
        headers: customHeader || {}
    });
};