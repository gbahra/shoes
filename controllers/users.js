var User= require("../models/user");
var Shoe= require("../models/shoes");
var bodyParser = require('body-parser');

function shoeRack(req,res) {
//   console.log('yh')
//   User.find({} , function(err, user) {
//     if(err) return res.status(500).send(err);
//     console.log(user, user.shoe_rack)
//     Shoe.findById(user.shoe_rack, function(err,shoes){
//       console.log(shoes);
//         res.render("users/shoeRack",{
//           shoes:shoes
//         });
//     });
//   });
// }
  User.findById(req.user._id).populate("shoe_rack").exec(function(err, user) {
    // check for errors and return 500 error and message if found
    if(err) return res.status(500).send(err);
    // data return so now we can render
    res.render("users/shoerack" , {
      shoes: user.shoe_rack
    });
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
  console.log('adsad')
  Shoe.findById(req.params.id, function(err,shoe){
    console.log(shoe)
    if(err){
      req.flash('error' , err.message);
    }
    //find out whihc user and give them shoe.id on shoerack shoe_rack:shoe.id;
    //do this using first name on the screen somehow
    User.findByIdAndUpdate(req.user._id,
      {$addToSet: {shoe_rack: shoe.id}},
      {new: true},
      function(err,user){
        console.log(user);
        if(err) req.flash('error' , err.message);
        res.redirect('/')
      })
    });
}

module.exports = {
  new: newUser,
  create: createUser,
  update:updateUser,
  shoeRack: shoeRack
}
