CREATE DATABASE db_gymbuddytcc;

-- Crie um usuário que pode se conectar de outro IP
CREATE USER 'tcc'@'%' IDENTIFIED BY 'bcd127';

-- Dê permissões (ajuste o nome do banco)
GRANT ALL PRIVILEGES ON db_gymbuddytcc.* TO 'tcc'@'%';

-- Aplique as mudanças
FLUSH PRIVILEGES;

DROP USER 'tcc'@'%';

USE db_gymbuddytcc;

DROP DATABASE IF EXISTS db_gymbuddytcc;

CREATE DATABASE db_gymbuddytcc;

USE db_gymbuddytcc;

CREATE TABLE tbl_user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    peso DECIMAL(5, 2),
    altura DECIMAL(3, 2),
    nickname VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    foto_perfil VARCHAR(255),
    descricao_perfil TEXT
);

INSERT INTO tbl_user (nome, email, senha, peso, altura, nickname, data_nascimento, foto_perfil)
VALUES
('João da Silva', 'joao.silva@email.com', 'senha123', 80.5, 1.80, 'joaozera', '1990-05-15'),
('Maria Oliveira', 'maria.oliveria@email.com', 'senha456', 65.0, 1.65, 'maria_fit', '1995-08-22');

CREATE TABLE tbl_treino (
    id_treino INT PRIMARY KEY AUTO_INCREMENT,
    nome_treino VARCHAR(45) NOT NULL,
    data_treino DATETIME NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_serie (
    id_serie INT PRIMARY KEY AUTO_INCREMENT,
    nome_serie VARCHAR(45) NOT NULL,
    peso_serie DECIMAL(5, 2) NOT NULL,
    repeticoes INT NOT NULL
);

CREATE TABLE tbl_exercicio (
    id_exercicio INT PRIMARY KEY AUTO_INCREMENT,
    nome_exercicio VARCHAR(45) NOT NULL,
    gif_exercicio VARCHAR(45) NOT NULL,
    descricao_exercicio VARCHAR(250) NOT NULL,
    url_video VARCHAR(255) NOT NULL,
    grupo_muscular VARCHAR(100) NOT NULL,
    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tbl_serie(id_serie)
);

CREATE TABLE tbl_publicacao (
    id_publicacao INT PRIMARY KEY AUTO_INCREMENT,
    imagem_publicacao VARCHAR(100) NOT NULL,
    descricao_publicacao VARCHAR(100) NOT NULL,
    data_publicacao DATETIME NOT NULL,
    curtidas_count INT DEFAULT 0,
    comentarios_count INT DEFAULT 0,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_comentarios (
    id_comentarios INT PRIMARY KEY AUTO_INCREMENT,
    conteudo_comentario VARCHAR(500) NOT NULL,
    data_comentario DATETIME NOT NULL,
    id_publicacao INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id_publicacao),
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_curtidas (
    id_curtidas INT PRIMARY KEY AUTO_INCREMENT,
    id_publicacao INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id_publicacao),
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_treino_exercicio (
    id_treino INT NOT NULL,
    id_exercicio INT NOT NULL,
    PRIMARY KEY (id_treino, id_exercicio),
    FOREIGN KEY (id_treino) REFERENCES tbl_treino(id_treino),
    FOREIGN KEY (id_exercicio) REFERENCES tbl_exercicio(id_exercicio)
);

CREATE TABLE tbl_ia (
    id_ia INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_treino INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id),
    FOREIGN KEY (id_treino) REFERENCES tbl_treino(id_treino)
);

CREATE TABLE tbl_notificacoes (
    id_notificacao INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario_destino INT NOT NULL,
    id_publicacao INT NOT NULL,
    id_comentario INT NOT NULL,
    tipo_notificacao VARCHAR(50) NOT NULL,
    mensagem VARCHAR(255) NOT NULL,
    data_criacao DATETIME NOT NULL,
    is_lida BOOLEAN DEFAULT FALSE
);

ALTER TABLE tbl_notificacoes
ADD FOREIGN KEY (id_usuario_destino) REFERENCES tbl_user(id),
ADD FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id_publicacao),
ADD FOREIGN KEY (id_comentario) REFERENCES tbl_comentarios(id_comentarios);
DROP DATABASE IF EXISTS db_gymbuddytcc;

