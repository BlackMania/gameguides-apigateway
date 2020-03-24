var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator');
var request = require('request');


const apiAdapter = require('../apiAdapter');

const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/';
const api = apiAdapter(BASE_URL);

const PREFIX = "/lol";

router.get('/lol/data/en_US/champion/:champion', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX, "");
    let url = req.app.locals.leagueApiVersion + correctedPath + ".json";

    api.get(url)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error.message)
        })
});
module.exports = router;
