var express = require('express');
var router = express.Router();
var lolService = require('./lolService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(lolService)

module.exports = router