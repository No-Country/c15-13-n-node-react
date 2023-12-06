const express = require("express");
const router = express.Router();
const {
  getCartCtrl,
  fillCartCtrl,
  deleteProductCartCtrl,
} = require("../controllers/cartController");
const { verifyToken } = require("../middleware/authJwt");

// Get one product
router.get("/get-cart", verifyToken, getCartCtrl);

// Create cart or add products to cart
router.post("/fill-cart", verifyToken, fillCartCtrl);

// Delete products from cart
router.delete("/delete-product-cart", verifyToken, deleteProductCartCtrl);

module.exports = router;
