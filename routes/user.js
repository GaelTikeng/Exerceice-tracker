var express = require("express");
var router = express.Router();
const Username = require("../models/user");

// create username
router.post("/api/users", async (req, res) => {
  const users = req.body.users;
  try {
    // const foundUser = await Username.findOne(users)

  // foundUser? res.json(foundUser) : res.send("user not found")

  const user = await Username.create(users);
  console.log(user);
  
  res.json(user);
  // user
  //   .save()
  //   .then((resp) => respHandler(res, resp))
  //   .catch((err) => errorHandler(res, err))

  }
  catch(error) {
    res.send('An error occured while posting user', error)
  }

  
});

// get list of users
router.get('/api/users', async(req, res) => {
  try {
    const user = await Username.find()
    res.send(user)
  }
  catch(error) {
    res.send("Error occured while getting data", error)
  }
 
})

module.exports = router;
