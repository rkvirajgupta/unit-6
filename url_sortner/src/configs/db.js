const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(`mongodb+srv://${evn.SECRET_KEY}@cluster0.wmplk.mongodb.net/url?retryWrites=true&w=majority`);
};

module.exports= connect;