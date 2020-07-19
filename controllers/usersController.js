const db = require("../models");
const passport = require("passport");

// Defining methods for the usersController
module.exports = {
  register: function (req, res) {
    db.User.register(
      new db.User(({ username, name, email, photo, role } = req.body)),
      req.body.password,
      function (err, account) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
        passport.authenticate("local")(req, res, function () {
          res.json(req.user);
        });
      }
    );
  },

  login: function (req, res) {
    res.json(req.user);
  },

  logout: function (req, res) {
    req.logout();
    res.json("logged out");
  },

  getStudents: function (req, res) {
    db.User.find({ role: "student", teacher: req.params.teacher })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  deleteStudent: function (req, res) {
    db.User.deleteOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
