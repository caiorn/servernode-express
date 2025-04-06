// Importa os módulos necessários
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRouter'); // Importa as rotas de usuário

// Carrega variáveis de ambiente de acordo com o ambiente (development, production, etc)
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// Cria a instância do Express (essa será a "app" da aplicação)
const app = express();

// (apenas para debug/teste)
const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
};

// Configura o Express para aceitar requisições JSON
app.use(express.json());

// Define a rota principal da API (prefixo /api) para os endpoints de usuário
app.use('/api', userRoutes);

// Rota de teste para ver as variáveis de ambiente carregadas
app.get('/', (req, res) => {
  console.log(req.body); // Apenas para verificar o corpo da requisição (útil em testes)
  res.json(envVars);     // Retorna os dados das variáveis de ambiente
});

// Exporta o app para ser usado no server.js e em testes
module.exports = app;
