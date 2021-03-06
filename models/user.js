var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name : {type: String, required:true},
  last_name : {type: String, required:true},
  email : {type: String, required:true},
  password : {type: String, required:true},
  shoe_rack: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shoe" }]//double check the shoe in this line
  //maybe have wallet
});
module.exports = mongoose.model('User' , UserSchema);
