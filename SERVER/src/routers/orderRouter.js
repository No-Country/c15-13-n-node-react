const express = require("express");
const router = express.Router();
const { getOrderCtrl } = require("../controllers/orderController");
const { verifyToken } = require("../middleware/authJwt");

// Get an order
router.get("/get-order", verifyToken, getOrderCtrl);


module.exports = router;