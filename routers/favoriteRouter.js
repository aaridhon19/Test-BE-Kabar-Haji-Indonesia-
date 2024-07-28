const express = require("express");
const router = express.Router();

const FavoriteController = require("../controllers/favoriteController.js");

router.get("/", FavoriteController.getFavorite);
router.get("/:id", FavoriteController.getFavoriteById);

module.exports = router;
