const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const logger = require('../utils/logger')(__filename); 

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
    const connection = await pool.getConnection();
    try {
      logger.debug('🟢 conexão com o banco de dados estabelecida com sucesso!');
      connection.release();
    } catch (error) {
      logger.error('❌ erro ao conectar com o banco de dados:', error.message);
      process.exit(1); // encerra a aplicação se falhar
    }finally {
      if (connection) {
        connection.release(); // libera a conexão após o teste
      }
    }
  }

  async function executeQuery(sql, params = []) {
    try {
      const [results] = await pool.execute(sql, params);
      if (process.env.NODE_ENV !== 'production') {
        // informa via log tabela e comando executado
        const operation = sql.trim().split(/\s+/)[0].toUpperCase();
        const tableMatch = sql.match(/(?:FROM|INTO|UPDATE|JOIN)\s+`?(\w+)`?/i);
        const table = tableMatch ? tableMatch[1] : 'unknown';
        logger.debug(`🟢 ${operation} IN ${table}`);
      }  
      return results;
    } catch (err) {
      logger.error(`[SQL ERROR] ${sql} - ${JSON.stringify(params)}`);
      logger.error(err.message);
      throw err; // repropaga o erro para ser tratado no controller ou middleware
    }
  }

// module.exports = pool;
module.exports = {
    pool,
    testarConexao,
    executeQuery,
  };