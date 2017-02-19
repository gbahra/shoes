var Shoes = require('../models/shoes');

function indexShoes(req, res) {
  Shoes.find({} , function(err, shoes) {
    if(err) return res.status(500).send(err);
    res.render("shoes/index" , {
      shoes: shoes
    });
  });
}

function showShoes(req, res) {
  Shoes.findById(req.params.id , function(err, shoe) {
    if(!shoe) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("shoes/show" , {
      shoe: shoe
    });
  });
}

function newShoes(req , res) {
  var newShoes = {
  id : "",
  name : "",
  colorway : "",
  materials : "",
  price : 0,
  year: 0,
  image: ""
  }
  res.render("shoes/new" , {
    shoe: newShoes
  });
}

function createShoes(req, res) {
  Shoes.create(req.body, function(err, shoe){
     if(err) req.flash('error' , err.message);
    res.redirect("/");
  });
}

function editShoes(req, res) {
  Shoes.findById(req.params.id , function(err, shoe) {
    if(!shoe) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("shoes/edit" , {
      shoe: shoe
    });
  });
}

function updateShoes(req, res) {
  console.log("yh");
  Shoes.findByIdAndUpdate(
    req.params.id,
    { $set:  req.body },
    { runValidators: true },
    function(err , shoe){
      if(err) return res.status(500).send(err);
      res.redirect("/");
    }
  );
}

function deleteShoes(req , res) {
  Shoes.findByIdAndRemove(req.params.id , function(err) {
    res.redirect("/");
  });
}

module.exports = {
  index: indexShoes,
  show: showShoes,
  new: newShoes,
  create: createShoes,
  edit: editShoes,
  update: updateShoes,
  delete: deleteShoes
}
