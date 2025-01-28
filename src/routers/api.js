const express = require("express");
const cors = require("cors");
const authRoutes = require("./authRoutes"); // Supondo que você tenha um arquivo authRoutes.js
const app = express();

// Middleware para permitir o CORS
app.use(cors()); // Permite requisições de diferentes origens

// Middleware para ler JSON no corpo das requisições
app.use(express.json()); // Usado para entender os dados JSON enviados no corpo da requisição

// Middleware de Debug para registrar as requisições
app.use((req, res, next) => {
  console.log(`Método: ${req.method}, Rota: ${req.url}`);
  console.log("Corpo da requisição:", req.body); // Exibe o corpo da requisição
  next(); // Passa para o próximo middleware ou rota
});

// Middleware para garantir que todas as respostas sejam no formato JSON
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json"); // Força o cabeçalho Content-Type para JSON
  next(); // Passa para o próximo middleware ou rota
});

// Rotas de autenticação
app.use("/api/auth", authRoutes);

// Conexão com o banco de dados
const sequelize = require("./database");
sequelize
  .sync()
  .then(() => console.log("Banco de dados conectado com sucesso!"))
  .catch((err) => console.log("Erro ao conectar com o banco de dados:", err));

// Middleware global para erros
app.use((err, req, res, next) => {
  console.error("Erro não tratado:", err); // Log do erro
  res.status(500).json({
    success: false,
    message: "Erro interno no servidor.",
    error: err.message, // Lê a mensagem de erro
    stack: err.stack, // Opcional: pode incluir a stack trace do erro (útil para debug)
    request: {
      method: req.method,
      url: req.url,
      body: req.body,
    },
  });
});

// Iniciar o servidor
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
