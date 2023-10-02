const express = require('express');
const app = express();
const port = 3005;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());

// Simulando um banco de dados de usuários
const users = [];

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifique se o usuário já existe
    if (users.find(user => user.username === username)) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criptografe a senha antes de armazená-la
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crie um novo usuário
    const newUser = {
      username,
      password: hashedPassword,
    };

    // Armazene o novo usuário no "banco de dados"
    users.push(newUser);

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
