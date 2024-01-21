const express = require("express");
const router = express.Router();
const bootcampsController = require("../controller/bootcampsController");

router
  .route("/radius/:zipcode/:distance")
  .get(bootcampsController.getBootcampsInRadius);

router
  .route("/")
  .get(bootcampsController.getBootcamps)
  .post(bootcampsController.postBootcamps);

router
  .route("/:id")
  .get(bootcampsController.getBootcampById)
  .put(bootcampsController.updateBootcampsById);

router.delete("/:id", bootcampsController.deleteBootcampsById);

module.exports = router;
