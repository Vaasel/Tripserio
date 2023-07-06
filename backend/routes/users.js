const express = require("express");
const router = express.Router();
const client = require("../db/conn.js");

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Tripserio");
    const collection = db.collection("users");
    const results = await collection.find().toArray();

    res.send(results).status(200);

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
