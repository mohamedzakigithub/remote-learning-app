const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  title: { type: String, required: true },
  video: String,
  notes: String,
  resources: Array,
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
