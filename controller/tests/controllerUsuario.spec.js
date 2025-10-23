//DESCRIBE -> Bloco tests - tests suites
//IT or TEST -> Declara um unico teste unitario - tests cases
//EXPECT -> asserção do resultado - validar resultado

//Importe da controllerUsuario
const controllerUsuario = require('../usuario/controllerUsuario.js');


describe("Teste de inserção de usuário", () => {
    it("deve inserir um novo usuário", async() => {
        const novoUsuario = {
            nome: "João Silva",
            nickname: "joaosilva",        
            email: "joao.silva213@example.com",
            senha: "senhaSegura123"
        };

        const resultado = await controllerUsuario.inserirUsuario(novoUsuario, 'application/json');
        
        expect(resultado.usuario).toHaveProperty("id");
        expect(resultado.usuario.nome).toBe(novoUsuario.nome);
        expect(resultado.usuario.email).toBe(novoUsuario.email);
    })
})

describe("Teste de autenticação de usuário", () => {
    it("deve autenticar um usuário existente", async() => {
        const credenciais = {
            email: "joao.silva1@example.com",
            senha: "senhaSegura123"
        };

        const resultado = await controllerUsuario.logarUsuario(credenciais);

        expect(resultado.usuario[0]).toHaveProperty("id");
    })
})

describe("Teste de listagem de usuários", () => {
    it("deve listar todos os usuários", async() => {
        const resultado = await controllerUsuario.listarUsuario();

        expect(Array.isArray(resultado.usuarios)).toBe(true);
    })
})

describe("Teste de atualização de usuário", () => {
    it("deve atualizar os dados de um usuário existente", async() => {
        const idUsuario = 5; 
        const dadosAtualizados = {
            "nome": "João Silva",
            "email": "joao.silva1@example.com",
            "senha": "senha123456",
            "peso": 76.50, 
            "altura": 1.75,
            "imc": 24.65,
            "nickname": "joaos",
            "data_nascimento": "1990-05-15",
            "foto": "https://exemplo.com/imagens/joao.jpg",
            "descricao": "Gosto de esportes e tecnologia.",
            "localizacao": "São Paulo, Brasil",
            "is_bloqueado": false
        };

        const resultado = await controllerUsuario.atualizarUsuario(dadosAtualizados,idUsuario,'application/json');

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    })
})