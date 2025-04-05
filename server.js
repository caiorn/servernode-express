const express = require('express');
const dotenv = require('dotenv');

// Carrega o arquivo .env específico com base na variável de ambiente
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const app = express();
const PORT = process.env.PORT || 3000;

const envVars = Object.keys(process.env).reduce((acc, key) => {
    acc[key] = process.env[key];
    return acc;
  }, {});

app.get('/', (req, res) => {
  res.send(`${JSON.stringify(envVars, null, 2)}`);
  //res.send(`Rodando na porta ${PORT} - Ambiente: ${process.env.NODE_ENV}<br>${JSON.stringify(envVars, null, 2)}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}, Ambiente: ${process.env.NODE_ENV}`);
});