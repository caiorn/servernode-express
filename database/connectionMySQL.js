const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Carrega o arquivo .env específico com base na variável de ambiente
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const pool = mysql.createPool(process.env.DB_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  async function testarConexao() {
    try {
      const connection = await pool.getConnection();
      console.log('✅ conexão com o banco de dados estabelecida com sucesso!');
      connection.release();
    } catch (error) {
      console.error('❌ erro ao conectar com o banco de dados:', error.message);
      process.exit(1); // encerra a aplicação se falhar
    }
  }

// module.exports = pool;
module.exports = {
    pool,
    testarConexao,
  };