const express = require('express');
const dotenv = require('dotenv');
const UserRouters = require('./routes/UserRouters.js');

// Carrega o arquivo .env específico com base na variável de ambiente
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const app = express();
const PORT = process.env.PORT || 3000;
const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};

app.use(express.json());
app.use('/api', UserRouters);


app.get('/', (req, res) => {
  console.log(req.body);
  res.json(envVars);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}, Ambiente: ${process.env.NODE_ENV}`);
});

