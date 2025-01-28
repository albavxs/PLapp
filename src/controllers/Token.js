const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const User = require("../routers/model");
require("dotenv").config();

// Configura a API Key do SendGrid
sgMail.setApiKey(process.env.API_key);

// Função para enviar o token de recuperação de senha
const sendRecoveryToken = async (req, res) => {
  const { email } = req.body;

  try {
    // Verifica se o usuário existe no banco
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Gera um token JWT para recuperação de senha
    const token = jwt.sign({ userId: user.id }, "seu_segredo_aqui", {
      expiresIn: "1h", // O token expira em 1 hora
    });

    // Configura o e-mail
    const msg = {
      to: email, // Destinatário
      from: "primelook00@gmail.com", // Remetente (verificado no SendGrid)
      subject: "Token de Recuperação de Senha",
      text: `
        Aqui está o seu token para recuperação de senha:
        ${token}
        
        Use esse token no app para redefinir sua senha. O token é válido por 1 hora.
        
        Se você não solicitou a recuperação de senha, ignore este e-mail.
      `,
    };

    // Envia o e-mail
    await sgMail.send(msg);

    return res.status(200).json({ message: "Token enviado para seu email." });
  } catch (error) {
    console.error("Erro ao enviar o token:", error);
    return res.status(500).json({ message: "Erro ao enviar o email." });
  }
};

module.exports = { sendRecoveryToken };
