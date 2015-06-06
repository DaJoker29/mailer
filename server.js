
// Server config
var express = require('express');
var app = express();
var config = require('./config.json');

// Middleware config
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Mail config
var mail = require('nodemailer');
var transporter = mail.createTransport(config);

// Settings
app.use(bodyParser.json());
app.use(morgan('combined'));

app.post('/', function (req, res) {
    transporter.sendMail({
        from: config.auth.user,
        to: req.body.to,
        subject: 'AUTOMATED MESSAGE: ' + req.body.subject,
        text: req.body.message
    }, function ( err, data ) {
        if ( err ) {
            res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});

var server = app.listen(3000, function() {
    console.log('Express running on port %s', server.address().host, server.address().port);
});