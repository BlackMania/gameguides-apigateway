var express = require('express');
var app = express();
var router = require('./router/router');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("GameGuides Api Gateway")
})

app.use(router);

console.log("GameGuides Simple Api Gateway");

app.listen(3000);
