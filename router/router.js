var express = require('express');
var router = express.Router();
var lolChampService = require('./leagueoflegends/lolChampService');
var lolVersionService = require('./leagueoflegends/lolVersionService');
var lolResourceService = require('./leagueoflegends/lolResourceService');
var gameguidesService = require('./gameguidesService');
var accountService = require('./accountService');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next()
});

router.use(lolVersionService);
router.use(lolResourceService);
router.use(lolChampService);

router.use(gameguidesService);
router.use(accountService);

module.exports = router;