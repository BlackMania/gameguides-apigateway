var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../../controllers/requestAuthenticator')

const apiAdapter = require('../apiAdapter');

const BASE_URL = 'https://ddragon.leagueoflegends.com/api';
const PREFIX = "/lol";
const api = apiAdapter(BASE_URL);

router.get('/lol/versions', requestAuthenticator, (req, res) => {
    let correctedPath = req.path.replace(PREFIX, "") + '.json';
    api.get(correctedPath).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send(error)
            console.log(error.data)
        })
});

module.exports = router
