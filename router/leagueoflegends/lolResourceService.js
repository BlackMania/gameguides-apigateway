var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator')
var axios = require('axios');

const apiAdapter = require('../apiAdapter');

const gatewayService = axios.create({
    baseURL: 'http://localhost:3000',
});

var version = "";

gatewayService.get('/lol/versions')
        .then(response => {
            version = response.data[0]
        });


const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/' +  this.version;
const PREFIX = "/lol";
const api = apiAdapter(BASE_URL);

router.get('/lol/test', requestAuthenticator, (req, res) => {
    console.log(BASE_URL);
    let correctedPath = req.path.replace(PREFIX, "") + '.json';
    api.get(correctedPath).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong")
            console.log(error.data)
        })
});

module.exports = router
