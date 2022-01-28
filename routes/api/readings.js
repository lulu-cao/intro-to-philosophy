const router = require("express").Router();
const readingsController = require("../../controllers/readingsController");

// Matches with "/api/readings"
router
  .route("/")
  .get(readingsController.findAll)
  .post(readingsController.create);

// Matches with "/api/readings/:id"
router
  .route("/:id")
  .get(readingsController.findById)
  .put(readingsController.update)
  .delete(readingsController.remove);

module.exports = router;
