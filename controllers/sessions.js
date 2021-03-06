var User = require('../models/user');
var bodyParser = require('body-parser');

// NEW ( AKA Login )
function newSession(req,res) {
  res.render('sessions/new');
}

// CREATE - Handles logins
function createSession(req,res){

  User.findOne({email: req.body.email} , function(err, user){
      if(user && user.password == req.body.password) {

        // save the user to the session ( log them in )
        req.session.user = user.id;

        res.redirect("/");

      } else {

        // add any other errors too
        if(err) req.flash('error' , err.message);

        // set the not found error
        req.flash('error' , "Email or password was incorrect");

        // redirect with error back to the login form
        res.redirect("/sessions/new");

      }


  });

}

// DELETE - handle logouts
function deleteSession(req,res) {

    // clear the user from the session and redirect
    delete req.session.user;

    // redirect to login page
    res.redirect("/sessions/new");

}

module.exports = {
  new: newSession,
  create: createSession,
  delete: deleteSession
}
