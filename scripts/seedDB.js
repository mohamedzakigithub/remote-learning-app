const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Lessons collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rlms");

const lessonSeed = [
  {
    title: "Lesson-1 Introduction",
    video: "Video  for lesson 1",
    resources: ["resource 1-1", "resource 1-2"],
    notes: "Lesson-1 notes",
  },
  {
    title: "Lesson-2 Setup",
    video: "Video  for lesson 2",
    resources: ["resource 2-1", "resource 2-2"],
    notes: "Lesson-2 notes",
  },
];

db.Lesson.remove({})
  .then(() => db.Lesson.collection.insertMany(lessonSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
