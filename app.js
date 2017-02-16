var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var router = require('./config/routes');
var ejs = require('express-ejs-layouts');
var bodyParser = require('bod-parser');
var methodOverride = require('method-override');




app.listen(port, function() {
  console.log("The server is on and listening on port " + port);
})

mongoose.connect('mongodb://localhost/shoes', function() {
  console.log('database connected.')
})


app.use(bodyParser.urlencoded({ extended: false }));

// body parser for json data
app.use(bodyParser.json());

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// use express layouts middleware too
app.use(layouts);
app.use(routes);
