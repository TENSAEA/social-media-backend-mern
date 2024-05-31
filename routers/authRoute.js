const express = require("express");
const router = express.Router();
const {
  register,
  login,
  refreshToken,
  logout,
} = require("../controllers/authController");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Refresh token route
// Note: Implementation for refreshToken is not provided in the context
// router.post('/refresh-token', refreshToken);

// Logout route
router.get("/logout", logout);

module.exports = router;
