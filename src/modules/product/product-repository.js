const db = require('../../config/connectionMySQL');

exports.getAll = async () => {
    return await db.executeQuery('SELECT * FROM produtos');
};

exports.findById = async (id) => {
    return await db.executeQuery('SELECT * FROM produtos WHERE id = ?', [id]);
};

exports.create = async ({ nome, preco, quantidade }) => {
  const result = await db.executeQuery(
    'INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)',
    [nome, preco, quantidade]
  );
  return { id: result.insertId, nome, preco, quantidade };
};

exports.update = async (id, { nome, preco, quantidade }) => {
    const result = await db.executeQuery(
        'UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id = ?',
        [nome, preco, quantidade, id]
    );
    return { id, nome, preco, quantidade };
}

exports.delete = async (id) => {
    const result = await db.executeQuery(
        'DELETE FROM produtos WHERE id = ?',
        [id]
    );
    return { id };
}