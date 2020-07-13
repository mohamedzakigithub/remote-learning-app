const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
  name: String,
  photo: String,
  text: String,
  date: String,
});

const Discussion = mongoose.model("discussion", discussionSchema);

module.exports = Discussion;
