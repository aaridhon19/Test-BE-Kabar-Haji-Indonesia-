const express = require("express");
const router = express.Router();

const TravelController = require("../controllers/travelController");

router.get("/", TravelController.getTravel);
router.get("/:id", TravelController.getTravelById);

module.exports = router;