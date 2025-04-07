const userServices = require('./userServices');

exports.getAll = async (req, res) => {
  try {
    const usuarios = await userServices.getAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
};

exports.findById = async (req, res) => {
  try {
    const usuario = await userServices.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuário' });
  }
}

exports.create = async (req, res) => {
  try {
    const novoUsuario = await userServices.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
};

exports.update = async (req, res) => {
  try {
    const usuarioAtualizado = await userServices.update(req.params.id, req.body);
    if (!usuarioAtualizado) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar usuário' });
  }
} 

exports.delete = async (req, res) => {
  try {
    const usuarioDeletado = await userServices.delete(req.params.id);
    if (!usuarioDeletado) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar usuário' });
  }
}