-- #######################################################################
-- # 0. SETUP INICIAL E DROPS DE ROTINAS
-- #######################################################################
DROP DATABASE IF EXISTS db_gymbuddytcc;
CREATE DATABASE db_gymbuddytcc;
USE db_gymbuddytcc;

-- 0.1. DROPS DE FUNCTIONS, TRIGGERS E PROCEDURES (Para Garantir a Recompilação)

-- Funções
DROP FUNCTION IF EXISTS fn_classificar_imc;

-- Triggers (Necessário definir o delimitador temporariamente para os DROPs)
DELIMITER $$
DROP TRIGGER IF EXISTS trg_validar_email_user_insert$$
DROP TRIGGER IF EXISTS trg_validar_email_user_update$$
DROP TRIGGER IF EXISTS trg_novo_comentario$$
DROP TRIGGER IF EXISTS trg_comentario_removido$$
DROP TRIGGER IF EXISTS trg_notificar_novo_comentario$$
DROP TRIGGER IF EXISTS trg_notificar_curtida_publicacao$$
DROP TRIGGER IF EXISTS trg_notificar_curtida_comentario$$
DELIMITER ;

-- Procedures
DROP PROCEDURE IF EXISTS sp_adicionar_curtida_publicacao;
DROP PROCEDURE IF EXISTS sp_remover_curtida_publicacao;
DROP PROCEDURE IF EXISTS sp_adicionar_curtida_comentario;
DROP PROCEDURE IF EXISTS sp_remover_curtida_comentario;

-- Views
DROP VIEW IF EXISTS vw_feed_publicacoes;
DROP VIEW IF EXISTS vw_comentarios_publicacao;
DROP VIEW IF EXISTS vw_treinos_detalhados;
DROP VIEW IF EXISTS vw_perfil_publicacoes;
DROP VIEW IF EXISTS vw_notificacoes_detalhadas;


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
    is_bloqueado BOOLEAN DEFAULT FALSE
);

CREATE TABLE tbl_treino (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    data_treino DATETIME NOT NULL,
    id_user INT NOT NULL,
    is_ai_generated BOOLEAN DEFAULT FALSE,
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
    curtidas_count INT DEFAULT 0,
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

CREATE TABLE tbl_curtida_comentario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_comentario INT NOT NULL,
    id_user INT NOT NULL,
    UNIQUE KEY uk_curtida_comentario (id_comentario, id_user),
    FOREIGN KEY (id_comentario) REFERENCES tbl_comentario(id),
    FOREIGN KEY (id_user) REFERENCES tbl_user(id)
);

CREATE TABLE tbl_treino_exercicio (
    id_treino INT NOT NULL,
    id_exercicio INT NOT NULL,
    PRIMARY KEY (id_treino, id_exercicio),
    FOREIGN KEY (id_treino) REFERENCES tbl_treino(id),
    FOREIGN KEY (id_exercicio) REFERENCES tbl_exercicio(id)
);

CREATE TABLE tbl_notificacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario_destino INT NOT NULL,
    id_usuario_origem INT NOT NULL,
    
    id_publicacao INT NULL,
    id_comentario INT NULL,
    id_curtida INT NULL,
    id_curtida_comentario INT NULL,
    
    tipo_notificacao VARCHAR(50) NOT NULL,
    data_criacao DATETIME NOT NULL,
    is_lida BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (id_usuario_destino) REFERENCES tbl_user(id),
    FOREIGN KEY (id_usuario_origem) REFERENCES tbl_user(id),
    FOREIGN KEY (id_publicacao) REFERENCES tbl_publicacao(id),
    FOREIGN KEY (id_comentario) REFERENCES tbl_comentario(id),
    
    FOREIGN KEY (id_curtida) REFERENCES tbl_curtida(id),
    FOREIGN KEY (id_curtida_comentario) REFERENCES tbl_curtida_comentario(id)
);

CREATE TABLE tbl_recuperacao_senha (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (id_user) REFERENCES tbl_user(id),
    INDEX idx_token (token),
    INDEX idx_expiracao (data_expiracao)
);


-- #######################################################################
-- # 2. FUNCTIONS (LÓGICA DE CÁLCULO REUTILIZÁVEL)
-- #######################################################################

DELIMITER $$
CREATE FUNCTION fn_classificar_imc(p_imc DECIMAL(5,2))
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    DECLARE classificacao VARCHAR(50);

    IF p_imc IS NULL THEN
        SET classificacao = 'Dados Insuficientes';
    ELSEIF p_imc < 18.5 THEN
        SET classificacao = 'Abaixo do Peso';
    ELSEIF p_imc >= 18.5 AND p_imc < 25.0 THEN
        SET classificacao = 'Peso Normal';
    ELSEIF p_imc >= 25.0 AND p_imc < 30.0 THEN
        SET classificacao = 'Sobrepeso';
    ELSE
        SET classificacao = 'Obesidade';
    END IF;

    RETURN classificacao;
