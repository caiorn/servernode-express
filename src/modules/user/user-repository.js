const db = require('../../config/connectionMySQL');

exports.getAll = async () => {
    return await db.executeQuery('SELECT * FROM usuarios');
};

exports.findById = async (id) => {
    return await db.executeQuery('SELECT * FROM usuarios WHERE id = ?', [id]);
};

exports.create = async ({ nome, email }) => {
  const [result] = await db.executeQuery(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    [nome, email]
  );
  return { id: result.insertId, nome, email };
};