const controllerTreino = require('../treino/controllerTreino')

describe("Teste de inserção de treino", () => {
    it("deve inserir um novo treino", async() => {
        const novoTreino = {
            "nome": "Treino A",
            "id_user": 1
        };  

        const resultado = await controllerTreino.inserirTreino(novoTreino, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de treino", () => {
    it("deve atualizar os dados de um treino existente", async () => {
        const idTreino = 1;
        const dadosAtualizados = {
            "nome": "Treino Atualizado",
            "id_user": 1
        };

        const resultado = await controllerTreino.atualizarTreino(dadosAtualizados, idTreino, 'application/json');
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
})

describe("Teste de exclusão de treino", () => {
    it("deve excluir um treino existente", async () => {
        const idTreino = 3;

        const resultado = await controllerTreino.excluirTreino(idTreino);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de listagem de treinos", () => {
    it("deve listar todos os treinos", async () => {
        const resultado = await controllerTreino.listarTreino();
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de treino", () => {
    it("deve buscar um treino existente", async () => {
        const idTreino = 1

        const resultado = await controllerTreino.buscarTreino(idTreino);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de treino pelo ID do usuário", () => {
    it("deve buscar os treinos de um usuário", async () => {
        const idUsuario = 1

        const resultado = await controllerTreino.buscarTreinoPeloUsuario(idUsuario);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})