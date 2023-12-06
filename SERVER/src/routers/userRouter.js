const express = require("express");
const router = express.Router();
const {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  getUserCtrl,
  getUserCtrlId,
  updateUserCtrl,
  deleteUserCtrl,
} = require("../controllers/userController");

const { verifyToken, isAdmin } = require("../middleware/authJwt");

// Auth
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
router.post("/logout", verifyToken, logoutCtrl);

// User CRUD

// Get users
router.get("/get-users", getUserCtrl);

// Get one user
router.get("/get-one-user/:id", verifyToken, isAdmin, getUserCtrlId);

// Update user
router.patch("/update-user/:id", verifyToken, updateUserCtrl);

// Delete user
router.delete("/delete-user/:id", deleteUserCtrl);

module.exports = router;