END$$
DELIMITER ;


-- #######################################################################
-- # 3. TRIGGERS (LÓGICA AUTOMÁTICA DE VALIDAÇÃO, CÁLCULO E NOTIFICAÇÃO)
-- #######################################################################

DELIMITER $$

-- 3.1. Validação de Email e Cálculo de IMC (tbl_user)
CREATE TRIGGER trg_validar_email_user_insert
BEFORE INSERT ON tbl_user
FOR EACH ROW
BEGIN
    IF (NEW.email NOT LIKE '%@%') OR (NEW.email NOT LIKE '%.%') THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Erro: O formato do e-mail é inválido.';
    END IF;

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
    IF NEW.email <> OLD.email THEN
        IF (NEW.email NOT LIKE '%@%') OR (NEW.email NOT LIKE '%.%') THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Erro: O formato do e-mail é inválido na atualização.';
        END IF;
    END IF;

    IF NEW.peso <> OLD.peso OR NEW.altura <> OLD.altura THEN
        IF NEW.peso IS NOT NULL AND NEW.altura IS NOT NULL AND NEW.altura > 0 THEN
            SET NEW.imc = NEW.peso / (NEW.altura * NEW.altura);
        ELSE
            SET NEW.imc = NULL;
        END IF;
    END IF;
END$$

-- 3.2. Contagem de Comentários (tbl_publicacao)
CREATE TRIGGER trg_novo_comentario
AFTER INSERT ON tbl_comentario
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count + 1
    WHERE id = NEW.id_publicacao;
END$$

CREATE TRIGGER trg_comentario_removido
AFTER DELETE ON tbl_comentario
FOR EACH ROW
BEGIN
    UPDATE tbl_publicacao
    SET comentarios_count = comentarios_count - 1
    WHERE id = OLD.id_publicacao;
END$$

-- 3.3. Notificações

-- Notificação em caso de novo comentário
CREATE TRIGGER trg_notificar_novo_comentario
AFTER INSERT ON tbl_comentario
FOR EACH ROW
BEGIN
    DECLARE v_id_destino INT;

    SELECT id_user INTO v_id_destino
    FROM tbl_publicacao
    WHERE id = NEW.id_publicacao;

    IF v_id_destino <> NEW.id_user THEN
        INSERT INTO tbl_notificacao (
            id_usuario_destino, id_usuario_origem, id_publicacao, id_comentario, tipo_notificacao, data_criacao
        )
        VALUES (
            v_id_destino, NEW.id_user, NEW.id_publicacao, NEW.id, 'COMENTARIO', NOW()
        );
    END IF;
END$$

-- Notificação em caso de nova curtida em Publicação
CREATE TRIGGER trg_notificar_curtida_publicacao
AFTER INSERT ON tbl_curtida
FOR EACH ROW
BEGIN
    DECLARE v_id_destino INT;

    SELECT id_user INTO v_id_destino
    FROM tbl_publicacao
    WHERE id = NEW.id_publicacao;

    IF v_id_destino <> NEW.id_user THEN
        INSERT INTO tbl_notificacao (
            id_usuario_destino, id_usuario_origem, id_publicacao, tipo_notificacao, data_criacao, id_curtida
        )
        VALUES (
            v_id_destino, NEW.id_user, NEW.id_publicacao, 'CURTIDA_PUBLI', NOW(), NEW.id
        );
    END IF;
END$$

-- Notificar em curtida de comentário
CREATE TRIGGER trg_notificar_curtida_comentario
AFTER INSERT ON tbl_curtida_comentario
FOR EACH ROW
BEGIN
    DECLARE v_id_destino INT;
    DECLARE v_id_publicacao INT;

    SELECT id_user, id_publicacao INTO v_id_destino, v_id_publicacao
    FROM tbl_comentario
    WHERE id = NEW.id_comentario;

    IF v_id_destino <> NEW.id_user THEN
        INSERT INTO tbl_notificacao (
            id_usuario_destino, id_usuario_origem, id_publicacao, id_comentario, tipo_notificacao, data_criacao, id_curtida_comentario
        )
        VALUES (
            v_id_destino, NEW.id_user, v_id_publicacao, NEW.id_comentario, 'CURTIDA_COMEN', NOW(), NEW.id
        );
    END IF;
END$$

DELIMITER ;


-- #######################################################################
-- # 4. PROCEDURES (LÓGICA TRANSACIONAL: CURTIDAS)
-- #######################################################################

DELIMITER $$

