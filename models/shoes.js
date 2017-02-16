var mongoose = require('mongoose');

var ShoeSchema = new mongoose.Schema({
  name : {type: String, required:true},
  colorway : {type: String, required:true},
  material : {type: String, required:true},
  price : {type: Number, required:true},
  year: {type: Number, required:true}
  //price is actually value
  //check legit material
  //maybe have brand for search purposes but for now
  // put brand in the front of names
});

module.exports = mongoose.model('Shoe' , ShoeSchema);

