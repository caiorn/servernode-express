const productServices = require('./productServices');

exports.getAllProducts = async (req, res) => {
  try {
    const produtos = await productServices.getAll();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
}

exports.getProductById = async (req, res) => {
    try {
      const produto = await productServices.findById(req.params.id);
      if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
      }
      res.json(produto);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar produto' });
    }
  }

exports.createProduct = async (req, res) => {
  try {
    const novoProduto = await productServices.create(req.body);
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar produto' });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const produtoAtualizado = await productServices.update(req.params.id, req.body);
    if (!produtoAtualizado) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar produto' });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const produtoDeletado = await productServices.delete(req.params.id);
    if (!produtoDeletado) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar produto' });
  }
}