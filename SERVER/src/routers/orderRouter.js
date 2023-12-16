const express = require("express");
const router = express.Router();
const { getOrderCtrl, createSessionCtrl } = require("../controllers/orderController");
const { verifyToken } = require("../middleware/authJwt");

// Get an order
router.get("/get-order", verifyToken, getOrderCtrl);

// Stripe routes

//Payment checkout
router.post("/stripe/create-checkout-session", verifyToken, createSessionCtrl);

//Payment success 
router.get("/stripe/success", (req, res) => res.send('Success...'));

//Cancel payment
router.get("/stripe/cancel", (req, res) => res.send('Cancel...'));


module.exports = router;