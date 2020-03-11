var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../controllers/requestAuthenticator')

const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:8081';
const api = apiAdapter(BASE_URL);

router.get('/gg/supportedgames', requestAuthenticator, (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong")
            console.log(error)
        })
});

router.get('/gg/lol/guides', requestAuthenticator, (req, res) => {
    api.get(req.path + '?size=10&page=0').then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong")
            console.log(error)
        })
});

module.exports = router