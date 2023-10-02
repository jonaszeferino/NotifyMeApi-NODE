app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Verifique se o usuário existe
      const user = users.find(user => user.username === username);
  
      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
  
      // Verifique a senha
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
  
      // Gere um token JWT
      const token = jwt.sign({ username: user.username }, 'sua_chave_secreta');
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });
  