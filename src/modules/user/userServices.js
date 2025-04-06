const userRepository = require('./user-repository');

exports.getAll = async () => {
  return await userRepository.getAll();
};

exports.createUser = async (userData) => {
  // Validação, regra de negócio, etc
  if (!userData.email.includes('@')) {
    throw new Error('Email inválido');
  }

  return await userRepository.create(userData);
};