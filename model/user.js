const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_Schema = new mongoose.Schema({
  phoneNumber: {
   /* type: Number,
    required: true,
  },*/
  imageUrl: String,
}});

const user = new mongoose.model("user", user_Schema);

//export collection
module.exports = { user };
