## Pré-requisitos para rodar localmente

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/albavxs/PLapp.git
   cd PLapp
   ```

2. **Node.js**:  Certifique-se de que o [Node.js](https://nodejs.org/) está instalado no seu sistema.
   
3. **Android Studio**: Certifique-se de que o [Android Studio](https://developer.android.com/) está instalado no seu sistema.
   
   Passos para rodar no Android Studio (emulador):
   1. Abra o Android Studio.
   2. Vá até **Tools > AVD Manager** (Android Virtual Device Manager).
   3. Clique em **Create Virtual Device**.
   4. Escolha o tipo de dispositivo (por exemplo, Pixel 4, versao 34 recomendada) e clique em **Next**.
   5. Inicie o dispositivo.

4. **Xcode (somente macOS)**:
   Certifique-se de que o Xcode está instalado no seu sistema.
   1. Abra o Xcode e vá até **Xcode > Preferences > Locations** para garantir que a linha de comando do Xcode está configurada corretamente.
   2. Simulador iOS: Abra o Xcode, clique em **Xcode > Open Developer Tool > Simulator**. Isso abrirá o simulador de dispositivos iOS, onde você pode rodar seu app em um dispositivo   simulado. 


5. **Dependências do Projeto**: Instale as dependências do projeto com:
   ```bash
   npm install
   ```
   
6. **Dependências da API **: Instale as dependências com:
   ```bash
   npm install express
   npm install axios
   npm install cors
   npm install sequelize
   npm install mysql2
   npm install bcrypt
   npm install bcryptjs
   npm install jsonwebtoken 
   npm install dotenv
   npm install @sendgrid/mail
   ```

# API de Autenticação - Documentação

Esta é uma API de autenticação básica que permite que usuários realizem login. A estrutura está organizada em arquivos modulares para facilitar a manutenção e expansão futura.

---

## **Estrutura do Projeto**

```
/src
  /controllers
    authController.js
  /routes
    authRoutes.js
  /middlewares
    validate.js
  /utils
    database.js
  index.js
```

---

## **1. authController.js**
Este arquivo é responsável por implementar a lógica do login.

```javascript
// src/controllers/authController.js

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  // Simulação de autenticação (substitua por consulta ao banco de dados)
  if (email === "teste@email.com" && password === "senha123") {
    return res.status(200).json({ message: "Login bem-sucedido!" });
  } else {
    return res.status(401).json({ message: "Email ou senha inválidos." });
  }
};
```

---

## **2. validate.js**
Middleware para validação dos dados antes de encaminhá-los ao controlador.

```javascript
// src/middlewares/validate.js

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  next(); // Continua para o próximo middleware ou controlador
};
```

---

## **3. authRoutes.js**
Define as rotas de autenticação e conecta o middleware e o controlador.

```javascript
// src/routes/authRoutes.js

const express = require("express");
const { login } = require("../controllers/authController");
const { validateLogin } = require("../middlewares/validate");

const router = express.Router();

// Rota de login com validação
router.post("/login", validateLogin, login);

module.exports = router;
```

---

## **4. index.js**
Arquivo principal do servidor. Conecta as rotas e inicia o servidor.

```javascript
// src/index.js

const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rotas de autenticação
app.use("/api/auth", authRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## **Como Usar**



### **1. Iniciar o Servidor**
Execute o seguinte comando para iniciar o servidor:
```bash
node src/routers/api.js
```

O servidor estará rodando em `http://localhost:3000`.

### **2. Endpoints Disponíveis**

#### **POST /api/auth/login**
- **Descrição**: Endpoint para login de usuários.
- **Corpo da Requisição**:
  ```json
  {
    "email": "teste@email.com",
    "password": "senha123"
  }
  ```
- **Respostas**:
  - `200 OK`: Login bem-sucedido.
    ```json
    {
      "message": "Login bem-sucedido!"
    }
    ```
  - `400 Bad Request`: Email ou senha ausentes.
    ```json
    {
      "message": "Email e senha são obrigatórios."
    }
    ```
  - `401 Unauthorized`: Credenciais inválidas.
    ```json
    {
      "message": "Email ou senha inválidos."
    }
    ```



