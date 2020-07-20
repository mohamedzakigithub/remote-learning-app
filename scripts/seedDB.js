const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Lessons collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rlms");

const lessonSeed = [
  {
    title: "Trigonometry 1: Angles",
    video: "https://youtu.be/AiBrFgpELfA",
    resources: [""],
    notes:
      "This is the first video in my 'Crash Course Trigonometry' series. This series is intended for students currently taking trigonometry or needing to review trigonometry concepts.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 2: Angle Measure",
    video: "https://youtu.be/gDabk7d4_0A",
    resources: [""],
    notes:
      "In this second video of my Crash Course Trigonometry series, I talk about the different ways of measuring angles. I discuss revolutions, degrees, and radians. I also go through some practice problems where I convert between these different systems of measurement.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 3: Right Triangle Trigonometry",
    video: "https://youtu.be/uDIDsKFYU3Y",
    resources: [""],
    notes:
      "In this video we take our first look at trigonometric functions. Specifically, we consider acute angles by looking at right triangles. Using properties of similar triangles, we define the six trigonometric functions.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 4: Fundamental Identities",
    video: "https://youtu.be/STPSg0gugLg",
    resources: [""],
    notes:
      "In this video, we look at several identities that relate the six trigonometric functions. We also work through an example where we find the values of the five remaining functions given the value of one of the functions.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 5: Evaluating Trigonometric Functions of Acute Angles",
    video: "https://youtu.be/raDNHfsWxh4",
    resources: [""],
    notes:
      "In this video, we will learn how to compute the values of trigonometric functions of acute angles. We consider two cases: 'special' angles where the value can be determined using geometry, and general angles where we use a calculator to approximate the function values.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 6: Applications",
    video: "https://youtu.be/N4vXs4rhC9s",
    resources: [""],
    notes:
      "For this video, I work through some application problems, while giving some general advice for how to approach these types of problems.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 7: Trigonometric Functions of Any Angle",
    video: "https://youtu.be/S4PDMyrYOf4",
    resources: [""],
    notes:
      "In this video, we expand our definitions of the six trigonometric functions to include any angle, not just acute angles. We also discuss the special cases of quadrantal angles and coterminal angles.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 8: Reference Angles",
    video: "https://youtu.be/bXGVqTUzBN4",
    resources: [""],
    notes:
      "In this video we will define and explore reference angles. These will allow us to use our knowledge of trigonometric functions of acute angles to find the value of a trigonometric function of any angle.",
    teacher: "Mohamed Eleraky",
  },
  {
    title:
      "Trigonometry 9: Unit Circle and Properties of Trigonometric Functions",
    video: "https://youtu.be/rXZ9pNgjIsU",
    resources: [""],
    notes:
      "In this video, we introduce the 'unit circle approach,' which is another way of determining the value of a trigonometric function. Using this approach, we examine various properties of the six fundamental trigonometric functions.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 10: Graphs of Trigonometric Functions",
    video: "https://youtu.be/3B6WGZSSOzo",
    resources: [""],
    notes:
      "In this video, I show you the graphs of the six fundamental trigonometric functions, using the unit circle approach.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 11: Inverse Trigonometric Functions",
    video: "https://youtu.be/tqwYwZLSOo8",
    resources: [""],
    notes:
      "In this video, I discuss the inverse relationships defined by trigonometric functions. Specifically, I walk through the definitions of inverse sine, inverse cosine, and inverse tangent.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 12: Solving Trigonometric Equations",
    video: "https://youtu.be/vwNT6_yuaSo",
    resources: [""],
    notes:
      "In this video, I work through several examples of solving trigonometric equations. Specifically, I explain how to solve equations of the form 'trigonometric function of x equals a value.' I explain how to use 'special' angles and reference angles, as well as calculator methods.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 13: More Trigonometric Identities",
    video: "https://youtu.be/mH_PQ1iQvts",
    resources: [""],
    notes:
      "In this video, I discuss several more trigonometric identities. Specifically, I talk about the formulas for the sine and cosine of the sum and difference of two angles. I also discuss the double-angle and half-angle formulas for sine and cosine.",
    teacher: "Mohamed Eleraky",
  },
  {
    title: "Trigonometry 14: Law of Sines and Law of Cosines",
    video: "https://youtu.be/l2J3v3fAKJY",
    resources: [""],
    notes:
      "In this final video of the Crash Course Trigonometry series, I discuss the Law of Sines and the Law of Cosines. I work through several examples where we use these laws to 'solve' a triangle by computing the missing measures of sides and/or angles.",
    teacher: "Mohamed Eleraky",
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
