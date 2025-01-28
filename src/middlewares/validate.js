const bcrypt = require("bcryptjs"); // Se for necessário comparar senhas criptografadas
const User = require("../routers/model"); // Modelo do usuário

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Email ou senha inválidos." });
    }

    // Verificar se a senha corresponde (caso esteja criptografada)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email ou senha inválidos." });
    }

    // Aqui você pode gerar e retornar um token JWT se estiver usando autenticação baseada em token
    return res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    return res.status(500).json({ message: "Erro ao autenticar usuário." });
  }
};

module.exports = { loginUser };
