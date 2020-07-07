const db = require("../models");

// Defining methods for the usersController
module.exports = {
  register: function (req, res) {
    console.log(req.body);
    db.User.register(
      new db.User(({ username, name, email, picture, role } = req.body)),
      req.body.password,
      function (err, account) {
        if (err) {
          return res.send(err);
        }
        passport.authenticate("local")(req, res, function () {
          res.json("logged in");
        });
      }
    );
  },

  login: function (req, res) {
    res.json("logged in");
  },

  logout: function (req, res) {
    req.logout();
    res.json("logged out");
  },

  getStudents: function (req, res) {
    db.User.find({ role: "student" })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  deleteStudent: function (req, res) {
    db.User.deleteOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
