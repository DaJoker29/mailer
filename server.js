var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello something');
});

var server = app.listen(3000, function() {
    console.log('Express running at %s:%s', server.address().host, server.address().port);
});