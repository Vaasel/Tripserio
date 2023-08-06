const express = require("express");
const chatController = require("../controllers/chatController")
const chatRouter = express.Router();


chatRouter.post("/setReceiver", chatController().setReceiver)
chatRouter.post("/sendMessage", chatController().sendMessage)

module.exports = chatRouter;