-- Procedures:

-- Adiciona uma nova curtida e, de forma segura, atualiza o contador na tabela de publicações.


DELIMITER $$
CREATE PROCEDURE sp_adicionar_curtida(
    IN p_id_publicacao INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_curtidas (id_publicacao, id_user)
    VALUES (p_id_publicacao, p_id_user);

    UPDATE tbl_publicacao
    SET curtidas_count = curtidas_count + 1
    WHERE id_publicacao = p_id_publicacao;
END$$
DELIMITER ;

-- Remove uma curtida e decrementa o contador.
DELIMITER $$
CREATE PROCEDURE sp_remover_curtida(
    IN p_id_publicacao INT,
    IN p_id_user INT
)
BEGIN
    DELETE FROM tbl_curtidas
    WHERE id_publicacao = p_id_publicacao AND id_user = p_id_user;

    UPDATE tbl_publicacao
    SET curtidas_count = curtidas_count - 1
    WHERE id_publicacao = p_id_publicacao;
END$$
DELIMITER ;

-- Trigger

-- Quando um novo comentário é inserido, este trigger incrementa o contador de comentários na tabela de publicações.
DELIMITER $$
CREATE TRIGGER trg_novo_comentario
AFTER INSERT ON tbl_comentarios
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count + 1
    WHERE id_publicacao = NEW.id_publicacao;
END$$
DELIMITER ;

-- Quando um comentário é removido, este trigger decrementa o contador de comentários.
DELIMITER $$
CREATE TRIGGER trg_comentario_removido
AFTER DELETE ON tbl_comentarios
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count - 1
    WHERE id_publicacao = OLD.id_publicacao;
END$$
DELIMITER ;

-- Views

-- Uma view para exibir o feed principal, combinando as informações da publicação com os dados básicos do usuário que a criou.
CREATE VIEW vw_feed_publicacoes AS
SELECT
    p.id_publicacao,
    p.descricao_publicacao,
    p.imagem_publicacao,
    p.data_publicacao,
    p.curtidas_count,
    p.comentarios_count,
    u.id_user,
    u.nome AS nome_usuario,
    u.foto_perfil
FROM
    tbl_publicacao p
JOIN
    tbl_user u ON p.id_user = u.id_user;
    
-- Uma view que mostra um resumo de cada treino de um usuário, com os exercícios e séries associados.

CREATE VIEW vw_historico_treinos AS
SELECT
    t.id_treino,
    t.nome_treino,
    t.data_treino,
    u.nome AS nome_usuario,
    e.nome_exercicio,
    e.grupo_muscular,
    s.nome_serie,
    s.peso_serie,
    s.repeticoes
FROM
    tbl_treino t
JOIN
    tbl_user u ON t.id_user = u.id_user
JOIN
    tbl_treino_exercicio te ON t.id_treino = te.id_treino
JOIN
    tbl_exercicio e ON te.id_exercicio = e.id_exercicio
JOIN
    tbl_serie s ON e.id_serie = s.id_serie;
    
-- Function

-- Calcula o Índice de Massa Corporal (IMC) com base no peso e na altura de um usuário.

DELIMITER $$
CREATE FUNCTION fn_calcular_imc(peso DECIMAL(5,2), altura DECIMAL(3,2))
RETURNS DECIMAL(5,2)
DETERMINISTIC
BEGIN
    DECLARE imc DECIMAL(5,2);
    SET imc = peso / (altura * altura);
    RETURN imc;
END$$
DELIMITER ;

ALTER TABLE tbl_ia
ADD COLUMN id_treino INT,
ADD FOREIGN KEY (id_treino) REFERENCES tbl_treino(id_treino);