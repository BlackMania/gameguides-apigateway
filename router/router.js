var express = require('express');
var router = express.Router();
var lolService = require('./lolChampService');
var gameguidesService = require('./gameguidesService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(lolService)
router.use(gameguidesService)

module.exports = router