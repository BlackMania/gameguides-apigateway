var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../controllers/requestAuthenticator')

const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:8082';
const PREFIX = "/gg";
const api = apiAdapter(BASE_URL);

router.get('/gg/supportedgames', requestAuthenticator, (req, res) => {
    let adjustedPath = req.path.replace(PREFIX, "");
    api.get(adjustedPath).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong")
            console.log(error)
        })
});

module.exports = router