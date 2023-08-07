const mongoose = require('../db')
const Schema = mongoose.Schema;
const userSchema = new Schema({
  description: {type: String, require: true},
  duration: {type: Number, require: true},
  date: {type: Date, default: Date.now}
})