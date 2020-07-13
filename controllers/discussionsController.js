const db = require("../models");

// Defining methods for the discussionsController
module.exports = {
  findAll: function () {
    return db.Discussion.find();
  },

  create: function (discussion) {
    db.Discussion.create(discussion)
      .then((dbModel) => console.log("message created"))
      .catch((err) => console.log(err));
  },
};
