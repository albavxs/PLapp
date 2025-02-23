const { google } = require("googleapis");
const User = require("../routers/model");

// Configuração do cliente OAuth2
const oauth2Client = new google.auth.OAuth2(
  "887525463720-3muju51cf5e6g4hi2mvvk9b4nuh06g17.apps.googleusercontent.com",
  "", // Sem client secret
  "com.pegui.primeLook://auth/callback"
);

const googleLogin = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["openid", "email", "profile"],
  });

  console.log("Redirecionando para URL de autorização:", authUrl);
  res.status(200).json({ authUrl });
};

const googleCallback = async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res
      .status(400)
      .json({ message: "Código de autenticação não encontrado." });
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience:
        "887525463720-3muju51cf5e6g4hi2mvvk9b4nuh06g17.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const {
      sub: googleId,
      email,
      given_name: firstName,
      family_name: lastName,
      picture: avatar,
    } = payload;

    let user = await User.findOne({ where: { googleId } });

    if (!user) {
      const { device_id: deviceId, device_name: deviceName } = req.body || {};
      user = await User.create({
        googleId,
        email,
        firstName,
        lastName,
        avatar,
        deviceId,
        deviceName,
      });
    }

    res.status(200).json({
      message: "Login com Google realizado com sucesso.",
      userData: { email, name: `${firstName} ${lastName}` },
    });
  } catch (error) {
    console.error("Erro ao autenticar com Google:", error);
    res.status(500).json({ message: "Erro na autenticação.", error });
  }
};

module.exports = { googleLogin, googleCallback };
