const express = require("express");
const chatController = require("../controllers/chatController")
const chatRouter = express.Router();


chatRouter.post("/setReceiver", chatController().setReceiver)
chatRouter.post("/sendMessage", chatController().sendMessage)
chatRouter.get("/prevChats", chatController().prevChats)


module.exports = chatRouter;