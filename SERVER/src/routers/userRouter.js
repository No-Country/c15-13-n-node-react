const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/userController");

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

module.exports = router;
