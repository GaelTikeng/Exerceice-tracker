var express = require("express");
var router = express.Router();
const Username = require("../models/user");

const respHandler = (res, user) => {
  console.log("action done successfully");
  console.log(user);
  res.json({ user: "OK", user });
};

const errorHandler = (res, err) => {
  let errMsg = "An error occured" + err;
  console.log(errMsg);
  return res.json({ status: errMsg }).status(500);
};

// create username
router.post("/api/users", async (req, res) => {
  const users = req.body.users;

  const foundUser = await Username.findOne(users)

  foundUser? res.json(foundUser) : res.send("user not found")

  const user = await Username.create(users);
  console.log(user);
  
  res.json(user);
  // user
  //   .save()
  //   .then((resp) => respHandler(res, resp))
  //   .catch((err) => errorHandler(res, err))
});

// get list of users
router.get('/api/users', async(req, res) => {
  const user = await Username.find()

  res.send(user)
})

module.exports = router;
