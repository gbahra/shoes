var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var router = require('./config/routes');
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var User= require("./models/user");

app.use(cookieParser());
app.listen(port, function() {
  console.log("The server is on and listening on port " + port);
})

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'spartasupersecretkey'
}));


app.use(flash());

app.use(function(req, res, next){
    // res.locals will be available in every template
    res.locals.errors = req.flash('error');
    console.log(res.locals.errors);
    next();
});

mongoose.connect('mongodb://localhost/shoes', function() {
  console.log('database connected.')
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    console.log(method)
    return method
  }

}));

app.set('view engine' , 'ejs');
app.use(express.static('public'));
// use express layouts middleware too
app.use(layouts);

app.use(function(req,res,next) {

  // no user id? just move on
  if(!req.session.user) {
     res.locals.user = false;
    next();
  } else {
    // load the user with the ID in the session
    User.findById(req.session.user , function(err, user){
      if(user) {
        // add the user to the request object
        req.user = user;

        // add it to locals so we can use it in all templates
        res.locals.user = user;
      } else {
        // couldn't find it... that's weird. clear the session
        req.session.user = null;
      }
      next(err);
    });
  }
});
 app.use(function(req, res, next) {
   var urls = ["/sessions/new", "/users/new", "/sessions", "/users"];
   if(urls.indexOf(req.url) === -1) {
     if (!req.user) return res.redirect('/sessions/new')
      }
   next();
 });

app.use(router);

module.exports = app;
