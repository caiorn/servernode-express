const db = require('../../config/connectionMySQL');

exports.getAll = async () => {
    return await db.executeQuery('SELECT * FROM usuarios');
};

exports.findById = async (id) => {
    return await db.executeQuery('SELECT * FROM usuarios WHERE id = ?', [id]);
};

exports.create = async ({ nome, email, senha }) => {
  const result = await db.executeQuery(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return { id: result.insertId, nome, email, senha };
};

exports.update = async (id, { nome, email, senha }) => {
    const result = await db.executeQuery(
        'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?',
        [nome, email, senha, id]
    );
    return { id, nome, email, senha };
} 

exports.delete = async (id) => {
    const result = await db.executeQuery(
        'DELETE FROM usuarios WHERE id = ?',
        [id]
    );
    return { id };
} 