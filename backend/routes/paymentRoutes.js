const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController")


router.post("/stripe", paymentController().stripe);

module.exports = router;
