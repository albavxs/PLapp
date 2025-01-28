const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      // Alterado para 'firstName'
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "first_name", // Mapeia para a coluna 'first_name' no banco de dados
    },
    lastName: {
      // Alterado para 'lastName'
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "last_name", // Mapeia para a coluna 'last_name' no banco de dados
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "users", // A tabela no banco de dados ainda usa o nome 'users'
    timestamps: true, // Ativa o gerenciamento automático de createdAt e updatedAt
    createdAt: "created_at", // Nome personalizado para o campo createdAt
    updatedAt: "updated_at", // Nome personalizado para o campo updatedAt
  }
);

module.exports = User;
