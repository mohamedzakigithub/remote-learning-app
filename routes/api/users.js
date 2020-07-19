const router = require("express").Router();
const passport = require("passport");
const usersController = require("../../controllers/usersController");

router.post("/register", usersController.register);

router.post("/login", passport.authenticate("local"), usersController.login);

router.get("/isLoggedIn", isLoggedIn, function (req, res) {
  res.json(req.user);
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  }
}

router.get("/logout", usersController.logout);

router.get("/ping", function (req, res) {
  res.send("pong!", 200);
});

router.get("/:teacher", usersController.getStudents);

router.delete("/:id", usersController.deleteStudent);

module.exports = router;
