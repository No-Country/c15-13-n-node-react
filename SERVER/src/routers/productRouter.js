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

// Product CRUD

// Create product
router.post("/create", createProductCtrl);

// Get products
router.get("/get-products", getProductCtrl);

// Get one product
router.get("/get-one-product/:id", getPropductCtrlId);

// Update Product
router.patch("/update-product/:id", updateProductCtrl);

// Update stock increment product
router.patch("/update-product/:id/increment-stock/:value", updateStockIncCtrl);

// Update stock decrement product
router.patch("/update-product/:id/decrement-stock/:value", updateStockDecCtrl);

// Delete product
router.delete("/delete-product/:id", deleteProductCtrl);

module.exports = router;
