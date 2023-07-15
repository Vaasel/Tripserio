const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.route("/resetPassword/:token").put(userController().resetPassword)
router.route("/logout").get(isAuthenticated, userController().logoutUser)
router.route("/register").post(userController().registerUser)
router.route("/login").post(userController().loginUser)
router.route("/forgotPassword").post(userController().forgotPassword)
router.route("/updatePassword").put(isAuthenticated, userController().updatePassword)
router.route("/deleteUser/:id").delete(isAdmin, userController().deleteUser)
router.route("/me").get(isAuthenticated, userController().getUserDetails)
router.route("/").get(userController().getAllUsers)
router.route("/:id").get(userController().getSingleUser)


module.exports = router;