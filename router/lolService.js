var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../controllers/requestAuthenticator')

const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:80';
const api = apiAdapter(BASE_URL);

router.get('/test', requestAuthenticator, (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
});

module.exports = router

