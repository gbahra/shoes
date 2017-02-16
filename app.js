var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

app.listen(port, function() {
  console.log("The server is on and listening on port " + port);
})

mongoose.connect('mongodb://localhost/shoes', function() {
  console.log('database connected.')
})

