const express = require("express");
const router = express.Router();
const {
  createProductCtrl,
  getProductCtrl,
  getPropductCtrlId,
  updateProductCtrl,
  updateStockIncCtrl,
  updateStockDecCtrl,
  deleteProductCtrl,
} = require("../controllers/productController");

const { verifyToken, isAdmin } = require("../middleware/authJwt");
// Product CRUD

// Create product
router.post("/create", verifyToken, createProductCtrl);

// Get products
router.get("/get-products", getProductCtrl);

// Get one product
router.get("/get-one-product/:id", getPropductCtrlId);

// Update Product
router.patch("/update-product/:id", verifyToken, updateProductCtrl);

// Update stock increment product
router.patch("/update-product/:id/increment-stock/:value", verifyToken, updateStockIncCtrl);

// Update stock decrement product
router.patch("/update-product/:id/decrement-stock/:value", verifyToken, updateStockDecCtrl);

// Delete product
router.delete("/delete-product/:id", verifyToken, deleteProductCtrl);

module.exports = router;
