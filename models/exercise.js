const mongoose = require('../db');

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
  _id: String,
  description: { type: String, require: true },
  duration: { type: Number, require: true },
  date: String,
});

const Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;
