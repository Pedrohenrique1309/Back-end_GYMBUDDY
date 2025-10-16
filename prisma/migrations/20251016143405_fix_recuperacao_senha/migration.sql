-- CreateTable
CREATE TABLE `tbl_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `peso` DECIMAL(5, 2) NULL,
    `altura` DECIMAL(3, 2) NULL,
    `imc` DECIMAL(5, 2) NULL,
    `nickname` VARCHAR(150) NOT NULL,
    `data_nascimento` DATE NULL,
    `foto` VARCHAR(255) NULL,
    `descricao` TEXT NULL,
    `localizacao` TEXT NULL,
    `is_bloqueado` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `tbl_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_recuperacao_senha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tbl_recuperacao_senha_token_key`(`token`),
    INDEX `tbl_recuperacao_senha_token_idx`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_recuperacao_senha` ADD CONSTRAINT `tbl_recuperacao_senha_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
