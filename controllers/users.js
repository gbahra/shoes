var User= require("../models/user");
var Shoe= require("../models/shoes");

function newUser(req,res) {

  res.render('users/new' , {title:"Register"});

}

// CREATE - Handles registrations
function createUser(req,res){

  // save the user
  var user = new User(req.body);
  user.save(function(err,user){
    // check for errors and return 500 if there was a problem
    if(err) req.flash('error' , err.message);
    // redirect to the posts index page
    res.redirect("/");
  });
}

function updateUser(req,res){
  Shoe.findById(req.params.id, function(err,shoe){
    if(err) req.flash('error' , err.message);
    //find out whihc user and give them shoe.id on shoerack shoe_rack:shoe.id;
    //do this using first name on the screen somehow

    res.redirect("/");
  });
}

module.exports = {
  new: newUser,
  create: createUser,
  update:updateUser
}
