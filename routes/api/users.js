const router = require("express").Router();
const passport = require("passport");
const User = require("../../models/user");

router.post("/register", function (req, res) {
  console.log(req.body.username, req.body.password);

  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, account) {
      if (err) {
        return res.send(err);
      }
      passport.authenticate("local")(req, res, function () {
        res.json("loggedin");
      });
    }
  );
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json("loggedin");
});

router.get("/logout", function (req, res) {
  req.logout();
  res.json("loggedout");
});

router.get("/ping", function (req, res) {
  res.send("pong!", 200);
});

router.get("/", function (req, res) {
  User.find({ role: "student" })
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
});

router.delete("/", function (req, res) {
  User.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
