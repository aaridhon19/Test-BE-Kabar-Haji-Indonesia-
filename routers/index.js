const express = require("express");
const router = express.Router();

const user = require("../routers/userRouter");
const travel = require("../routers/travelRouter");
const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");

const UserController = require("../controllers/userController");

// Login and Register
router.use("/", user);

// Need authentication
router.use(authentication);
router.get("/user/:id", UserController.getUserById);
router.use("/travels", travel);

// Error handler
router.use(errorHandler);

module.exports = router;
