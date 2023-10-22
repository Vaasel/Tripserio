const Users = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const jwtToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


function userController() {
    return {



        async registerUser(req, res, next) {
            try {

                let { email, name, password, cpassword, role } = req.body;

                if (!email || !name || !password || !cpassword) {
                    throw new ErrorHandler("all fields must be filled", 400)
                }

                if (password != cpassword) {
                    throw new ErrorHandler("both passwords do not match", 400)
                }

                const user = new Users({
                    name,
                    email,
                    password,
                    role: role ? role : undefined
                });

                await user.save();
                jwtToken(user, res, 201)

            } catch (error) {
                next(error)
            }
        },

        async loginUser(req, res, next) {
            try {
                const eventEmitter = req.app.get("eventEmitter");
                const { email, password } = req.body;
                if (!email, !password) {
                    next(new ErrorHandler("Please fill all fields", 400))
                    return;
                }

                let user = await Users.findOne({ email });
                if (!user) {
                    next(new ErrorHandler("User does not exist", 404));
                    return;
                }

                const passwordMatched = await user.comparePassword(password);
                if (!passwordMatched) {
                    next(new ErrorHandler("Please enter valied email and password"), 401)
                    return;
                }

                req.session.senderId = user._id;
                let updated = await Users.updateOne({ _id: user._id }, { $set: { is_online: true } })

                jwtToken(user, res, 200)


            } catch (error) {
                next(error);
            }
        },

        async logoutUser(req, res, next) {
            try {
                let user = await Users.findOneAndUpdate({ _id: req.session.senderId }, { $set: { is_online: false } })
                if (!user) {
                    throw new ErrorHandler("something went wrong you were not logged in properly..", 500)
                }

                res.cookie("jwt", null, {
                    httpOnly: true,
                    expires: new Date(Date.now())
                });
                req.session.destroy((error) => {
                    if (error) {
                        throw new ErrorHandler(`error while logging out please try again..${error}`, 500)
                    }
                })
                res.status(200).json({ success: true, message: "Logout Successfull" })
            } catch (error) {
                next(error)
            }

        },

        async forgotPassword(req, res, next) {
            try {
                let user = await Users.findOne({ email: req.body.email });

                if (!user) {
                    return next(new ErrorHandler("User not found ", 404));
                }

                let resetToken = user.getResetPasswordToken();
                console.log(user);
                await user.save({ validateBeforeSave: false });

                let resetUrl = `${req.protocol}://${req.get("host")}/user/resetPassword/${resetToken}`

                let message = `click here to reset your password \n <a href='${resetUrl}'>${resetUrl}</a>  \n if you have not requested this then ignore`

                try {
                    await sendEmail({
                        email: user.email,
                        subject: `Password Recovery`,
                        message: message,
                    })
                    res.status(200).json({ success: true, message: `Email sent to ${req.body.email}` })

                } catch (error) {
                    user.resetPasswordExpire = undefined;
                    user.resetPasswordToken = undefined;
                    await user.save({ validateBeforeSave: false })
                    next(error)
                }

            } catch (error) {

                next(error)
            }
        },

        async resetPassword(req, res, next) {
            //creating hashed token
            const resetPasswordToken = crypto.createHash("sha256")
                .update(req.params.token)
                .digest("hex");

            let user = await Users.findOne({ resetPasswordToken, resetPasswordExpire: { $gte: Date.now() } });


            if (!user) {
                next(new ErrorHandler("Reset Token is invalid or has expired", 400))
                return;
            }

            if (req.body.password != req.body.cPassword) {
                next(new ErrorHandler("Password does not match ", 400))
                return;
            }

            user.password = req.body.password;
            user.resetPasswordExpire = undefined;
            user.resetPasswordToken = undefined;

            await user.save({ validateBeforeSave: false });
            jwtToken(user, res, 200)
        },


        // used by the logged in user to get its own details
        async getUserDetails(req, res, next) {
            try {
                let user = await Users.findById(req.user._id);
                res.status(200).json({ success: true, message:user })
            } catch (error) {
                next(error)
            }
        },

        async updatePassword(req, res, next) {

            try {
                let user = await Users.findById(req.user._id);

                const passwordMatched = await user.comparePassword(req.body.oldPassword);
                if (!passwordMatched) {
                    next(new ErrorHandler("Please enter valid password"), 401)
                    return;
                }

                if (req.body.password != req.body.cPassword) {
                    next(new ErrorHandler("Passwords do not match"), 401);
                    return;
                }

                user.password = req.body.password;

                await user.save();
                jwtToken(user, res, 200);


            } catch (error) {
                next(error)
            }


        },


        // can be used by admin to fetch all users in database
        async getAllUsers(req, res, next) {
            try {
                let user = await Users.find({});
                return res.status(200).json({ success: true, message:user })
            } catch (error) {
                next(error)
            }

        },

        //fetches data of single user based on id
        async getSingleUser(req, res, next) {
            try {
                let user = await Users.findById(req.params.id);
                if (!user) {
                    next(new ErrorHandler("User not found", 404))
                    return;
                }

                return res.status(200).json({ success: true, message:user })

            } catch (error) {
                next(error)
            }


        },


        async deleteUser(req, res, next) {
            try {
                let user = await Users.findByIdAndDelete(req.params.id);
                if (!user) {
                    next(new ErrorHandler("User has not been found ", 400))
                }
                return res.status(200).json({ success: true, message: "user has been deleted" })
            } catch (error) {
                next(error)
            }

        },





    };
}

module.exports = userController;
