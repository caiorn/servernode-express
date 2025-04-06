// Importa a aplicação configurada no app.js
const app = require('./app');
const { testarConexao } = require('./config/connectionMySQL'); // importa o teste de conexao

// Define a porta em que o servidor vai escutar (vem do .env ou usa 3000 como padrão)
const PORT = process.env.PORT || 3000;

async function startServer() {
  await testarConexao(); // testa a conexão com o banco antes de subir o servidor

  app.listen(PORT, () => {
    console.log(`🚀 servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
