var mongoose = require('mongoose')

var Widget = new mongoose.Schema({
  sn: {type: String, require: true, trim: true, unique: true},
  name: {type: String, required: true, trim: true},
  desc: String,
  price: Number
})

module.exports = mongoose.model('Widget',  Widget)