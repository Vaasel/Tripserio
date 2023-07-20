const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
require("../db/conn.js");

const trip = require("../models/TripModel.js");

router.get("/", async (req, res, next) => {
  try {
    const trips = await trip.find();

    res.status(200).json({ success: true, message: trips });
  } catch (error) {
    console.error(error);
    // res.status(500).send("Internal Server Error");
    next(new ErrorHandler("Internal Server Error"), 500);
    return;
  }
});

router.post("/addtrip", async (req, res, next) => {
  const { name, startingDate, endingDate, duration, price } = req.body;
  console.log(name, startingDate, endingDate, duration, price);

  if (!name || !startingDate || !endingDate || !duration || !price) {
    // return res.status(400).send("Required fields are missing");
    next(new ErrorHandler("Required fields are missing"), 400);
    return;
  }
  try {
    const trips = new trip({
      name: name,
      startingDate: startingDate,
      endingDate: endingDate,
      duration: duration,
      price: price,
    });

    await trips.save();
    res.status(200).json({ success: true, message: "Trip added successfully" });
  } catch {
    next(new ErrorHandler("Internal Server Error"), 500);
    return;
  }
});

module.exports = router;
