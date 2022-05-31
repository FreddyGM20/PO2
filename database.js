const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose
  .connect("mongodb://db/userDb")
  .then(() => console.log(""))
  .catch((err) => console.log(err));



const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id_event: {
    type: String,
  },
});

module.exports = mongoose.model("user",schema);