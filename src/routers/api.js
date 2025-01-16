const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Armazenando usuários em memória (apenas para exemplo)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

// 1. Endpoint GET /users - Lista todos os usuários
app.get("/users", (req, res) => {
  res.json(users);
});

// 2. Endpoint POST /users - Cria um novo usuário
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({ message: "User created", data: newUser });
});

// 3. Endpoint PUT /users/:id - Atualiza um usuário específico
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userId = parseInt(id, 10);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const updatedUser = { ...users[userIndex], name, email };
  users[userIndex] = updatedUser;

  res.json({ message: "User updated", data: updatedUser });
});

// 4. Endpoint DELETE /users/:id - Exclui um usuário específico
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1); // Remove o usuário do array
  res.json({ message: "User deleted" });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
