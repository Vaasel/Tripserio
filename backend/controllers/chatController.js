const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const userModel = require("../models/userModel");
const chatModel = require("../models/chatModel");
const mongoose = require("mongoose")



function chatController() {


    return {


        async setReceiver(req, res, next) {
            const { receiverId } = req.body;
            try {
                if (!receiverId) {
                    throw new ErrorHandler("must set a receiver", 400)
                }
                if (!req.session.senderId) {
                    throw new ErrorHandler(`please make sure you are logged in.`, 400)
                }


                if (req.session.senderId == receiverId) {
                    throw new ErrorHandler(`message receiver and logged in user can not be same`, 403)
                }
                let user = await userModel.findOne({ _id: receiverId });
                if (!user) {
                    throw new ErrorHandler("this user does not exit", 404)
                }
                if (receiverId == req.session.receiverId) {
                    throw new ErrorHandler("the user has already been set", 401)
                }
                req.session.receiverId = receiverId;

                let findFilter = {
                    $or: [
                        {
                            person1Id: req.session.senderId,
                            person2Id: req.session.receiverId
                        },
                        {
                            person1Id: req.session.receiverId,
                            person2Id: req.session.senderId
                        }
                    ]
                }

                let chat = await chatModel
                    .findOne(findFilter)
                    .populate({
                        path: "messages",
                        populate: {
                            path: "sender receiver",
                            select: "email name _id role is_online",
                        },
                    });

                successHandler(res, 200, { messages: chat?.messages ? chat.messages : [] })
            } catch (error) {
                next(error)
            }

        },

        async sendMessage(req, res, next) {
            try {
                const { message } = req.body;
                if (!message) {
                    throw new ErrorHandler(`please type a message`, 400)
                }
                if (!req.session.senderId) {
                    throw new ErrorHandler(`please make sure you are logged in.`, 400)
                }

                if (!req.session.receiverId) {
                    throw new ErrorHandler(`please select the user you want to communicate with`, 400)
                }

                if (req.session.senderId == req.session.receiverId) {
                    throw new ErrorHandler(`message receiver and logged in user can not be same`, 403)
                }

                let msg = {
                    sender: req.session.senderId,
                    receiver: req.session.receiverId,
                    message
                }
                let findFilter = {
                    $or: [
                        {
                            person1Id: req.session.senderId,
                            person2Id: req.session.receiverId
                        },
                        {
                            person1Id: req.session.receiverId,
                            person2Id: req.session.senderId
                        }
                    ]
                }

                let chat;
                chat = await chatModel
                    .findOneAndUpdate(findFilter,
                        {
                            $push: { messages: msg }
                        }, {
                        new: true
                    })
                    .populate({
                        path: "messages",
                        populate: {
                            path: "sender receiver",
                            select: "email name _id role is_online",
                        },
                    });

                if (!chat) {
                    chat = new chatModel({
                        person1Id: req.session.senderId,
                        person2Id: req.session.receiverId,
                        messages: [msg]
                    })
                    await chat.save();
                    await chat.populate({
                        path: "messages",
                        populate: [
                            { path: "sender", select: "_id name email role is_online" },
                            { path: "receiver", select: "_id name email role is_online" }
                        ]
                    });
                }

                const eventEmitter = req.app.get("eventEmitter");
                eventEmitter.emit("sendMessage", chat.messages[chat.messages.length - 1])
                return successHandler(res, 200, chat.messages[chat.messages.length - 1])
            } catch (error) {
                next(error)
            }

        },

    }
}

module.exports = chatController;