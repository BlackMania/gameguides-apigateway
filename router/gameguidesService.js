var express = require('express');
var router = express.Router();
var requestAuthenticator = require('../controllers/requestAuthenticator')

const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:8081';
let api = apiAdapter(BASE_URL);

router.get('/gg/supportedgames', requestAuthenticator, (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        })
});

router.get('/gg/lol/guides', requestAuthenticator, (req, res) => {
    let size = parseInt(req.query.size);
    let page = parseInt(req.query.page);
    let queryString = "?page=" + page + "&size=" + size;
    api.get(req.path + queryString).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        })
});

router.get('/gg/lol/guides/:id', requestAuthenticator, (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        })
});

router.put('/gg/lol/guides/update/:id', requestAuthenticator, (req, res) => {
    api = apiAdapter(BASE_URL, {"Authorization": req.header("Authorization")});
    api.put(req.path, req.body).then(resp => {
        res.send("Your changes are successfully saved.");
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        });
    api = apiAdapter(BASE_URL);
});

router.delete('/gg/lol/guides/delete/:id', requestAuthenticator, (req, res) => {
    api = apiAdapter(BASE_URL, {"Authorization": req.header("Authorization")});
    api.delete(req.path).then(resp => {
        res.send("Your successfully deleted the guide.");
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        });
    api = apiAdapter(BASE_URL);
});

router.post('/gg/lol/guides/add', requestAuthenticator, (req, res) => {
    api = apiAdapter(BASE_URL, {"Authorization": req.header("Authorization")});
    api.post(req.path, req.body).then(resp => {
        res.send("Your guide has been added.");
    })
        .catch(error => {
            res.send("Something went wrong");
            console.log(error)
        });
    api = apiAdapter(BASE_URL);
});

module.exports = router;