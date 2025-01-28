const express = require("express");
const { authenticateUser,registerUser, } = require("../controllers/authController"); // Certifique-se de que a função authenticateUser está correta
const { sendRecoveryToken } = require("../controllers/Token"); // Certifique-se de que a função sendRecoveryToken está correta
const { resetPassword } = require("../middlewares/authToken"); // Certifique-se de que a função resetPassword está correta

const router = express.Router();

// Rota de login com autenticação
router.post("/login", authenticateUser);
router.post("/register", registerUser);
router.post("/recover-password", sendRecoveryToken);
router.post("/change-password", resetPassword);


module.exports = router;
