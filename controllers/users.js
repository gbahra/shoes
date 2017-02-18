var User= require("../models/user");
var Shoe= require("../models/shoes");
var currentUser;

function indexUser(req,res) {
  User.find({} , function(err, user) {
    if(err) return res.status(500).send(err);
    Shoe.findById(user.shoerack, function(err,shoe){
        res.render("shoes/shoeRack" , {
        });
    })
  });
}

function newUser(req,res) {
  res.render('users/new');
}

// CREATE - Handles registrations
function createUser(req,res){
  // save the user
  var user = new User(req.body);
  currentUser = user.id;
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
    User.findByIdAndUpdate(currentUser, {shoe_rack: shoe.id}, function(err,user){
      if(err) req.flash('error' , err.message);
    })
    res.redirect("/");
  });
}

module.exports = {
  index: indexUser,
  new: newUser,
  create: createUser,
  update:updateUser
}
