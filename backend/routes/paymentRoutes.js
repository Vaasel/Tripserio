const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController")


router.post("/stripe", paymentController().stripe);
router.post("/jazzcash", paymentController().jazzcash);


module.exports = router;
