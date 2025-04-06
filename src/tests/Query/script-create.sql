-- Criação do banco (caso ainda não exista)
CREATE DATABASE IF NOT EXISTS teste;
USE teste;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  quantidade INT NOT NULL
);


-- Inserção de dados fictícios
INSERT INTO usuarios (nome, email) VALUES 
('Caio Almeida', 'caio.almeida@email.com'),
('Maria Souza', 'maria.souza@email.com'),
('João Pedro', 'joao.pedro@email.com');

-- Inserção de dados fictícios na tabela de produtos
INSERT INTO produtos (nome, preco, quantidade) VALUES
('Notebook Dell', 3500.00, 10),
('Smartphone Samsung', 2500.00, 15),
('Smart TV LG', 4000.00, 5),
('Fone de Ouvido JBL', 200.00, 50),
('Teclado Mecânico', 300.00, 20),
('Mouse Gamer', 150.00, 30),
('Monitor 24 Polegadas', 800.00, 12),
('Cadeira Gamer', 1200.00, 8),
('Impressora HP', 600.00, 10),
('Tablet Apple', 3000.00, 7),
('Caixa de Som Bluetooth', 250.00, 25),
('HD Externo 1TB', 400.00, 18),
('Pendrive 64GB', 50.00, 40),
('Carregador Portátil', 100.00, 35),
('Roteador Wi-Fi', 150.00, 22),
('Webcam Full HD', 200.00, 14),
('Microfone Condensador', 350.00, 10),
('Controle Xbox', 300.00, 12),
('Placa de Vídeo GTX 1660', 2000.00, 6),
('Processador Intel i5', 1500.00, 9);

