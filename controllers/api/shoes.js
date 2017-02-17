var Shoes = require('../models/shoes');

function indexApi(req, res) {

  Shoes.find({} , function(err, shoes) {
    if(err) return res.status(500).send(err);
    res.json({
      shoes: shoes
    });
  });
}

function showApi(req, res) {
  Shoes.findById(req.params.id , function(err, shoe) {
    if(!shoe) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.json({
      shoe: shoe
    });
  });
}

function createApi(req, res) {
  Shoes.create(req.body, function(err, shoe){
    if(err) req.flash('error' , err.message);
      res.json({
      shoe: shoe
      });
  });
}


function updateShoes(req, res) {
  Shoes.findByIdAndUpdate(
    req.params.id,
    { $set:  req.body },
    { runValidators: true },
    function(err , shoe){
      if(err) return res.status(500).send(err);
      res.json({
        shoe: shoe
      });
    }
  );
}

function deleteShoes(req , res) {
  Shoes.findByIdAndRemove(req.params.id , function(err) {
    //sucess message in flash
  });
}


module.exports = {
  index: indexApi,
  show: showApi,
  create: createApi
  update: updateApi
  delete: deleteApi
}

//make sure they have to login befoer they delete update and add new stuff to api
//
