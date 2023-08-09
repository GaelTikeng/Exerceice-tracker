const mongoose = require("../db");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: { type: String, require: true },
  },
  { versionKey: false }
);

const Username = mongoose.model("users", userSchema);

module.exports = Username;
