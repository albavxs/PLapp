const bcrypt = require("bcrypt");
const User = require("../routers/model"); // Modelo de usuário
path = require("path");
// Função para autenticar o usuário
const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe no banco de dados
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    // Compara a senha fornecida com a senha criptografada no banco de dados
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    return res.status(200).json({ message: "Autenticação bem-sucedida" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};

// Função para registrar o usuário
const registerUser = async (req, res) => {
  console.log("Dados recebidos:", req.body);
  const { firstName, lastName, email, password, dob } = req.body;

  if (!firstName || !lastName || !email || !password || !dob) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email já registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dob,
    });

    res
      .status(201)
      .json({ message: "Conta criada com sucesso", user: newUser });
  } catch (error) {
    console.error("Erro ao criar:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

// Função para enviar o token
const sendRecoveryToken = async (req, res) => {
  try {
    const { email } = req.body;

    // Lógica para verificar o email e enviar o token
    // ...
    return res.status(200).json({ message: "Token enviado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao enviar o token", error });
  }
};

// Exporta todas as funções necessárias
module.exports = {
  authenticateUser,
  registerUser,

};
