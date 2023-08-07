let mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUniFiedTopology: true,
});

console.log(mongoose.connection.readyState)


module.exports = mongoose