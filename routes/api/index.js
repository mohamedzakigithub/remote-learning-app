const router = require("express").Router();
const lessonRoutes = require("./lessons");
const userRoutes = require("./users");

router.use("/lessons", lessonRoutes);
router.use("/users", userRoutes);

module.exports = router;
