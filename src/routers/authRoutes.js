const express = require("express");
const { authenticateUser,registerUser, } = require("../controllers/authController"); // Certifique-se de que a função authenticateUser está correta
const { sendRecoveryToken } = require("../controllers/Token"); // Certifique-se de que a função sendRecoveryToken está correta
const { resetPassword } = require("../middlewares/authToken"); // Certifique-se de que a função resetPassword está correta
const { googleLogin, googleCallback} = require("../controllers/androidAuth"); // Certifique-se de que a função googleLogin está correta
const router = express.Router();

// Rota de login com autenticação
router.post("/login", authenticateUser);
router.post("/register", registerUser);
router.post("/recover-password", sendRecoveryToken);
router.post("/change-password", resetPassword);
router.post("/google-login", googleLogin);
router.post("/google-callback", googleCallback);

module.exports = router;
