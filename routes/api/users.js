const router = require("express").Router();
const passport = require("passport");
const usersController = require("../../controllers/usersController");

router.post("/register", usersController.register);

router.post("/login", passport.authenticate("local"), usersController.login);

router.get("/logout", usersController.logout);

router.get("/ping", function (req, res) {
  res.send("pong!", 200);
});

router.get("/", usersController.getStudents);

router.delete("/:id", usersController.deleteStudent);

module.exports = router;
