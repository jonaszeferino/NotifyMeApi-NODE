const express = require('express');
const app = express();
const port = 3005; // Escolha a porta que desejar

app.get('/notifyMe', (req, res) => {
  const jsonContent = {
    message: 'Bem-vindo',
    content: 'Utilize o O Que Ver Agora?',
  };
  res.json(jsonContent);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
