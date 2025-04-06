const { pool } = require('../../config/connectionMySQL');

exports.getAll = async () => {
    try {
        const [rows] = await pool.execute('SELECT * FROM usuarios');
        return rows;
    }
    catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw new Error('Erro ao buscar usuários');
    }
};

exports.create = async ({ nome, email }) => {
  const [result] = await pool.execute(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    [nome, email]
  );
  return { id: result.insertId, nome, email };
};