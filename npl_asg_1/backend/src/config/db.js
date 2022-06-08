const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://virajgupta:Virajgupta12345@cluster0.wmplk.mongodb.net/npl_asg_1?retryWrites=true&w=majority");
};

module.exports= connect;