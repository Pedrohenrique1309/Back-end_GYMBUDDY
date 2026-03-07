**🏋️‍♂️ GYM BUDDY — Backend API**


API REST desenvolvida para o sistema GYM BUDDY, uma aplicação voltada para gerenciamento de usuários em um ambiente de academia.

O backend é responsável por processar regras de negócio, autenticação de usuários, manipulação de dados e comunicação com o banco de dados, garantindo uma arquitetura organizada e escalável.

O projeto foi construído utilizando Node.js e segue o padrão RESTful, permitindo integração eficiente com aplicações frontend.

**📌 Sobre o Projeto**

O GYM BUDDY foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento backend, incluindo:

construção de APIs REST

integração com banco de dados relacional

organização de código em camadas

envio de e-mails automatizados

uso de ORM para gerenciamento de dados

Este backend fornece os serviços necessários para que o frontend da aplicação consiga gerenciar usuários e funcionalidades relacionadas ao sistema.

**🚀 Tecnologias Utilizadas**

Tecnologia	Função
Node.js	Ambiente de execução do backend
Express.js	Framework para criação da API
MySQL	Banco de dados relacional
Prisma ORM	Mapeamento e manipulação do banco
Nodemailer	Envio de e-mails
JavaScript	Linguagem principal do projeto
**🏗️ Arquitetura do Projeto**

A aplicação foi estruturada utilizando uma arquitetura modular, separando responsabilidades para facilitar manutenção e escalabilidade.

Back-end_GYMBUDDY
│
├── src
│   ├── controllers      # Controladores das requisições
│   ├── routes           # Definição das rotas da API
│   ├── services         # Regras de negócio
│   ├── middlewares      # Validações e interceptações
│   └── app.js           # Inicialização da aplicação
│
├── prisma
│   └── schema.prisma    # Estrutura do banco de dados
│
├── package.json
└── README.md
**⚙️ Instalação e Configuração**

1️⃣ Clonar o repositório
git clone https://github.com/Pedrohenrique1309/Back-end_GYMBUDDY.git
2️⃣ Acessar a pasta do projeto
cd Back-end_GYMBUDDY
3️⃣ Instalar dependências
npm install
4️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto.

Exemplo:

DATABASE_URL="mysql://usuario:senha@localhost:3306/gymbuddy"

EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha
5️⃣ Executar as migrations
npx prisma migrate dev
6️⃣ Iniciar o servidor
npm start

Servidor rodando em:

http://localhost:3000
**📡 Endpoints da API**

Usuários
Método	Rota	Descrição
POST	/usuarios	Criar novo usuário
GET	/usuarios/login	Autenticar usuário
PUT	/usuarios/:id	Atualizar dados do usuário
DELETE	/usuarios/:id	Remover usuário
**📧 Recuperação de Senha**

A API implementa um sistema de recuperação de senha via e-mail utilizando Nodemailer.

Fluxo da funcionalidade:

Usuário solicita recuperação de senha

Sistema gera um código de verificação

O código é enviado para o e-mail do usuário

Usuário utiliza o código para redefinir a senha

**🧪 Exemplo de Requisição**

Criar usuário
POST /usuarios

Body da requisição:

{
  "nome": "Pedro",
  "email": "pedro@email.com",
  "senha": "123456"
}
**🧠 Funcionalidades**

✔ Cadastro de usuários
✔ Login de usuários
✔ Atualização de dados
✔ Exclusão de conta
✔ Recuperação de senha via e-mail
✔ Integração com banco de dados

**🔗 Integração com Frontend**

Este backend foi desenvolvido para integração com o frontend do projeto GYM BUDDY.

Frontend do projeto:
https://github.com/Pedrohenrique1309/GYM_BUDDY

**👨‍💻 Autor**

Pedro Fernandes

💻 GitHub
https://github.com/Pedrohenrique1309

🔗 LinkedIn
https://www.linkedin.com/in/pedro-fernandes-954b20308/

**📄 Licença**

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.