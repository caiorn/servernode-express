// Carrega variáveis de ambiente de acordo com o ambiente (development, production, etc)
require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// Importa a aplicação configurada no app.js
const app = require('./app');
const { testarConexao } = require('./config/connectionMySQL'); // importa o teste de conexao
const logger = require('./utils/logger')(__filename);

// Define a porta em que o servidor vai escutar (vem do .env ou usa 3000 como padrão)
const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  logger.info(`🚀 Servidor : http://localhost:${PORT}`);
  logger.info('🌍 Ambiente : '+ process.env.NODE_ENV,);

  await testarConexao();
});
