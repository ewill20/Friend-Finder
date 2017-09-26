// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//====================================================================//
// Configuration for Express //
var app = express();
var PORT = process.env.PORT || 3000;

// Body Parser is used for the server to interpret the data //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//===================================================================//
// Routing, pointing for the server to a series of route files //
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//===================================================================//
// PORT Listener //
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
