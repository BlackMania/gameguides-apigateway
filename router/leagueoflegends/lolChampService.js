var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator')

const apiAdapter = require('../apiAdapter');

const BASE_URL = 'https://euw1.api.riotgames.com/lol/platform/v3';
const PREFIX = "/lol";
const api = apiAdapter(BASE_URL, { 'X-Riot-Token': 'RGAPI-c5e69a48-ce9e-4e68-ae63-9fe23d4e36e2'});

router.get('/lol/champion-rotations', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX, "");
    api.get(correctedPath).then(resp => {
        res.send(resp.data);
    })
.catch(error => {
    res.send("Something went wrong")
    console.log(error.message)
})
});


module.exports = router

