var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator');
var request = require('request');

const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/';

const PREFIX = "/lol";

router.get('/lol/img/champion/:name', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX, "");
    let url = BASE_URL + req.app.locals.leagueApiVersion + correctedPath;

    request(url).pipe(res);
});

router.get('/lol/img/champion/splash/:name', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX + '/', "");
    let url = BASE_URL + correctedPath;
    console.log(url);
    request(url).pipe(res);
});

module.exports = router
