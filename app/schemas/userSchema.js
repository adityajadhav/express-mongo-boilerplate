var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userId: Schema.Types.ObjectId, 
  name:  String,
},{ collection:'users', autoIndex:false, versionKey: false });

/* Define model */
var model = mongoose.model('userSchema', userSchema);
module.exports = model;