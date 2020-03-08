var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator')

const apiAdapter = require('../apiAdapter');

const BASE_URL = 'https://euw1.api.riotgames.com/lol/platform/v3';
const PREFIX = "/lol";
const api = apiAdapter(BASE_URL, { 'X-Riot-Token': 'RGAPI-2457eec9-1f4b-49be-8ed0-df94e6c9a8b7'});

router.get('/lol/champion-rotations', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX, "");
    api.get(correctedPath).then(resp => {
        res.send(resp.data);
    })
.catch(error => {
    res.send("Something went wrong")
    console.log(error.data)
})
});


module.exports = router

