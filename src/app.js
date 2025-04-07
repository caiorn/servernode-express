// Importa os módulos necessários
const express = require('express');
const routes = require('./routes');  // importa o index.js da pasta routes
const logger = require('./utils/logger')(__filename); // importa o logger para logar mensagens no console

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
app.use('/api', routes);
// Rota de teste para ver as variáveis de ambiente carregadas

// Rota para listar rotas em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.json(envVars);     
  });
}


// Exporta o app para ser usado no server.js e em testes
module.exports = app;