-- 4.1. Curtidas em Publicação
CREATE PROCEDURE sp_adicionar_curtida_publicacao(
    IN p_id_publicacao INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_curtida (id_publicacao, id_user)
    VALUES (p_id_publicacao, p_id_user);

    UPDATE tbl_publicacao
    SET curtidas_count = curtidas_count + 1
    WHERE id = p_id_publicacao;
END$$

CREATE PROCEDURE sp_remover_curtida_publicacao(
    IN p_id_publicacao INT,
    IN p_id_user INT
)
BEGIN
    DELETE FROM tbl_curtida
    WHERE id_publicacao = p_id_publicacao AND id_user = p_id_user;

    UPDATE tbl_publicacao
    SET curtidas_count = curtidas_count - 1
    WHERE id = p_id_publicacao;
END$$

-- 4.2. Curtidas em Comentário
CREATE PROCEDURE sp_adicionar_curtida_comentario(
    IN p_id_comentario INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_curtida_comentario (id_comentario, id_user)
    VALUES (p_id_comentario, p_id_user);

    UPDATE tbl_comentario
    SET curtidas_count = curtidas_count + 1
    WHERE id = p_id_comentario;
END$$

CREATE PROCEDURE sp_remover_curtida_comentario(
    IN p_id_comentario INT,
    IN p_id_user INT
)
BEGIN
    DELETE FROM tbl_curtida_comentario
    WHERE id_comentario = p_id_comentario AND id_user = p_id_user;

    UPDATE tbl_comentario
    SET curtidas_count = curtidas_count - 1
    WHERE id = p_id_comentario;
END$$

DELIMITER ;


-- #######################################################################
-- # 5. VIEWS (CONSULTAS SIMPLIFICADAS E OTIMIZADAS)
-- #######################################################################

-- View para exibir o feed principal (Publicação + Dados do Usuário)
CREATE VIEW vw_feed_publicacoes AS
SELECT
    p.id AS id_publicacao,
    p.descricao,
    p.imagem,
    p.data_publicacao,
    p.localizacao,
    p.curtidas_count,
    p.comentarios_count,
    u.id AS id_user,
    u.nome AS nome_usuario,
    u.foto AS foto_perfil
FROM
    tbl_publicacao p
JOIN
    tbl_user u ON p.id_user = u.id;

-- View para carregar os comentários de uma publicação específica
CREATE VIEW vw_comentarios_publicacao AS
SELECT
    c.id AS id_comentarios,
    c.id_publicacao,
    c.conteudo AS conteudo_comentario,
    c.data_comentario,
    c.curtidas_count,
    u.id AS id_user,
    u.nome AS nome_usuario,
    u.foto AS foto_perfil
FROM
    tbl_comentario c
JOIN
    tbl_user u ON c.id_user = u.id
ORDER BY
    c.data_comentario DESC;

-- View para resumo de treinos (Treino + Exercícios + Séries + Usuário)
CREATE VIEW vw_treinos_detalhados AS
SELECT
    t.id AS id_treino,
    t.nome AS nome_treino,
    t.data_treino,
    u.nome AS nome_usuario,
    e.nome AS nome_exercicio,
    e.grupo_muscular,
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

-- View para exibir o perfil completo do usuário e todas as suas publicações
CREATE VIEW vw_perfil_publicacoes AS
SELECT
    u.id AS id_user,
    u.nome AS nome_usuario,
    u.nickname,
    u.foto,
    u.descricao,
    u.data_nascimento,
    u.localizacao,
    u.imc,
    u.is_bloqueado,
    p.id AS id_publicacao,
    p.imagem AS foto_publicada,
    p.descricao AS descricao_publicacao,
    p.data_publicacao,
    p.curtidas_count,
    p.comentarios_count
FROM
    tbl_user u
LEFT JOIN
    tbl_publicacao p ON u.id = p.id_user
ORDER BY
    u.id, p.data_publicacao DESC;

-- View para as notificações
CREATE VIEW vw_notificacoes_detalhadas AS
SELECT
    n.id,
    n.id_usuario_destino,
    n.id_usuario_origem,
    u.nickname AS nickname_origem,
    n.tipo_notificacao,
    n.data_criacao,
    n.is_lida,
    n.id_publicacao,
    n.id_comentario,
    
    CASE n.tipo_notificacao
        WHEN 'COMENTARIO' THEN CONCAT(u.nickname, ' comentou na sua publicação.')
        WHEN 'CURTIDA_PUBLI' THEN CONCAT(u.nickname, ' curtiu sua publicação.')
        WHEN 'CURTIDA_COMEN' THEN CONCAT(u.nickname, ' curtiu seu comentário.')
        
        ELSE 'Você tem uma nova notificação.'
    END AS texto_notificacao
    
FROM
    tbl_notificacao n
JOIN
    tbl_user u ON n.id_usuario_origem = u.id
ORDER BY
    n.data_criacao DESC;

-- #######################################################################
-- # 6. DML (INSERÇÃO DE DADOS INICIAIS)
-- #######################################################################

INSERT INTO tbl_user (nome, email, senha, peso, altura, nickname, data_nascimento, foto)
VALUES
('João da Silva', 'joao.silva@email.com', 'senha123', 80.5, 1.80, 'joaozera', '1990-05-15', NULL),
('Maria Oliveira', 'maria.oliveria@email.com', 'senha456', 65.0, 1.65, 'maria_fit', '1995-08-22', NULL);