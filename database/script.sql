-- #######################################################################
-- # 0. SETUP INICIAL
-- #######################################################################
DROP DATABASE IF EXISTS db_gymbuddytcc;
CREATE DATABASE db_gymbuddytcc;
USE db_gymbuddytcc;

-- #######################################################################
-- # 1. DDL (CRIAÇÃO DE TABELAS)
-- #######################################################################

CREATE TABLE tbl_user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    peso DECIMAL(5, 2),
    altura DECIMAL(3, 2),
    imc DECIMAL(5, 2),
    nickname VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    foto VARCHAR(255),
    descricao TEXT,
    localizacao TEXT,
    is_bloqueado BOOLEAN DEFAULT FALSE -- NOVIDADE: Coluna para status de bloqueio
);

CREATE TABLE tbl_treino (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    data_treino DATETIME NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_serie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    peso DECIMAL(5, 2) NOT NULL,
    repeticoes INT NOT NULL
);

CREATE TABLE tbl_exercicio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gif VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    url_video VARCHAR(255) NOT NULL,
    grupo_muscular VARCHAR(100) NOT NULL,
    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tbl_serie(id)
);

CREATE TABLE tbl_publicacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255) NOT NULL,
    descricao VARCHAR(300),
    data_publicacao DATETIME,
    localizacao VARCHAR(300),
    curtidas_count INT DEFAULT 0,
    comentarios_count INT DEFAULT 0,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_comentario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conteudo VARCHAR(500) NOT NULL,
    data_comentario DATETIME NOT NULL,
    id_publicacao INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id),
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_curtida (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_publicacao INT NOT NULL,
    id_user INT NOT NULL,
    UNIQUE KEY uk_curtida (id_publicacao, id_user), 
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id),
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_treino_exercicio (
    id_treino INT NOT NULL,
    id_exercicio INT NOT NULL,
    PRIMARY KEY (id_treino, id_exercicio),
    FOREIGN KEY (id_treino) REFERENCES tbl_treino(id),
    FOREIGN KEY (id_exercicio) REFERENCES tbl_exercicio(id)
);

CREATE TABLE tbl_ia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_treino INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id),
    FOREIGN KEY (id_treino) REFERENCES tbl_treino(id)
);

CREATE TABLE tbl_notificacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario_destino INT NOT NULL,
    id_publicacao INT NULL,
    id_comentario INT NULL,
    tipo VARCHAR(50) NOT NULL,
    mensagem VARCHAR(255) NOT NULL,
    data_criacao DATETIME NOT NULL,
    is_lida BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_usuario_destino) REFERENCES tbl_user(id),
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id),
    FOREIGN KEY (id_comentario) REFERENCES tbl_comentarios(id)
);


-- #######################################################################
-- # 2. TRIGGERS (LÓGICA AUTOMÁTICA DE VALIDAÇÃO E CÁLCULO)
-- #######################################################################

DELIMITER $$

-- Triggers para Validação de Email e Cálculo de IMC (tbl_user)
CREATE TRIGGER trg_validar_email_user_insert
BEFORE INSERT ON tbl_user
FOR EACH ROW
BEGIN
    -- Validação de Email
    IF (NEW.email NOT LIKE '%@%') OR (NEW.email NOT LIKE '%.%') OR (LOCATE('.', NEW.email) < LOCATE('@', NEW.email)) THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Erro: O formato do e-mail é inválido. Ele deve conter "@" e "." após o "@".';
    END IF;

    -- Cálculo de IMC
    IF NEW.peso IS NOT NULL AND NEW.altura IS NOT NULL AND NEW.altura > 0 THEN
        SET NEW.imc = NEW.peso / (NEW.altura * NEW.altura);
    ELSE
        SET NEW.imc = NULL;
    END IF;
END$$

CREATE TRIGGER trg_validar_email_user_update
BEFORE UPDATE ON tbl_user
FOR EACH ROW
BEGIN
    -- Validação de Email
    IF NEW.email <> OLD.email THEN
        IF (NEW.email NOT LIKE '%@%') OR (NEW.email NOT LIKE '%.%') OR (LOCATE('.', NEW.email) < LOCATE('@', NEW.email)) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Erro: O formato do e-mail é inválido na atualização. Ele deve conter "@" e "." após o "@".';
        END IF;
    END IF;

    -- Cálculo de IMC
    IF NEW.peso <> OLD.peso OR NEW.altura <> OLD.altura THEN
        IF NEW.peso IS NOT NULL AND NEW.altura IS NOT NULL AND NEW.altura > 0 THEN
            SET NEW.imc = NEW.peso / (NEW.altura * NEW.altura);
        ELSE
            SET NEW.imc = NULL;
        END IF;
    END IF;
