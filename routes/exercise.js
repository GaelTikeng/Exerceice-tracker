var express = require("express");
var router = express.Router();
const Exercise = require("../models/exercise");

// bandler function
const respHandler = (res, exercise) => {
  console.log("Action done successfully");
  console.log(exercise);
  res.json({ exercise: "OK", exercise });
};

const errorHandler = (res, err) => {
  let errMsg = "An error occured" + err;
  console.log(errMsg);
  return res.json({ status: errMsg }).status(500);
};

// create exercice
router.post('/api/users/:_id/exercises', function (req, res) {

  let { description, duration, date } = req.body;
  const userId = req.body["_id"]
  if (!date) {
    date = new Date()
  }
  
  res.send({
    _id: userId,
    description,
    duration,
    date: date
  })
});

module.exports = router;
