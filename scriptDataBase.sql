-- Criação do banco (caso ainda não exista)
CREATE DATABASE IF NOT EXISTS teste;
USE teste;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados fictícios
INSERT INTO usuarios (nome, email) VALUES 
('Caio Almeida', 'caio.almeida@email.com'),
('Maria Souza', 'maria.souza@email.com'),
('João Pedro', 'joao.pedro@email.com');