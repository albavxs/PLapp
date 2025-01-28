const bcrypt = require("bcrypt");
const User = require("../routers/model"); // Modelo de usuário

// Função para autenticar o usuário
const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
      
    // Verifica se o usuário existe no banco de dados
    const user = await User.findOne({ where: { email } });


  console.log("Verificando senha...");
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    console.log("Senha correta, autenticando...");
    return res.status(200).json({ message: "Autenticação bem-sucedida", userId: user.id });
  } else {
    console.log("Senha incorreta.");
    return res.status(400).json({ message: "Senha incorreta" });
  }
} catch (error) {
  console.error("Erro ao autenticar:", error);
  return res.status(500).json({ message: "Erro no servidor", error: error.message });
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


// Exporta todas as funções necessárias
module.exports = {
  authenticateUser,
  registerUser,

};
