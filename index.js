const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Habilita CORS
app.use(cors());

// Simulando o banco de dados com JSON
const cards = require('./cards.json');

// Rota para acessar os dados
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
