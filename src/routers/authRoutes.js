// src/routes/authRoutes.js

const express = require("express");
const { login } = require("../controllers/authController");
const { validateLogin } = require("../middlewares/validate");

const router = express.Router();

// Rota de login com validação
router.post("/login", validateLogin, login);

module.exports = router;
