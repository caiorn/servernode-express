const productRepository = require('./product-repository');

exports.getAll = async () => {
    return await productRepository.getAll();
}

exports.findById = async (id) => {
    return await productRepository.findById(id);
}

exports.create = async ({ nome, preco, quantidade }) => {
    return await productRepository.create({ nome, preco, quantidade });
}

exports.update = async (id, { nome, preco, quantidade }) => {
    return await productRepository.update(id, { nome, preco, quantidade });
}

exports.delete = async (id) => {
    return await productRepository.delete(id);
}