END$$

-- Triggers para Contagem de Comentários (tbl_publicacao)
CREATE TRIGGER trg_novo_comentario
AFTER INSERT ON tbl_comentarios
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count + 1
    WHERE id = NEW.id_publicacao;
END$$

CREATE TRIGGER trg_comentario_removido
AFTER DELETE ON tbl_comentarios
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count - 1
    WHERE id = OLD.id_publicacao;
END$$

DELIMITER ; 


-- #######################################################################
-- # 3. FUNCTIONS (LÓGICA DE CÁLCULO REUTILIZÁVEL)
-- #######################################################################

DELIMITER $$

-- Function para classificar o IMC
CREATE FUNCTION fn_classificar_imc(p_imc DECIMAL(5,2))
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    DECLARE classificacao VARCHAR(50);

    IF p_imc IS NULL THEN
        SET classificacao = 'Dados Insuficientes';
    ELSEIF p_imc < 16.0 THEN
        SET classificacao = 'Magreza Grave';
    ELSEIF p_imc >= 16.0 AND p_imc < 17.0 THEN
        SET classificacao = 'Magreza Moderada';
    ELSEIF p_imc >= 17.0 AND p_imc < 18.5 THEN
        SET classificacao = 'Magreza Leve';
    ELSEIF p_imc >= 18.5 AND p_imc < 25.0 THEN
        SET classificacao = 'Peso Normal';
    ELSEIF p_imc >= 25.0 AND p_imc < 30.0 THEN
        SET classificacao = 'Sobrepeso';
    ELSEIF p_imc >= 30.0 AND p_imc < 35.0 THEN
        SET classificacao = 'Obesidade Grau I';
    ELSEIF p_imc >= 35.0 AND p_imc < 40.0 THEN
        SET classificacao = 'Obesidade Grau II (Severa)';
    ELSE
        SET classificacao = 'Obesidade Grau III (Mórbida)';
    END IF;

    RETURN classificacao;
END$$

DELIMITER ;


-- #######################################################################
-- # 4. VIEWS (CONSULTAS SIMPLIFICADAS)
-- #######################################################################

-- View para exibir o feed principal (Publicação + Dados do Usuário)
CREATE VIEW vw_feed_publicacoes AS
SELECT
    p.id AS id_publicacao,
    p.descricao,
    p.imagem,
    p.data_publicacao,
    p.curtidas_count,
    p.comentarios_count,
    u.id AS id_user,
    u.nome AS nome_usuario,
    u.foto_perfil
FROM
    tbl_publicacao p
JOIN
    tbl_user u ON p.id_user = u.id;

-- View para resumo de treinos (Treino + Exercícios + Séries + Usuário)
CREATE VIEW vw_treinos_detalhados AS
SELECT
    t.id AS id_treino,
    t.nome AS nome_treino,
    t.data_treino,
    u.nome AS nome_usuario,
    e.nome AS nome_exercicio,
    s.nome AS nome_serie,
    s.peso AS peso_serie,
    s.repeticoes
FROM
    tbl_treino t
JOIN
    tbl_user u ON t.id_user = u.id
LEFT JOIN
    tbl_treino_exercicio te ON t.id = te.id_treino
LEFT JOIN
    tbl_exercicio e ON te.id_exercicio = e.id
LEFT JOIN
    tbl_serie s ON e.id_serie = s.id;


-- #######################################################################
-- # 5. DML (INSERÇÃO DE DADOS INICIAIS)
-- #######################################################################

INSERT INTO tbl_user (nome, email, senha, peso, altura, nickname, data_nascimento, foto_perfil)
VALUES
('João da Silva', 'joao.silva@email.com', 'senha123', 80.5, 1.80, 'joaozera', '1990-05-15', NULL),
('Maria Oliveira', 'maria.oliveria@email.com', 'senha456', 65.0, 1.65, 'maria_fit', '1995-08-22', NULL);


-- #######################################################################
-- # 6. COMANDOS DE BLOQUEIO (SELECT e UPDATE)
-- #######################################################################

-- SELECT: Consulta de verificação do status de bloqueio
-- Uso: Antes de realizar o bloqueio ou em uma tela de administração
SELECT
    id,
    nome,
    email,
    is_bloqueado
FROM
    tbl_user
WHERE
    id = 1; -- Exemplo de consulta para o usuário ID 1

-- UPDATE: Comando para BLOQUEAR um usuário
-- UPDATE tbl_user
-- SET is_bloqueado = TRUE
-- WHERE id = 1;

-- UPDATE: Comando para DESBLOQUEAR um usuário
-- UPDATE tbl_user
-- SET is_bloqueado = FALSE
-- WHERE id = 1;