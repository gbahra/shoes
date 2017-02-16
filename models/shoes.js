var mongoose = require('mongoose');

var ShoeSchema = new mongoose.Schema({
  name : {type: String, required:true},
  colorway : {type: String, required:true},
  material : {type: String, required:true},
  price : {type: Number, required:true},
  year: {type: Number, required:true},
  image: {type: String}
  // count is an array for more than one image for the fade
  //price is actually value
  //check legit material
  //maybe have brand for search purposes but for now
  // put brand in the front of names
  // add images
  //strech goal making name and colorway unique together but not separate
});

module.exports = mongoose.model('Shoe' , ShoeSchema);

