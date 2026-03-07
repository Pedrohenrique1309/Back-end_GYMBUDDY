<h1 align="center">🏋️‍♂️ GYM BUDDY — Backend API</h1>

<p align="center">
API REST desenvolvida para o sistema <b>GYM BUDDY</b>, uma aplicação voltada para gerenciamento de usuários em ambiente de academia.
</p>

<p align="center">
Backend responsável por autenticação, regras de negócio, manipulação de dados e comunicação com banco de dados.
</p>

<p align="center">
Construído com <b>Node.js</b> seguindo o padrão <b>RESTful</b>.
</p>

---

<h2>📌 Sobre o Projeto</h2>

<p>
O <b>GYM BUDDY</b> foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento backend:
</p>

<ul>
<li>Construção de APIs REST</li>
<li>Integração com banco de dados relacional</li>
<li>Organização de código em camadas</li>
<li>Envio de e-mails automatizados</li>
<li>Uso de ORM para manipulação de dados</li>
</ul>

<p>
Este backend fornece os serviços necessários para que o frontend da aplicação consiga gerenciar usuários e funcionalidades do sistema.
</p>

---

<h2>🚀 Tecnologias Utilizadas</h2>

<p align="center">
<img src="https://skillicons.dev/icons?i=nodejs,express,mysql,js" />
</p>

<table align="center">
<tr>
<th>Tecnologia</th>
<th>Função</th>
</tr>

<tr>
<td>Node.js</td>
<td>Ambiente de execução do backend</td>
</tr>

<tr>
<td>Express.js</td>
<td>Framework para criação da API</td>
</tr>

<tr>
<td>MySQL</td>
<td>Banco de dados relacional</td>
</tr>

<tr>
<td>Prisma ORM</td>
<td>Mapeamento e manipulação do banco</td>
</tr>

<tr>
<td>Nodemailer</td>
<td>Envio de e-mails</td>
</tr>

<tr>
<td>JavaScript</td>
<td>Linguagem principal</td>
</tr>

</table>

---

<h2>🏗️ Arquitetura do Projeto</h2>

<pre>
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
</pre>

---

<h2>⚙️ Instalação e Configuração</h2>

<h3>1️⃣ Clonar o repositório</h3>

<pre>
git clone https://github.com/Pedrohenrique1309/Back-end_GYMBUDDY.git
</pre>

<h3>2️⃣ Entrar na pasta</h3>

<pre>
cd Back-end_GYMBUDDY
</pre>

<h3>3️⃣ Instalar dependências</h3>

<pre>
npm install
</pre>

<h3>4️⃣ Criar arquivo .env</h3>

<pre>
DATABASE_URL="mysql://usuario:senha@localhost:3306/gymbuddy"

EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha
</pre>

<h3>5️⃣ Executar migrations</h3>

<pre>
npx prisma migrate dev
</pre>

<h3>6️⃣ Iniciar servidor</h3>

<pre>
npm start
</pre>

<p>
Servidor rodando em:
</p>

<pre>
http://localhost:3000
</pre>

---

<h2>📡 Endpoints da API</h2>

<table align="center">

<tr>
<th>Método</th>
<th>Rota</th>
<th>Descrição</th>
</tr>

<tr>
<td>POST</td>
<td>/usuarios</td>
<td>Criar usuário</td>
</tr>

<tr>
<td>GET</td>
<td>/usuarios/login</td>
<td>Autenticar usuário</td>
</tr>

<tr>
<td>PUT</td>
<td>/usuarios/:id</td>
<td>Atualizar dados</td>
</tr>

<tr>
<td>DELETE</td>
<td>/usuarios/:id</td>
<td>Remover usuário</td>
</tr>

</table>

---

<h2>📧 Recuperação de Senha</h2>

<p>
A API possui um sistema de recuperação de senha utilizando <b>Nodemailer</b>.
</p>

<p><b>Fluxo:</b></p>

<ol>
<li>Usuário solicita recuperação</li>
<li>Sistema gera código de verificação</li>
<li>Código é enviado por e-mail</li>
<li>Usuário redefine a senha</li>
</ol>

---

<h2>🧪 Exemplo de Requisição</h2>

<h3>Criar usuário</h3>

<pre>
POST /usuarios
</pre>

<pre>
{
 "nome": "Pedro",
 "email": "pedro@email.com",
 "senha": "123456"
}
</pre>

---

<h2>🧠 Funcionalidades</h2>

<ul>
<li>Cadastro de usuários</li>
<li>Login</li>
<li>Atualização de dados</li>
<li>Exclusão de conta</li>
<li>Recuperação de senha via e-mail</li>
<li>Integração com banco de dados</li>
</ul>

---

<h2>🔗 Integração com Frontend</h2>

<p>
Frontend do projeto:
</p>

<p>
<a href="https://github.com/Pedrohenrique1309/GYM_BUDDY">
https://github.com/Pedrohenrique1309/GYM_BUDDY
</a>
</p>

---

<h2>👨‍💻 Autor</h2>

<p>
<b>Pedro Fernandes</b>
</p>

<p>
💻 GitHub<br>
<a href="https://github.com/Pedrohenrique1309">
https://github.com/Pedrohenrique1309
</a>
</p>

<p>
💼 LinkedIn<br>
<a href="https://www.linkedin.com/in/pedro-fernandes-954b20308/">
https://www.linkedin.com/in/pedro-fernandes-954b20308/
</a>
</p>

---

<h2>📄 Licença</h2>

<p>
Projeto desenvolvido para fins acadêmicos e de aprendizado.
</p>