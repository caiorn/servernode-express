const userServices = require('./userServices');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await userServices.getAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const novoUsuario = await userServices.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
};