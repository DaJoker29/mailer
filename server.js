
// Server config
var express = require('express');
var app = express();
var config = require('./config.json');

// Middleware config
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

// Mail config
var mail = require('nodemailer');
var transporter = mail.createTransport(config);

// Settings
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

function options ( req, type ) {
    var obj = {
        from: config.auth.user,
        subject: 'Automated Message: '
    };

    if ( type === 'POST' ) {
        obj.to = req.body.to;
        obj.subject += req.body.subject;
        obj.text = req.body.message;
    } else if ( type === 'GET') {
        obj.to = req.query.to;
        obj.subject += req.query.subject;
        obj.text = req.query.message;    }

    return obj;
}

app.get('/mailer/', function( req, res ) {
    var settings = options( req, 'GET');

    console.log(settings);
    transporter.sendMail(settings, function ( err ) {
        if ( err ) {
            res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});

app.post('/mailer/', function (req, res) {
    var settings = options( req, 'POST');

    console.log(settings);
    transporter.sendMail(settings, function ( err ) {
        if ( err ) {
            res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});

var server = app.listen(3000, function() {
    console.log('Express running on port %s', server.address().port);
});
