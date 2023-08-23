const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController")


router.get("/stripe", paymentController().stripe);

module.exports = router;
