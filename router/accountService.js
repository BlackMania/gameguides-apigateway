var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../controllers/requestAuthenticator')

const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:8081';
const api = apiAdapter(BASE_URL, { 'Content-Type': 'application/json'});

router.post('/gg/auth/login', requestAuthenticator, (req, res) => {
    console.log(req);
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        })
});

router.post('/gg/auth/register', requestAuthenticator, (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        })
});

module.exports = router;