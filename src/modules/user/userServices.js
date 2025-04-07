const userRepository = require('./user-repository');

exports.getAll = async () => {
  return await userRepository.getAll();
};

exports.findById = async (id) => {
  return await userRepository.findById(id);
};

exports.create = async (userData) => {
  // Validação, regra de negócio, etc
  if (!userData.email.includes('@')) {
    throw new Error('Email inválido');
  }

  return await userRepository.create(userData);
};

exports.update = async (id, userData) => {
  // Validação, regra de negócio, etc
  if (!userData.email.includes('@')) {
    throw new Error('Email inválido');
  }

  return await userRepository.update(id, userData);
}

exports.delete = async (id) => {
  return await userRepository.delete(id);
};

