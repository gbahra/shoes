var Shoes = require('../models/car');

function indexShoess(req, res) {
  Shoes.find({} , function(err, shoes) {
    if(err) return res.status(500).send(err);
    res.render("shoes/index" , {
      title: "Shoes",
      shoes: shoes
    });
  });
}

function showShoess(req, res) {
  Shoes.findById(req.params.id , function(err, car) {
    if(!car) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("shoes/show" , {
      title: "Shoes",
      car: car
    });
  });
}

function newShoess(req , res) {
  var newShoes = {
    color: "",
    make: "",
    model: "",
    bhp: 0,
    year: 0,
    miles: 0
  }

  res.render("shoes/new" , {
    title: "New Shoes",
    car: newShoes
  });
}

function createShoess(req, res) {
  Shoes.create(req.body, function(err, car){
    if(err) return res.status(500).send(err);
    res.redirect("/");
  });
}

function editShoess(req, res) {
  Shoes.findById(req.params.id , function(err, car) {
    if(!car) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("shoes/edit" , {
      title: "Shoes",
      car: car
    });
  });
}

function updateShoess(req, res) {
  Shoes.findByIdAndUpdate(
    req.params.id,
    { $set:  req.body },
    { runValidators: true },
    function(err , car){
      if(err) return res.status(500).send(err);
      res.redirect("/");
    }
  );
}

function deleteShoess(req , res) {
  Shoes.findByIdAndRemove(req.params.id , function(err) {
    res.redirect("/");
  });
}

module.exports = {
  index: indexShoess,
  show: showShoess,
  new: newShoess,
  create: createShoess,
  edit: editShoess,
  update: updateShoess,
  delete: deleteShoess
}
