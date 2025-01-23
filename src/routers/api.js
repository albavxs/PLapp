const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./authRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use("/api/auth", authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
