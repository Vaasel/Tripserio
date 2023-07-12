const express = require("express");
const router = express.Router();
// const client = require("../db/conn.js");
require("../db/conn.js");

const trip = require("../models/Trip.js");

router.get("/", async (req, res) => {
  try {
    const users = await trip.find();

    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/addtrip", async (req, res) => {
  const { name, startingdate, endingdate, duration, price } = req.body;
  if (!name || !startingdate || !endingdate || !duration || !price) {
    return res.status(400).send("Required fields are missing");
  }
  try {
    const trips = new trip({
      name: name,
      startingDate: startingdate,
      endingDate: endingdate,
      duration: duration,
      price: price,
    });

    await trips.save();
    res.status(200).send("Trip added successfully");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
