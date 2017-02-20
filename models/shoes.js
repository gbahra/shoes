var mongoose = require('mongoose');

var ShoeSchema = new mongoose.Schema({
  name : {type: String, unique :true},
  colorway : {type: String},
  materials : {type: String},
  price : {type: Number},
  year: {type: Number},
  image: {type: String},
  likes: {type:Number}
  // count is an array for more than one image for the fade
  //price is actually value
  //check legit material
  //maybe have brand for search purposes but for now
  // put brand in the front of names
  // add images
  //strech goal making name and colorway unique together but not separate
  //material don't show up prob validation shit
});

module.exports = mongoose.model('Shoe' , ShoeSchema);

