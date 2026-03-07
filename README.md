🏋️‍♂️ GYM BUDDY - Backend

API desenvolvida para o sistema GYM BUDDY, responsável por gerenciar usuários e funcionalidades relacionadas ao aplicativo de academia.

Este projeto foi desenvolvido com foco em arquitetura de APIs REST, permitindo comunicação eficiente entre o frontend e o banco de dados, utilizando operações como GET, POST, PUT e DELETE.

O objetivo da API é fornecer uma estrutura segura e organizada para manipulação de dados da aplicação.

🚀 Tecnologias Utilizadas

Node.js

Express

MySQL

Prisma ORM

Nodemailer

JavaScript

REST API

Essas tecnologias foram utilizadas para criar uma API escalável, organizada e de fácil manutenção.

📂 Estrutura do Projeto
Back-end_GYMBUDDY
│
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middlewares
│   └── app.js
│
├── prisma
│   └── schema.prisma
│
├── package.json
└── README.md

Descrição das pastas

controllers → lógica das requisições

routes → definição das rotas da API

services → regras de negócio

middlewares → validações e tratamento de requisições

prisma → configuração do banco de dados

⚙️ Instalação e Configuração
1️⃣ Clonar o repositório
git clone https://github.com/Pedrohenrique1309/Back-end_GYMBUDDY.git
2️⃣ Entrar na pasta do projeto
cd Back-end_GYMBUDDY
3️⃣ Instalar as dependências
npm install
4️⃣ Configurar variáveis de ambiente

Crie um arquivo .env com as configurações do banco de dados.

Exemplo:

DATABASE_URL="mysql://usuario:senha@localhost:3306/gymbuddy"
EMAIL_USER=seu_email
EMAIL_PASS=sua_senha
5️⃣ Executar as migrations do Prisma
npx prisma migrate dev
6️⃣ Iniciar o servidor
npm start
📡 Endpoints da API
Usuário
Criar usuário
POST /usuarios
Login
GET /usuarios/login
Atualizar usuário
PUT /usuarios/:id
Deletar usuário
DELETE /usuarios/:id
📧 Recuperação de Senha

O sistema utiliza Nodemailer para envio de e-mails com código de recuperação de senha.

Fluxo:

Usuário solicita recuperação

Sistema gera código

Código é enviado para o e-mail do usuário

Usuário redefine a senha

🧠 Funcionalidades

✔ Cadastro de usuários
✔ Login de usuário
✔ Atualização de dados
✔ Exclusão de conta
✔ Recuperação de senha por e-mail
✔ Integração com banco de dados

👨‍💻 Autor

Pedro Fernandes

GitHub:
https://github.com/Pedrohenrique1309

LinkedIn:
https://www.linkedin.com/in/pedro-fernandes-954b20308/
