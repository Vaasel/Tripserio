const express = require("express");
const router = express.Router();
const tripController = require("../controllers/TripController");

router.get("/", tripController().GetAllTrips); //API FOR GETTING ALL THE TRIPS
router.post("/addtrip", tripController().AddTrip); //API FOR ADDING A TRIP

module.exports = router;
