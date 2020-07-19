const router = require("express").Router();
const lessonsController = require("../../controllers/lessonsController");

// Matches with "/api/lessons"
router.route("/:teacher").get(lessonsController.findAll);

router.route("/").post(lessonsController.create);

// Matches with "/api/lessons/:id"
router
  .route("/lesson/:id")
  .get(lessonsController.findById)
  .put(lessonsController.update)
  .delete(lessonsController.remove);

module.exports = router;
