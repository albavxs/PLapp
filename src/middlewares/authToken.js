const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../routers/model");

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verificar o token
    const decoded = jwt.verify(token, "seu_segredo_aqui");

    // Buscar o usuário pelo ID contido no token
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Criptografar a nova senha
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Atualizar a senha do usuário
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Senha alterada com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Token inválido ou expirado." });
  }
};

module.exports = { resetPassword };
