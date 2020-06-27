const router = require("express").Router();
const lessonRoutes = require("./lessons");

// Lesson routes
router.use("/lessons", lessonRoutes);

module.exports = router;
