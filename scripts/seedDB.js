const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Lessons collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rlms");

const lessonSeed = [
  {
    title: "Lesson-1 Introduction to Statistics",
    video: "https://youtu.be/MXaJ7sa7q-8",
    resources: [
      { title: "Statistics", url: "https://en.wikipedia.org/wiki/Statistics" },
    ],
    notes:
      "A brief overview about statistics and common vocabulary used in the field of statistics.",
  },
  {
    title: "Lesson-2 Bar Charts, Pie Charts, Histograms, Stemplots, Timeplots",
    video: "https://youtu.be/uHRqkGXX55I",
    resources: [
      { title: "what are charts ", url: "https://en.wikipedia.org/wiki/Chart" },
    ],
    notes:
      "Quickly learn about bar charts, pie charts, histograms, stemplots, timeplots, and learn about which type of graphical tool is appropriate for describing quantitative variables, and categorical variables.",
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
