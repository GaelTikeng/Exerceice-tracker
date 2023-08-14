var express = require("express");
var router = express.Router();
const Exercise = require("../models/exercise");
const UserName = require("../models/user");


// create exercice
router.post("/api/users/:_id/exercises", async (req, res) => {
  let { description, duration, date } = req.body;
  try {
    const userId = req.body["userId"];
    const foundUser = await UserName.findById(userId);
    console.log("yes this is the user",foundUser);
    if (!foundUser) {
      res.json("No user with that id");
    }
  
    if (!date) {
      date = new Date();
    }
  
    await Exercise.create({
      userId: userId,
      username: foundUser.username,
      description,
      duration,
      date,
    });
  
    res.send({
      _id: userId,
      Username: foundUser.username,
      description,
      duration,
      date: date,
    });

  }
  catch(error) {
    res.send("Error occured", error)
  }
 
});

// get request to retrieve a user with the exercises
router.get("/api/users/:_id/logs", async (req, res) => {
  const userId = req.params._id;
  try {
    const foundUser = await UserName.findById(userId);

    if (!foundUser) {
      res.json("No user with that id");
    }

    let exercises = await Exercise.find({ userId });
    console.log(exercises)
    exercises = exercises.map((action) => {
      return {
        description: action.description,
        duration: action.duration,
        date: action.date
      }
    })
    console.log("this is the user", exercises);
    res.json({
      username: foundUser.username,
      count: exercises.length,
      _id: userId,
      log: exercises,
    })
  }
  catch(error) {
    console.log("An error occured, can't get", error)
    res.json(error)
  }
});

module.exports = router;
