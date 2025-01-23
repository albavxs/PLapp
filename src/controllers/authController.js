// src/controllers/authController.js

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  // Simulação de autenticação (use sua lógica real, como consulta ao banco de dados)
  if (email === "teste@email.com" && password === "senha123") {
    return res.status(200).json({ message: "Login bem-sucedido!" });
  } else {
    return res.status(401).json({ message: "Email ou senha inválidos." });
  }
};
