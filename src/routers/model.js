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
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "last_name",
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
    googleId: {
      type: DataTypes.STRING, // Agora o googleId é opcional
      allowNull: true, // Pode ser nulo até o login via Google
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = User;
