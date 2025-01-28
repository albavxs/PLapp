require("dotenv").config(); // Carregar as variáveis do .env
const { Sequelize } = require("sequelize"); // Importar Sequelize
require("dotenv").config();
// Criar a conexão com o banco de dados usando as variáveis do .env
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco de dados
  process.env.DB_USER, // Usuário do banco
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST, // Host do banco
    dialect: process.env.DB_DIALECT, // Dialeto (mysql, postgres, etc.)
    port: process.env.DB_PORT, // Porta do banco
  }
);


// Testar a conexão com o banco
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });

module.exports = sequelize;
